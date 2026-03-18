const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg"
  "img5.jpg"
  "img6.jpg"
  "img7.jpg"
  "img8.jpg"
];

let index = 0;

document.addEventListener("mousemove", (e) => {
  const img = document.createElement("img");

  img.src = images[index];
  img.style.position = "fixed";
  img.style.left = e.clientX + "px";
  img.style.top = e.clientY + "px";
  img.style.width = "120px";
  img.style.transform = "translate(-50%, -50%)";
  img.style.pointerEvents = "none";
  img.style.opacity = 0.8;

  document.body.appendChild(img);

  // eliminar después de un tiempo
  setTimeout(() => {
    img.remove();
  }, 500);

  index = (index + 1) % images.length;
});
