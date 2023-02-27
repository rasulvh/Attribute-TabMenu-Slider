let leftBtn = document.querySelector(".slider .left");
let rightBtn = document.querySelector(".slider .right");
let slideBtns = document.querySelectorAll(".slider .points .point");
let imgs = document.querySelectorAll(".slider .img img");

function rightSlider() {
  let activeImg = document.querySelector(".active-img");
  activeImg.classList.remove("active-img");
  if (activeImg.nextElementSibling != null) {
    activeImg.nextElementSibling.classList.add("active-img");
  } else {
    activeImg.parentNode.firstElementChild.classList.add("active-img");
  }
}

function leftSlider() {
  let activeImg = document.querySelector(".active-img");
  activeImg.classList.remove("active-img");
  if (activeImg.previousElementSibling != null) {
    activeImg.previousElementSibling.classList.add("active-img");
  } else {
    activeImg.parentNode.lastElementChild.classList.add("active-img");
  }
}

rightBtn.addEventListener("click", rightSlider);
leftBtn.addEventListener("click", leftSlider);

setInterval(rightSlider, 3000);

slideBtns.forEach((btn) => {
  btn.addEventListener("click", function(){
    let activeImg = document.querySelector(".active-img");
    activeImg.classList.remove("active-img");
  
    imgs.forEach(img => {
      if(img.getAttribute("data-id") == btn.getAttribute("data-id")){
        img.classList.add("active-img");
      }
    });
  })
});
