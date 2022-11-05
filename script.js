const navBar = document.querySelector(".backNone");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 200;
  navBar.classList.toggle("backActive", windowPosition);
});

const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// $(document).ready(function () {
//   $(".nav-link").on("click", function () {
//     $(this).siblings().removeClass("active");
//     $(this).addClass("active");
//   });
// });
