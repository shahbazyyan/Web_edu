const username = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const text_subj = document.querySelector("#text_subj");
const conf_btn = document.querySelector("#conf_btn");
const popup = document.querySelector(".popup");
const ok_btn = document.querySelector(".ok_btn");

function openPopup() {
  if (username.value !== "" && email.value !== "" && subject.value !== "" && text_subj.value !== "") {
    popup.classList.add("open-popup");
    username.value = "";
    email.value = "";
    subject.value = "";
    text_subj.value = "";
  } else {
    alert("Please fill in all fields.");
  }
}

function closePopup() {
  ok_btn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("open-popup");
  });
}

conf_btn.addEventListener("click", (e) => {
  e.preventDefault();

  openPopup();
});

closePopup();
