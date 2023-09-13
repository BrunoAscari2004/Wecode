let company = document.getElementsByClassName("company-name")


for (let i = 0; i < company.length; i++) {
    (function (index) {
        company[index].addEventListener("click", () => window.location.href='index.html');

        company[index].addEventListener("mouseover", () => company[index].style.cursor = "pointer");
        company[index].addEventListener("mouseout", () => company[index].style.cursor = "default");
    })(i);
}