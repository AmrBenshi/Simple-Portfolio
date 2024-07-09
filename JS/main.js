window.onscroll = function () {
    var header = document.getElementById("header");
    if (window.scrollY > 100) {
        header.classList.add("scrolling");
    } else {
        header.classList.remove("scrolling");
    }
}
// dark/light mode button
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})