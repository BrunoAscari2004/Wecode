const socialicon = document.getElementsByClassName('SocialIcon')

for (let i = 0; i < socialicon.length; i++) {
    socialicon[i].addEventListener("click",()=>redirectsocial(i))

    socialicon[i].addEventListener("mouseover",()=> socialicon[i].style.cursor ="pointer");
    socialicon[i].addEventListener("mouseout",()=>socialicon[i].style.cursor = "default")
}

function redirectsocial(id){
    if(id==0){
        window.open('https://www.instagram.com/wecode.digital/', '_blank');
    }
    else if(id==1){
        window.open('https://www.facebook.com/wecode.digital/', '_blank')
    }
    else if(id==2){
        window.open('https://www.pinterest.co.uk/')
    }
    else if(id==3){
        window.open('https://twitter.com/?lang=pt', '_blank')
    }
    
    else if(id==4){
        window.open('https://www.tiktok.com/pt-BR/', '_blank')
    }
}