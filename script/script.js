let prev = document.getElementById("prev")
let next = document.getElementById("next")

prev.addEventListener("click", () => {

    window.document.getElementById("scroll").scrollTo(0, 0)
})

next.addEventListener("click", () => {

    window.document.getElementById("scroll").scrollBy(450,0)
})

