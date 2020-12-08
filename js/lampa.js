let element = document.body;
let lampa = localStorage.getItem("lampa");

if (!lampa) {
  element.classList.toggle(lampa);
  localStorage.setItem("lampa", "white-mode");
  lampa = "white-mode";
} else {
  element.classList.toggle(lampa);
}

function lampka() {
  if (lampa === "white-mode") {
    element.classList.toggle("dark-mode");
    localStorage.setItem("lampa", "dark-mode");
    lampa = "dark-mode";
  } else if (lampa === "dark-mode") {
    element.classList.toggle("dark-mode");
    localStorage.setItem("lampa", "white-mode");
    lampa = "white-mode";
  }
}
