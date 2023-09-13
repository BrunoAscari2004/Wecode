const knowmore = document.getElementsByClassName('main-knowmore-carrosel-item')

for (let i = 0; i < knowmore.length; i++) {
    knowmore[i].addEventListener("click",()=>redirect(i))

    knowmore[i].addEventListener("mouseover",()=> knowmore[i].style.cursor ="pointer");
    knowmore[i].addEventListener("mouseout",()=>knowmore[i].style.cursor = "default")
}

function redirect(id){
    if(id==0){
        window.open('https://www.dicasdetreino.com.br/cafe-corta-o-efeito-da-creatina/', '_blank');
    }
    else if(id==1){
        window.open('https://blog.ucoffee.com.br/cardapio-de-cafeteria/', '_blank')
    }
    else if(id==2){
        window.open('https://tudosobrecafe.com/como-fazer-pudim-de-cafe', '_blank')
    }
    else if(id==3){
        window.open('https://www.mokaclube.com.br/blog/cafe-arabica/', '_blank')
    }
}