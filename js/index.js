// Select elements
const img = document.querySelector("img");
const btns = document.querySelector(".buttons");
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
console.log(img);
console.log(btns);

// Intital image id
let id = 1;
// Number of images
const numberOfImgs = 7;

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
console.log("Initial Id = " + id);

// Buttons event Click listener

btns.addEventListener("click", (e) => {
  if (e.target.textContent == "Next") {
    id++;
    handleBtns();
    img.setAttribute("src", "./img/img0" + id + ".jpg");
    console.log("Next btn");
    console.log("Next Id= " + id);
  } else if (e.target.textContent == "Prev") {
    id--;
    img.setAttribute("src", "./img/img0" + id + ".jpg");
    handleBtns();
    console.log("Prev button");
    console.log("Prev Id =" + id);

    console.log(id);
  }
});
