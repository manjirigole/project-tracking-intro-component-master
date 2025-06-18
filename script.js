document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  const hamburgerIcon = document.querySelector(".icon-hamburger");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");

    if (mobileNav.classList.contains("hidden")) {
      hamburgerIcon.src = "./images/icon-hamburger.svg";
      mobileNav.style.display = "none";
    } else {
      hamburgerIcon.src = "./images/icon-close.svg";
      mobileNav.style.display = "flex";
    }
  });
});
