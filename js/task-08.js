const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;  
  const mail = formElements.email.value;
  const password = formElements.password.value;  

  if (mail === "" || password === "") {
    alert("Всі поля повинні бути заповнені !!!");
  }

  console.log(`Login: ${mail}, Password: ${password}`);
  event.currentTarget.reset();
};