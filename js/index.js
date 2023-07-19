// Select elements
const img = document.querySelector("img");
const btns = document.querySelector(".buttons");
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const image = document.querySelector(".image");
const images = document.querySelector(".images");
console.log(img);
console.log(btns);

// Intital image id
let id = 1;
// Number of images
const numberOfImgs = 7;

let position = img.width+10;

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

// Fucntion Show Image
// const showImage = (id, direction) => {
//   img.setAttribute("src", "./img/img0" + id + ".jpg");
// };

// function reset_animation() {
//   image.style.animation = "none";
//   image.offsetHeight; /* trigger reflow */
//   image.style.animation = null;
// }

handleBtns();
console.log("Initial Id = " + id);

// Buttons event Click listener
console.log(img.width);


btns.addEventListener("click", (e) => {
  if (e.target.textContent == "Next") {
    // reset_animation();
    images.style.transform = `translateX(-${position}px)`;
    position+=position;
    console.log(position);
    

    id++;
    handleBtns();

    console.log("Next btn");
    console.log("Next Id= " + id);
  } else if (e.target.textContent == "Prev") {
    // reset_animation();
    id--;
    img.setAttribute("src", "./img/img0" + id + ".jpg");
    // image.style.animation = "rightToLeft 1s";
    handleBtns();
    console.log("Prev button");
    console.log("Prev Id =" + id);

    console.log(id);
  }
});
