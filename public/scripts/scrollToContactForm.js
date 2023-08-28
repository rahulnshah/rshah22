const scrollToContactFormButton = document.getElementById('scrollToContactFormButton');
const formHeader= document.querySelector('.contact-form-header');

scrollToContactFormButton.addEventListener('click', function () {
    formHeader.scrollIntoView({ behavior: 'smooth' });
});