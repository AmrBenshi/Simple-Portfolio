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
const checkbox_btn = document.getElementById("checkbox-label")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
    checkbox_btn.classList.toggle("dark")
})