const indicatorsCtn = document.querySelector(".indicators");
const imagesCtn = document.querySelector(".images");

const indicators = Array.from(indicatorsCtn.querySelectorAll("svg"));
const images = Array.from(imagesCtn.querySelectorAll("img"));

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

let index = 0;

const removeClasses = () => {
  images.forEach((element) => {
    element.classList.remove("is-display-img");
  });

  indicators.forEach((element) => {
    element.classList.remove("is-selected");
  });
};

const moveToLeft = () => {
  removeClasses();

  if (index === 0) {
    index = 4;
    indicators[index].classList.add("is-selected");
    images[index].classList.add("is-display-img");
  } else {
    index--;
    indicators[index].classList.add("is-selected");
    images[index].classList.add("is-display-img");
  }
};

const moveToRight = () => {
  removeClasses();

  index < 4 ? index++ : (index = 0);

  indicators[index].classList.add("is-selected");
  images[index].classList.add("is-display-img");
};

const handleCarousel = () => {
  leftBtn.addEventListener("click", moveToLeft);
  rightBtn.addEventListener("click", moveToRight);
};

export default handleCarousel;
