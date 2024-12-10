const nav = document.getElementById("navBtn");
const navBtn = document.getElementById("nav-btn");
const sidebar = document.getElementById("sidebar");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    nav.classList.add("navbar-fixed");
  } else {
    nav.classList.remove("navbar-fixed");
  }
});

// show sidebar
navBtn.addEventListener("click", function () {
  if (!sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.add("show-sidebar");
  } else {
    sidebar.classList.remove("show-sidebar");
  }
});
