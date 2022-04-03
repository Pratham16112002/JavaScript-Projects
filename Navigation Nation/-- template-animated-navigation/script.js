 const menuBars=document.getElementById('menu-bars');
 const overlay=document.getElementById('overlay');
 const nav1=document.getElementById('nav-1');
 const nav1=document.getElementById('nav-2');
 const nav1=document.getElementById('nav-3');
 const nav1=document.getElementById('nav-4');
 const nav1=document.getElementById('nav-5');


 function toggleNav(){
    //  Toggle: menu Bars Open/Closed
    menuBars.classList.toggle('change');
    
 }

//  Event Listeners

menuBars.addEventListener('click',toggleNav);
nav1.addEventListener('click',toggleNav);
nav1.addEventListener('click',toggleNav);
nav1.addEventListener('click',toggleNav);
nav1.addEventListener('click',toggleNav);
nav1.addEventListener('click',toggleNav);


