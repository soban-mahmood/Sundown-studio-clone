        const scroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        });

            var elemC = document.querySelector("#elem-container");
            var fix = document.querySelector("#fixed-img");
            elemC.addEventListener("mouseenter", function () {
            fix.style.display = "block";
            });

            elemC.addEventListener("mouseleave", function () {
            fix.style.display = "none";
            });

            var elem = document.querySelectorAll("#elem");
            elem.forEach(function (e) {
            e.addEventListener("mouseenter", function () {
                var image = e.getAttribute("data-image");
                fix.style.backgroundImage = `url(${image})`;
            });
            });

            // var menu = document.querySelector("nav h3");
            // var full = document.querySelector("#full-scr");
            // menu.addEventListener("click", function () {
            //   full.style.top = "0%";
            // });

            var loader = document.querySelector("#loder");
            setTimeout(function () {
            loader.style.top = "-100%";
            }, 4000);
