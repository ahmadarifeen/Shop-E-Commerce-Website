const toggler = document.querySelector(".btn");
toggler.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
});
const sidebar = document.getElementById("sidebar");

sidebar.addEventListener("mouseenter", function () {
    sidebar.classList.remove("collapsed");
});

sidebar.addEventListener("mouseleave", function () {
    sidebar.classList.add("collapsed");
});
