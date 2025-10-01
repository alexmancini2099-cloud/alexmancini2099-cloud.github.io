console.log("vis.js is loaded");



let triangle = document.querySelector("polygon");


    triangle.addEventListener("click", function() {
        let randomColor = Math.floor(Math.random() * 1677721);
        triangle.setAttribute("fill", `#${randomColor}`);
    });
