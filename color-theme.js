export function lightMode() {
  console.log("Switching to light mode");
  let element = document.body;
  element.classList.remove('dark-mode');
  element.classList.add('light-mode');
}

export function darkMode() {
  console.log("Switching to dark mode");
  let element = document.body;
  element.classList.remove('light-mode');
  element.classList.add('dark-mode');
}

window.lightMode = lightMode;
window.darkMode = darkMode;
