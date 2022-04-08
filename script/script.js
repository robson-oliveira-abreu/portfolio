const scrollLinks = document.querySelectorAll(".scroll-to")
const menuButton = document.querySelector(".section-menu")
const mobileNavBar = document.querySelector(".mobileNavBar")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle("on")

    menuClassList = menuButton.getAttribute("class").slice(-2)

    if (menuClassList == "on") {
        mobileNavBar.classList.add("activeMenu")
        body.classList.add("hiddenScrollBody") 

    } else {
        mobileNavBar.classList.remove("activeMenu")
        body.classList.remove("hiddenScrollBody")
    }

})

scrollLinks.forEach((item) => {
    item.addEventListener("click", () => {

        mobileNavBar.classList.remove("activeMenu")
        menuButton.classList.remove("on")
        body.classList.remove("hiddenScrollBody")

        const el = document.getElementById(item.getAttribute("data-link"))
        el.scrollIntoView({ behavior: "smooth", block: "nearest" })

    })
})

prev.addEventListener("click", () => {

    document.getElementById("scroll").scrollTo(0, 0)
})

next.addEventListener("click", () => {

    document.getElementById("scroll").scrollBy(420, 0)
})

