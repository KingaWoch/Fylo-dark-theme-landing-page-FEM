const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
  let emailValue = email.value;

  if (!emailValue.match(pattern)) {
    error.classList.add("visible");
  } else {
    error.classList.remove("visible");
  }
});
