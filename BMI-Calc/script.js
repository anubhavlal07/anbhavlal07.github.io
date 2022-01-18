var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
function validateForm() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  } else {
    countBmi();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);
function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }
  //form.reset();
  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
  var result = "";
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Healthy";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Overweight";
  } else {
    result = "Obese";
  }
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");
  var res = document.createTextNode(result);
  var b = document.createTextNode("BMI: ");
  var value = document.createTextNode(parseFloat(bmi).toFixed(2));
  h1.appendChild(res);
  h2.appendChild(b);
  h2.appendChild(value);
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateForm);

  function clearForm() {
    location.reload();
  }
  setInterval(clearForm, 6500);
}
document.getElementById("submit").addEventListener("click", countBmi);

document.addEventListener(
  "keydown",
  function () {
    if (event.keyCode == 123) {
      alert("This function has been disabled for security reasons.");
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      alert("This function has been disabled for security reasons.");
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      alert("This function has been disabled for security reasons.");
      return false;
    }
  },
  false
);

if (document.addEventListener) {
  document.addEventListener(
    "contextmenu",
    function (e) {
      alert("This function has been disabled for security reasons.");
      e.preventDefault();
    },
    false
  );
} else {
  document.attachEvent("oncontextmenu", function () {
    alert("This function has been disabled for security reasons.");
    window.event.returnValue = false;
  });
}
