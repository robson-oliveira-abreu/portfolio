const scrollLinks = document.querySelectorAll(".scroll-to")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

scrollLinks.forEach((item) => {
    item.addEventListener("click", () => {
        const el = document.getElementById(item.getAttribute("data-link"))
        el.scrollIntoView({behavior: "smooth", block: "nearest"})
    })
})

prev.addEventListener("click", () => {

    window.document.getElementById("scroll").scrollTo(0, 0)
})

next.addEventListener("click", () => {

    window.document.getElementById("scroll").scrollBy(465,0)
})

