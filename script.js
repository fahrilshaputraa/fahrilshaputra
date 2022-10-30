const navBar = document.querySelector(".backNone");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 200;
  navBar.classList.toggle("backActive", windowPosition);
});
