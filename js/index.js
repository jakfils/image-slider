// Select elements
const img = document.querySelector("img");
const btns = document.querySelector(".buttons");
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const image = document.querySelector(".image");
const images = document.querySelector(".images");

// Intital image id
let id = 1;
// Number of images
const numberOfImgs = 7;
// All images Div abscissia
let imagesAbscissa = 0;

// Function handle Buttons
const handleBtns = () => {
  if (id === 1) {
    prev.classList.add("invisible");
  } else if (id === numberOfImgs) {
    next.classList.add("invisible");
  } else {
    prev.classList.remove("invisible");
    next.classList.remove("invisible");
  }
};

handleBtns();

// Buttons event Click listener
btns.addEventListener("click", (e) => {
  if (e.target.textContent == "Next") {
    images.style.transform = `translateX(-${
      imagesAbscissa + img.width + 10
    }px)`;
    imagesAbscissa += img.width + 10;
    id++;
    handleBtns();
  } else if (e.target.textContent == "Prev") {
    images.style.transform = `translateX(-${
      imagesAbscissa - (img.width + 10)
    }px)`;
    imagesAbscissa -= img.width + 10;
    id--;
    img.setAttribute("src", "./img/img0" + id + ".jpg");
    handleBtns();
  }
});

// Reload Page on window Resize
window.addEventListener("resize", (e) => {
  location.reload();
});
