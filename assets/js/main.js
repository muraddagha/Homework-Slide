let images = document.querySelectorAll(".img");
let modal = document.querySelector(".modal-gallery");
let modalImg = document.querySelector("#modal-img");
let slideItem = document.querySelectorAll(".slide-item");

//events
images.forEach((value) => {
  value.addEventListener("click", function () {
    popUpModal(value, this.src);
  });
});
modal.addEventListener("click", function (e) {
  if (e.target == this) {
    closeButton();
  }
});
document.querySelector(".close").addEventListener("click", closeButton);
document.querySelector(".next-btn").addEventListener("click", nextButton);
document.querySelector(".prev-btn").addEventListener("click", prevButton);

//functions
function popUpModal(value, src) {
  modal.style.display = "flex";
  modalImg.src = src;
  value.parentNode.classList.add("active");
  window.addEventListener("wheel", wheelScroll);
  window.addEventListener("keydown", changeByKey);
}
function closeButton() {
  modal.style.display = "none";
  slideItem.forEach((e) => {
    e.classList.remove("active");
  });
  window.removeEventListener("wheel", wheelScroll);
  window.removeEventListener("keydown", changeByKey);
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
    document.querySelector(".slide-item:last-child").classList.add("active");

    modalImg.src = getImgSrc();
  }
}
function getImgSrc() {
  let activeImgSrc = document.querySelector(".active").children[0].src;
  return activeImgSrc;
}
function wheelScroll(e) {
  if (e.deltaY < 0) {
    nextButton();
  }
  if (e.deltaY > 0) {
    prevButton();
  }
}
function changeByKey(e) {
  if (e.key == "ArrowRight") {
    nextButton();
  }
  if (e.key == "ArrowLeft") {
    prevButton();
  }
  if (e.key == "Escape") {
    closeButton();
  }
}
