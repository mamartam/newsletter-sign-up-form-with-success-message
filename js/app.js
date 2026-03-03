//CONNECTION WITH DOM
const userEmail = document.getElementById("user-email");
const errorMessage = document.querySelector(".error-message");
const form = document.querySelector(".form");
const subscribeBtn = document.querySelector(".subscribe-btn");
const imgSection = document.querySelector(".img-section");
const infoSection = document.querySelector(".info-section");
const successSection = document.querySelector(".success-section");
const dismissMessageBtn = document.querySelector(".dismiss-message-btn");
const successAccent = document.querySelector(".success-accent");

let isCorrectEmail = false;
let usersEmail = null;

// FUNCTIONS SECTION START------
function emailValidator(str) {
  const regexForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regexForEmail.test(str);
}
function removeClass(element, className) {
  element.classList.remove(className);
}
function addClassName(element, className) {
  element.classList.add(className);
}
userEmail.addEventListener("input", (event) => {
  let inputedEmail = String(event.target.value);
  checkEmailInputField(inputedEmail);
});
function checkEmailInputField(inputedValue) {
  if (inputedValue.trim() !== "") {
    if (emailValidator(inputedValue) === true) {
      removeClass(userEmail, "error");
      addClassName(userEmail, "without-error");
      addClassName(errorMessage, "hide");
      isCorrectEmail = true;
      usersEmail = inputedValue.trim();
      subscribeBtn.disabled = false;
    } else if (emailValidator(inputedValue) === false) {
      addClassName(userEmail, "error");
      removeClass(userEmail, "without-error");
      removeClass(errorMessage, "hide");
      errorMessage.textContent = "Valid email required";
      isCorrectEmail = false;
      usersEmail = null;
    }
  } else if (inputedValue.trim() === "") {
    errorMessage.textContent = "Please enter your email";
    addClassName(userEmail, "error");
    removeClass(userEmail, "without-error");
    removeClass(errorMessage, "hide");
    isCorrectEmail = false;
    usersEmail = null;
  }
}
// FUNCTIONS SECTION END------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkEmailInputField(userEmail.value);
  if (isCorrectEmail) {
    console.log("success");
    userEmail.value = "";
    addClassName(imgSection, "hide");
    addClassName(infoSection, "hide");
    removeClass(successSection, "hide");
    successAccent.textContent = usersEmail;
  } else {
    console.log("error");
    return;
  }
});
dismissMessageBtn.addEventListener("click", () => {
  removeClass(imgSection, "hide");
  removeClass(infoSection, "hide");
  addClassName(successSection, "hide");

  removeClass(userEmail, "without-error");
  removeClass(userEmail, "error");
  addClassName(errorMessage, "hide");

  subscribeBtn.disabled = true;
});
