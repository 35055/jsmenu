let menu = document.querySelector('.menu-icon'),
    hidMenu = document.querySelector('.hidden-menu'),
    exMenu = document.querySelector('.menu-icon_exit'),
    fon = document.querySelector('.fon'),
    hidText = document.querySelector('.btn');

(function(){
   menu.addEventListener('click',() => {
       menu.style.right = '-100px';
       hidMenu.style.top = '25px';
       fon.style.top = '0';    
   }) 
}())

(function(){
    exMenu.addEventListener('click',() => {
        hidMenu.style.top = '-350px';
        fon.style.top = '-1000px';
        menu.style.right = '17px';
    }) 
 }())
    