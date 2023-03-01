let left = document.querySelector(".head .left");
let right = document.querySelector(".head .right");
let allNews = [...document.querySelectorAll(".news-all")]

allNews.forEach((item, i) => {
    let newsDimension = item.getBoundingClientRect();
    let newsWidth = newsDimension.width;

    right.addEventListener("click", function(){
        item.scrollLeft += newsWidth/5
    })

    left.addEventListener("click", function(){
        item.scrollLeft -= newsWidth/5
    })

});