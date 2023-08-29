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
  // convert the data in URL encoded data 
  const contact_data = new URLSearchParams(contact_form_data);
  const payload = { data: {} };
  for (const [key, value] of contact_data.entries()) {
    payload.data.key = value;
  }
  const postFetchPromise = fetch("http://localhost:8000/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: payload
  });

  postFetchPromise
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.text();
    })
    .then(text => {
      console.log("contact form msgs shown!");
    })
    .catch(error => {
      console.log(`Could not render contact form msgs: ${error}`);
    });

});
