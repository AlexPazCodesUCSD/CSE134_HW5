document.addEventListener("DOMContentLoaded", function () {
  let theme = localStorage.getItem("theme");

  if (theme) {
    applyTheme(theme);
  } else {
    applyTheme("light");
  }

  const themeButton = document.getElementById("theme-button");
  themeButton.textContent = theme === "dark" ? "Dark 🌙" : "Light ☀️";

  themeButton.addEventListener("click", () => {
    theme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
    applyTheme(theme);
    themeButton.textContent = theme === "dark" ? "Dark 🌙" : "Light ☀️";
  });

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.style.setProperty("--background-color", "#333333");
      document.documentElement.style.setProperty("--text-color", "#ffffff");
      document.documentElement.style.setProperty("--tab-background-color", "#494949");
    } else {
      document.documentElement.style.setProperty("--background-color", "#ffffff");
      document.documentElement.style.setProperty("--text-color", "#000000");
      document.documentElement.style.setProperty("--tab-background-color", "#f2f6f9");
    }
    localStorage.setItem("theme", theme);
  }
});
