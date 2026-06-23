if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

}


fetch("sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("sidebar-container").innerHTML = data;
    });

    document.addEventListener("click", function(event) {

    if (event.target.id === "darkModeBtn") {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    }

});

