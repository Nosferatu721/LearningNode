document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    let titleNodo = document.getElementById("title");
    titleNodo.textContent = titleNodo.textContent.toUpperCase();
  }, 3000);
});
