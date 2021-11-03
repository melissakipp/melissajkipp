const contactForm = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const errorElement = document.querySelector("#errorBox");

contactForm.addEventListener("submit", (e) => {
  let errorInfo = [];
  if (fullName.value === "" || fullName.value == null || fullName.value < 3) {
    errorInfo.push("&#9940; Name is required. Must be 3 or more characters.");
  }

  if (errorInfo.length > 0) {
    e.preventDefault();
    errorElement.innerText = errorInfo.join(", ");
  }
});

// contactForm.addEventListener("submit", (e) => {
//   checkInputs();
//   e.preventDefault();
// });
// // &#9940; Please enter your name &lpar;min. of 3 characters&rpar;.
// function checkInputs() {
//   // get the values from the inputs
//   const nameValue = fullName.value.trim();
//   const emailValue = email.value.trim();

//   if (nameValue === "") {
//     // show error
//     // add error class
//     setErrorFor(fullName, "&#9940; Name field cannot be blank.");
//   } else {
//     // add success class
//     setSuccessFor(fullName);
//   }
// }

// function setErrorFor(errorControl, message) {
//   const errorControl = contactForm.querySelector(".errorControl");
//   console.log(errorControl);
//   const small = errorControl.querySelector("small");
//   // add error message inside small
//   small.innerText = message;
//   // add error class
//   errorControl.className = "error-msg";
// }

// document.addEventListener("load", (e) => {
//   // Get references to the form elements
//   const contactForm = document.querySelector("#contactForm");
//   const submitContact = document.querySelector("#submitContact");
//   const message = document.querySelector("#message");
//   document.querySelector("#email").addEventListener("keydown", blockspace);
//   e.preventDefault();
//   isNameValid();
//   addDirtyListeners();

//   let validitychecks = {
//     "name": "Please enter your full name (minimum is 3 characters).",
//     "email": "Please check email address.",
//     "message": "Please give a short description for request.",
//   };

//   message.addEventListener("change", () => {
//     let counter = document.querySelector("#count");
//     let currentNum = message.value.length;
//     counter.textContent = `${currentNum}`;

//     if (currentNum <= 30) {
//       counter.style.color = "#f03846";
//     } else {
//       counter.style.color = "#008a65";
//     }
//   });

//   // Given a form field, run a custom check to see if the content is valid
//   // and set the custom message if it is not
//   function checkFieldValid(field) {
//     // remove any old custom error message that was there before
//     field.setCustomValidity("");
//     let isvalid = field.checkValidity();
//     if (!isvalid) field.setCustomValidity(validitychecks[field.id]);
//   }

//   // Check the validity of each form element
//   function runFieldChecks() {
//     ["fullName", "email", "message"].forEach((elem) => {
//       let field = document.getElementById(elem);
//       checkFieldValid(field);
//     });
//   }

//   // Check all the fields in the form when the user clicks Submit
//   submitContact.addEventListener("click", (evt) => {
//     if (theform.checkValidity() === false) {
//       runFieldChecks();
//     }
//   });

//   // set up change listeners to validate each element
//   // when the value changes
//   ["fullName", "email", "message"].forEach((elem) => {
//     document.getElementById(elem).addEventListener("change", (evt) => {
//       checkFieldValid(evt.srcElement);
//     });
//   });
// });

// const name = document.querySelector("#fullName");

// function isNameValid(name) {
//   const pattern = "/^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*/";
//   if (preg_match(pattern, name)) {
//     return true;
//   }
//   return false;
// }

// function addDirtyListeners() {
//   contactForm = document.querySelector("#contactForm");
//   let inputs = contactForm.getElementsByTagName("input");
//   for (let i = 0; i < inputs.length; i++) {
//     let input = inputs[i];
//     input.addEventListener("input", dirtyInput);
//     input.addEventListener("blur", dirtyInput);
//   }
// }

// function dirtyInput(evt) {
//   elem = evt.srcElement;
//   if ((elem.nodeName = "INPUT")) {
//     elem.classList.add("dirty");
//   }
// }

// function blockspace(evt) {
//   if (evt.key == " ") {
//     evt.preventDefault();
//   }
// }
