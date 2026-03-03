const userEmail = document.getElementById("user-email");
const errorMessage = document.querySelector(".error-message");
const form = document.querySelector(".form");
const subscribeBtn = document.querySelector(".subscribe-btn");
let isCorrectEmail = false;

function emailValidator(str) {
  const regexForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regexForEmail.test(str);
}
function checkEmailInputField(inputedValue) {
  if (inputedValue.trim() !== "") {
    if (emailValidator(inputedValue) === true) {
      userEmail.classList.remove("error");
      userEmail.classList.add("without-error");
      errorMessage.classList.add("hide");
      isCorrectEmail = true;
      subscribeBtn.disabled = false;
    } else if (emailValidator(inputedValue) === false) {
      userEmail.classList.add("error");
      userEmail.classList.remove("without-error");
      errorMessage.classList.remove("hide");
      errorMessage.textContent = "Valid email required";
    }
  } else if (inputedValue.trim() === "") {
    errorMessage.textContent = "Please enter your email";
    userEmail.classList.add("error");
    userEmail.classList.remove("without-error");
    errorMessage.classList.remove("hide");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkEmailInputField(userEmail.value);
  if (isCorrectEmail) {
    console.log("success");
    userEmail.value = "";
  } else {
    console.log("error");
  }
});
userEmail.addEventListener("blur", (event) => {
  let inputedEmail = String(event.target.value);
  checkEmailInputField(inputedEmail);
});
