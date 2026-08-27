document.addEventListener("DOMContentLoaded", function () {

    // ТЕКУЩИЙ ГОД
    document.getElementById("year").textContent =
        new Date().getFullYear();


    // МОБИЛЬНОЕ МЕНЮ
    const menuButton = document.getElementById("menuButton");
    const nav = document.getElementById("nav");

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("active");

        menuButton.textContent =
            nav.classList.contains("active") ? "✕" : "☰";

    });


    // ЗАКРЫТИЕ МЕНЮ
    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");
            menuButton.textContent = "☰";

        });

    });


    // КНОПКА «НАВЕРХ»
    const toTop = document.getElementById("toTop");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {
            toTop.classList.add("show");
        } else {
            toTop.classList.remove("show");
        }

    });

    toTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});