/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("navMenu"),
  navToggle = document.getElementById("navToggle"),
  navClose = document.getElementById("navClose");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("showMenu");
  });
}

/*===== MENU HIDDEN =====*/

/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("showMenu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".navLink");

const linkAction = () => {
  const navMenu = document.getElementById("navMenu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("showMenu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/
let swiper = new Swiper(".projectContainer", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

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
          contactAlert.textContent = " Message sent ✅";

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

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".navMenu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("activeLink");
    } else {
      sectionsClass.classList.remove("activeLink");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scrollUp");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("showScroll")
    : scrollUp.classList.remove("showScroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("themeButton");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("backgroundHeader")
    : header.classList.remove("backgroundHeader");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  // reset: true /*Animation repeat*/,
});
scrollReveal.reveal(`.homeData,.projectContainer,.footerContainer`);
scrollReveal.reveal(`.homeInfo div`, {
  delay: 400,
  origin: "bottom",
  interval: 100,
});
scrollReveal.reveal(`.skillContent:nth-child(1),.contactContent`, {
  origin: "left",
});
scrollReveal.reveal(`.skillContent:nth-child(2)`, { origin: "right" });
scrollReveal.reveal(`.qualificationContainer,.knowledgeCard`, {
  interval: 100,
});

// Dynamic year Footer
let year = new Date().getFullYear();
document.getElementById(
  "footerCopy"
).innerHTML = `Developed and Maintained by <a href="https://github.com/anubhavlal07" target="_blank">Anubhav Lal</a> <br> &copy; ${year} All Rights Reserved.`;

// Diable input from users
(document.onkeydown = function (event) {
  if (event.keyCode == 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 86) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 117) {
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    return false;
  }
}),
  false;
if (document.addEventListener) {
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );
} else {
  document.attachEvent("oncontextmenu", function () {
    window.event.returnValue = false;
  });
}
