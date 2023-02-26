// let tabs = document.querySelectorAll(".left .content .item")
// let contents =document.querySelectorAll(".right .item")
// let icons = document.querySelectorAll("i")

// tabs.forEach(tab => {
//     tab.addEventListener("click", function(){
//         document.querySelector(".active-tab").classList.remove("active-tab")
//         this.classList.add("active-tab")

//         icons.forEach(icon => {
//             if (this.getAttribute("data-id") == icon.getAttribute("data-id")) {
//                 icon.classList.remove("d-none")
//             }
//             else{
//                 icon.classList.add("d-none")
//             }
//         });

//         contents.forEach(content => {
//             if (this.getAttribute("data-id") == content.getAttribute("data-id")) {
//                 content.classList.remove("d-none")
//             }
//             else{
//                 content.classList.add("d-none")
//             }
//         });
//     })
// });

let leftBtn = document.querySelector(".slider .left");
let rightBtn = document.querySelector(".slider .right");

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
