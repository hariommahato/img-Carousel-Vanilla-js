let nextArrow = document.getElementById("next");
let prevArrow = document.getElementById("prev");
let carou = document.getElementById("carou-img");
let image = [
  {
    src: "./img/first.jpg",
  },

  {
    src: "./img/second.jpg",
  },
  {
    src: "./img/third.jpg",
  },
];

let index = 0;

nextArrow.addEventListener("click", () => {
  carou.src = image[index].src;
  index = (index + 1) % image.length;
});

prevArrow.addEventListener("click", () => {
  index = (index - 1 + image.length) % image.length;
  carou.src = image[index].src;
});
