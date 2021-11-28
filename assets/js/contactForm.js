const contactForm = document.querySelector("#contactForm");
const fullNameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");

contactForm.addEventListener("submit", sendForm);

// On the submit button's click event
function sendForm(e) {
  // stop submission
  e.preventDefault();
  // reset
  resetForm();
  // validation
  validateForm();

  fetchFormData();
}

function resetForm() {
  const clearInputs = document.querySelector("input");
  clearInputs.setAttribute("aria-invalid", "false");
  clearInputs.setAttribute("aria-describedby", null);

  // clear live region
  document.querySelector("#errorMsg").innerHTML === "";

  // hide all input hints for now
  document.querySelectorAll(".hint").forEach((hint) => {
    hint.style.display = "none";
  });
}

// functions for checking form input values
function invalidEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !regex.test(email);
}

function invalidUsername(fullName) {
  const regex = /^(?=.{3}).*[A-Za-z]/;
  return !regex.test(fullName);
}

function validateForm() {
  // reset
  let errors = false;
  // collect input values
  const emailValue = emailInput.value.trim();
  const fullNameValue = fullNameInput.value.trim();

  // set attrs and error var if email invalid
  if (invalidEmail(emailValue)) {
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.setAttribute("aria-describedby", "emailHint");

    // show aria-describedby hint
    document.querySelector("#emailHint").style = "";

    errors = true;
  }

  // set attrs and error var if name invalid
  if (invalidUsername(fullNameValue)) {
    fullNameInput.setAttribute("aria-invalid", "true");
    fullNameInput.setAttribute("aria-describedby", "fullNameHint");

    // show aria-describedby hint
    document.querySelector("#fullNameHint").style = "";

    errors = true;
  }

  // if there are errors...
  if (errors) {
    // and populate live region
    const errorBox = document.querySelector("#errorMsg");
    errorBox.setAttribute("aria-invalid", "true");
    errorBox.innerHTML =
      "<p>Your form has errors. Please fix them and submit again.</p>";
  }
}

function fetchFormData() {
  fetch("https://formsubmit.co/ajax/melissakipp.az@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: "FormSubmit",
      message: "From",
    }),
  })
    .then((response) => response.json())
    .then((data) => data.sendForm)
    .catch((error) => console.log(error));
}
