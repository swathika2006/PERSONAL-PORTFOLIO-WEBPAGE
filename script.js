// Future interactive features can go here.
// For now, this is just a placeholder.
console.log("Portfolio loaded");
document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.querySelector(".dropdown > a");
  const content = document.querySelector(".dropdown-content");

  dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    content.style.display = (content.style.display === "block") ? "none" : "block";
  });

  // Optional: close dropdown when clicking outside
  document.addEventListener("click", function(e) {
    if (!dropdown.contains(e.target) && !content.contains(e.target)) {
      content.style.display = "none";
    }
  });
});
