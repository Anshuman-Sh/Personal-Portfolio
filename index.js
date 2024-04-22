const crossIcon = document.getElementById("cross-icon");
const hamIcon = document.getElementById("ham-icon");
const sidebar = document.getElementById("sidebar");

crossIcon.addEventListener("click", () => {
  sidebar.classList.add("sidebar-move");
  crossIcon.style.display = "none";
  hamIcon.style.display = "block";
});

hamIcon.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-move");
  crossIcon.style.display = "block";
  hamIcon.style.display = "none";
});
