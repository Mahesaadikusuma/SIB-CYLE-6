const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("menu");

hamburger.addEventListener("click", function () {
  toogleMenu();
});

function toogleMenu() {
  if (navMobile.classList.contains("navigation-mobile")) {
    navMobile.classList.remove("navigation-mobile");
    navMobile.classList.add("hidden");
  } else {
    navMobile.classList.add("navigation-mobile");
    navMobile.classList.remove("hidden");
  }
}
