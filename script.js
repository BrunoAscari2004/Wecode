const menu =document.getElementById('menubotao')
menu.addEventListener("click",showmenu)
menu.addEventListener("mouseover",()=> menu.style.cursor ="pointer");
menu.addEventListener("mouseout",()=>menu.style.cursor = "default")

function showmenu(){
    menu.style.border = '2px solid black'; 
    menu.style.borderRadius='5px'
    setTimeout(function () {
      menu.style.border = ''; 
      menu.style.borderRadius='';
    }, 100); 
  }
