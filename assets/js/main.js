let modal = document.querySelector(".modal-gallery");
let modalImg = document.querySelector("#modal-img");
let images = document.querySelectorAll(".img");
let slideItem = document.querySelectorAll(".slide-item");
let btnClose = document.querySelector(".close");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
window.addEventListener("wheel", function (e) {
  try {
    if (e.deltaY < 0) {
      nextButton();
    }
    if (e.deltaY > 0) {
      prevButton();
    }
  } catch (error) {}
});
//events
images.forEach((value) => {
  value.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    value.parentNode.classList.add("active");
  });
});
btnClose.addEventListener("click", function () {
  closeButton();
});
nextBtn.addEventListener("click", function () {
  nextButton();
});
prevBtn.addEventListener("click", function () {
  prevButton();
});

//functions
function closeButton() {
  modal.style.display = "none";
  slideItem.forEach((e) => {
    e.classList.remove("active");
  });
}

function nextButton() {
  let active = document.querySelector(".slide .slide-item.active");
  active.classList.remove("active");
  if (active.nextElementSibling != null) {
    active.nextElementSibling.classList.add("active");
    modalImg.src = getImgSrc();
  } else {
    slideItem[0].classList.add("active");
    modalImg.src = slideItem[0].children[0].src;
  }
}
function prevButton() {
  let active = document.querySelector(".slide .slide-item.active");
  active.classList.remove("active");
  if (active.previousElementSibling != null) {
    active.previousElementSibling.classList.add("active");
    modalImg.src = getImgSrc();
  } else {
    slideItem[3].classList.add("active");
    modalImg.src = slideItem[3].children[0].src;
  }
}
function getImgSrc() {
  let activeImgSrc = document.querySelector(".active").children[0].src;
  return activeImgSrc;
}
