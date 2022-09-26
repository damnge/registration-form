// first lets acces all the elements that we need to manipulate the DOM

const formEl = document.getElementById("form");
const usernameEl = document.getElementById("name");
const phoneNumberEl = document.getElementById("phone");
const emailEl = document.getElementById("email");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");

const messageContainerEl = document.querySelector(".message__container");
const messageEl = document.getElementById("message");
const errorEl = document.querySelectorAll(".error__message");

// we set a isValid to false because at the beginning our form is empty later when user fills up form corectly it can be reassigned to true
let isValid = false;

// we create another boolean variables where we set the value to false as at the beginning they don't match because the form is empty
let passwordsMatch = false;
let numberCorrect = false;
let emailCorrect = false;

// then lets create two variables where we store a test for a number and for an email we will use it lated in our validateForm function

let numberCheck = /^\d+$/;
let emailCheck = /\S+@\S+\.\S+/;

// lets creaet our main function that will check validation of our form, depending on the results it will exacute different error/sucess messages
function validateForm() {
  // using Constraint API method checkValidity() -> https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation
  isValid = form.checkValidity();

  // Checking first if value of our username / full name is not empty if it is error message will be shown under input border
  if (usernameEl.value.trim() === "") {
    usernameEl.style.borderColor = "red";
    errorEl[0].innerHTML = "Username cannot be blank";
    errorEl[0].style.color = "red";
  } else {
    usernameEl.style.borderColor = "green";
    errorEl[0].innerHTML = "";
  }

  // Then we check our phone number which is a little bit more complicated as we need to check few things
  // first of all we check if user is not passing the empty value, if it is error will be shown under the input
  if (phoneNumberEl.value === "") {
    phoneNumberEl.style.borderColor = "red";
    errorEl[1].innerHTML = "Number cannot be blank";
    errorEl[1].style.color = "red";
  }
  // next we need to check if the user is passing a numeric value if it's not an error will be shown under the input
  else if (!numberCheck.test(phoneNumberEl.value)) {
    phoneNumberEl.style.borderColor = "red";
    errorEl[1].innerHTML = "Please provide digits only";
    errorEl[1].style.color = "red";
  }
  // we live in Iceland so I decided that the lenght of the phone number is 7 digits so lets check if the user passes the right number length
  else if (phoneNumberEl.value.length != 7) {
    phoneNumberEl.style.borderColor = "red";
    errorEl[1].innerHTML = "Please provide 7 digits number";
    errorEl[1].style.color = "red";
  }
  // if everything is all right the input border will change into green color
  else {
    phoneNumberEl.style.borderColor = "green";
    errorEl[1].innerHTML = "";
    numberCorrect = true;
  }
  // now we can check our email, first simple we check if the value that we are passing is not empty
  if (emailEl.value.trim() === "") {
    emailEl.style.borderColor = "red";
    errorEl[2].innerHTML = "Email cannot be blank";
    errorEl[2].style.color = "red";
  } // then we are running a test if the email input value contains @ and '.'
  else if (!emailCheck.test(emailEl.value)) {
    emailEl.style.borderColor = "red";
    errorEl[2].innerHTML = "Your email address need to include @ and '.'";
    errorEl[2].style.color = "red";
  } // and if everything is fine the color will change to green and emailCorrect to true
  else {
    emailEl.style.borderColor = "green";
    errorEl[2].innerHTML = "";
    emailCorrect = true;
  }
  //   checking if our passwords match if they do we set the value of passwordsMatch to true and we will make border color green
  if (
    password1El.value &&
    password2El.value &&
    password1El.value === password2El.value
  ) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  }
//   we alsoe want to check if user does not pass any empty value to the password input if user does it error will be displayed
  else if (password1El.value.trim() === "") {
    errorEl[3].innerHTML = "Password cannot be blank";
    errorEl[3].style.color = "red";
    password1El.style.borderColor = "red";
  } else {
    // The last option will display error messaage below the confirmation password input,that passwords do not match
    passwordsMatch = false;
    errorEl[3].innerHTML = "";
    password1El.style.borderColor = "green";
    errorEl[4].innerHTML = "Make sure passwords match";
    errorEl[4].style.color = "red";
    password2El.style.borderColor = "red";
  }

  // if our form is valid which means that all the inputs are filled and passwords match display success message in green color under registration button
  if (isValid && passwordsMatch && numberCorrect && emailCorrect) {
    messageEl.textContent = "Successfully Registered!";
    messageEl.style.color = "green";
    messageContainerEl.style.borderColor = "green";
    errorEl[4].innerHTML = "";
  }
//   in the end of our function we put the last statement that display the error message that user need to fill all the fields
  if (!isValid) {
    messageEl.textContent = "Please fill out all fields!";
    messageEl.style.color = "red";
    messageContainerEl.style.borderColor = "red";
    return;
  }
}

// simpe function that creates and object that stores passed values (it's just made for testing)
function storeFormData() {
  const user = {
    name: formEl.name.value,
    phone: formEl.phone.value,
    email: formEl.email.value,
    password: formEl.password.value,
  };
  // display the user data in the console just to check if it's working, normaly we would send it to the server when you can store it securely
  console.log(user);
}

// our function that is resposible for starting the validationForm and storing passed that if everything is valid
function processFormData(e) {
  // preventDefault method stop our broswer from refreshing the website after clicking submit so we can see success and errors
  e.preventDefault();
  // Validate our Form
  validateForm();
  // We want to submit our data but only if it's valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// our event listener searching for a submit button click starting processFormData function
formEl.addEventListener("submit", processFormData);
