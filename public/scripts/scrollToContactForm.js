const scrollToContactFormButton = document.getElementById('scrollToContactFormButton');
const formHeader = document.querySelector('.contact-form-header');
const contactFormSubmitButton = document.getElementById('contactFormButton');
const contact_form = document.getElementById("contact-form");

scrollToContactFormButton.addEventListener('click', function () {
  formHeader.scrollIntoView({ behavior: 'smooth' });
});

contact_form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log("form submitted!");
  const contact_form_data = new FormData(contact_form);
  const subPayload = {};
  for (const pair of contact_form_data.entries()) {
    subPayload[pair[0]] = pair[1];
  }
  const payload = {};
  // Manually append nested properties
  payload.data = subPayload;
  // convert the data in URL encoded data 
  //const contact_data = new URLSearchParams(payload);

  const postFetchPromise = fetch("https://r-shah-portfoilio-site.vercel.app/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload) // Serialize the object as JSON
  });

  postFetchPromise
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(json => {
      const contact_form_messages = document.getElementById("contact-from-msg-box");
      let msgs = json.contact_form_msgs;
      for (let msg of msgs) {
        //create a div (or whatever wrapper we want)
        let li = document.createElement("LI");

        //set the content
        li.innerText = msg;

        if (msg === 'email sent!') {
          li.classList.add("list-group-item", "list-group-item-success");
        }
        else {
          li.classList.add("list-group-item", "list-group-item-danger");
        }

        //add the element to the DOM (if we don't it merely exists in memory)
        contact_form_messages.appendChild(li);
      }

      // Reset the form after a delay
      setTimeout(() => {
        contact_form_messages.innerHTML = "";
      }, 3000); // Hide the popup after 3 seconds
    })
    .catch(error => {
      console.log(`Could not render contact form msgs: ${error}`);
    });

});
