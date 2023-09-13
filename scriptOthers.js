let other = document.getElementsByClassName('main-others-image')

for (let i = 0; i < other.length; i++) {
    (function (index) {
        other[index].addEventListener("click", () => redirect(index));

        other[index].addEventListener("mouseover", () => other[index].style.cursor = "pointer");
        other[index].addEventListener("mouseout", () => other[index].style.cursor = "default");
    })(i);
}

function redirect(id) {
    if (id == 0) {
        window.location.href = 'https://tudosobrecafe.com/melhores-marcas-de-cafes-no-brasil';
    } else if (id == 1) {
        window.location.href = 'https://www.bistek.com.br/mercearia/matinais-cafes-chas-e-mates/cafes-tradicionais.html';
    } else if (id == 2) {
        window.location.href = 'https://www.graogourmet.com/categoria-produto/presentes/';
    } else if (id == 3) {
        window.location.href = 'WecoffeClub.html';
    }
}
