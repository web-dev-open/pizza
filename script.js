const pageContainer = document.getElementsByClassName("pageContainer")[0];

const btn = document.getElementById("btn");

const h1 = document.getElementsByTagName('h1')[0];

pageContainer.style.backgroundColor = "white";

h1.style.color = "#8b1b00";

btn.addEventListener('click', () => {
    if (pageContainer.style.backgroundColor === "white") {
        pageContainer.style.backgroundColor = "black";
        btn.innerHTML = "White Mode";
        h1.style.color = "#f85c35";
    } else {
        pageContainer.style.backgroundColor = "white";
        btn.innerHTML = "Dark Mode";
        h1.style.color = "#8b1b00";
    }
})