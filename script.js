const navBar = document.querySelector(".backNone");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 200;
  navBar.classList.toggle("backActive", windowPosition);
});

$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
});
