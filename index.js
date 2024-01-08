const circles=document.querySelectorAll(".circle")
console.log(circles)
circles.forEach(circle => {
    circle.addEventListener("click", ({target}) => {
        const {backgroundColor}=window.getComputedStyle(target)
        document.body.style.backgroundColor=backgroundColor
    })
})



let reset=document.getElementById("reset")


function lightMode() {
    location.reload();
}

