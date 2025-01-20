var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName, event) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

function openMenu() {
  var sideMenu = document.getElementById("sideMenu");
  sideMenu.style.right = "0";
}

function closeMenu() {
  var sideMenu = document.getElementById("sideMenu");
  sideMenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxlky3mC3O6djoZfy2xA1x7Umi0oPJdg_vjtps7nkTEqUkGBfvVh8jtLDRvvfWzOL3F/exec'
const form = document.forms['submit-to-google-sheet'];

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));
  });
} else {
  console.error("Form not found!");
}



