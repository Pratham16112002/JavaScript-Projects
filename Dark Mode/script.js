const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon=document.getElementById('toggle-icon');
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark Mode styles
function darkMode(){
    nav.style.backgroundColor='rbg(0 0 0 /50%)';
    textBox.style.backgroundColor='rgba(255 255 255 / 50%)';
    image1.src='dark1.svg';
    image2.src='dark2.svg';
    image3.src='dark3.svg';
   
}


// Switch Theme Dynamically
function switchTheme(evemt){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
        // lightMode();
    }
} 

// Event Listeners 
toggleSwitch.addEventListener('change', switchTheme);