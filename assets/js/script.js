let tabs = document.querySelectorAll(".left .content .item")
let contents =document.querySelectorAll(".right .item")
let icons = document.querySelectorAll("i")

tabs.forEach(tab => {
    tab.addEventListener("click", function(){
        document.querySelector(".active-tab").classList.remove("active-tab")
        this.classList.add("active-tab")

        icons.forEach(icon => {
            if (this.getAttribute("data-id") == icon.getAttribute("data-id")) {
                icon.classList.remove("d-none")
            }
            else{
                icon.classList.add("d-none")
            }
        });

        contents.forEach(content => {
            if (this.getAttribute("data-id") == content.getAttribute("data-id")) {
                content.classList.remove("d-none")
            }
            else{
                content.classList.add("d-none")
            }
        });
    })
});