//your code here
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  let draggedImage = null;

  images.forEach((image) => {
    image.addEventListener("dragstart", (e) => {
      draggedImage = e.target;
    });

    image.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    image.addEventListener("drop", (e) => {
      e.preventDefault();
      if (draggedImage !== null && draggedImage !== image) {
        // Swap content
        const tempContent = image.innerHTML;
        image.innerHTML = draggedImage.innerHTML;
        draggedImage.innerHTML = tempContent;
      }
      draggedImage = null;
    });
  });
});
