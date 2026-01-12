const images = document.querySelectorAll(".gallery img");
const preview = document.getElementById("preview");
const previewImg = document.getElementById("previewImg");

images.forEach(img => {
      img.addEventListener("click", () => {
        preview.style.display = "flex"; // open the preview modal
        previewImg.src = img.src; // set the image source
      });
});

preview.addEventListener("click", (e) => {
    if (e.target === preview) {
        preview.style.display = "none";
    }
});

// OR

document.querySelectorAll(".img-box img").forEach(img => {
  img.addEventListener("click", () => {
    window.open(img.src, "_self");
  });
});