/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contactForm");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");
const contactAlert = document.getElementById("contactAlert");

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactMessage.value === ""
  ) {
    // Alert color
    contactAlert.classList.remove("colorBlue");
    contactAlert.classList.add("colorRed");

    // Show Alert
    contactAlert.textContent = "*Please enter all the details";
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_oj3eo7t",
        "emailtemplate69",
        "#contactForm",
        "q6rJOn8gEwJVXN6WY"
      )
      .then(
        () => {
          // show message and add color
          contactAlert.classList.add("colorBlue");
          contactAlert.textContent = "✅ Email sent successfully";

          // Remove message after 5 seconds
          setTimeout(() => {
            contactAlert.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPS! Something went wrong...", error);
        }
      );
    // To clear the input field
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
