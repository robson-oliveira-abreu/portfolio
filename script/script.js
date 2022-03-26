let prev = document.getElementById("prev")
let next = document.getElementById("next")

prev.addEventListener("click", () => {

    window.document.getElementById("scroll").scrollTo(-1000, 0)
})

next.addEventListener("click", () => {

    window.document.getElementById("scroll").scrollTo(1000,0)
})

