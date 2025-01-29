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

document.addEventListener('DOMContentLoaded', () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyYbNpBcBqBEUWhlDeuqgaFsflhtqBY3gAfhmRIrnGJruwGIgKkohA3ysnf7PAgcMEQ/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message sent successfully"
        setTimeout
          (function () {
            msg.innerHTML = ""
          }, 5000)
        form.reset()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});


