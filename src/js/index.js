const buttonChangeTheme = document.getElementById("change-theme");
const body = document.querySelector("body");
const imgButtonThemeChange = document.querySelector(".button-img");

buttonChangeTheme.addEventListener("click", () => {
  const darkThemeActive = body.classList.contains("dark-theme");

  body.classList.toggle("dark-theme");

  if (darkThemeActive) {
    imgButtonThemeChange.setAttribute("src", "./src/images/sun.png");
  } else {
    imgButtonThemeChange.setAttribute("src", "./src/images/moon.png");
  }
});
