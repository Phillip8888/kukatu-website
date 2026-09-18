(function () {
    "use strict";

    var toggle = document.querySelector(".nav-toggle");
    var menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;

    function setOpen(open) {
        menu.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }

    toggle.addEventListener("click", function () {
        setOpen(!menu.classList.contains("is-open"));
    });

    menu.addEventListener("click", function (event) {
        if (event.target.tagName === "A") setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menu.classList.contains("is-open")) {
            setOpen(false);
            toggle.focus();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) setOpen(false);
    });
}());
