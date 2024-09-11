const toggle = document.getElementById('toggle');
const body = document.getElementById('body');
const pToggle = document.getElementById('p-toggle');
const dark = document.querySelectorAll('.dark');
const white  = document.querySelectorAll('.white');
const gray = document.querySelectorAll('.gray');
const graye = document.querySelectorAll('.graye');
const whiten = document.querySelectorAll('.whiten');

const ligTheme = document.getElementById('light');


toggle.addEventListener('click', ()=>{
body.classList.toggle('dark-theme');

// colored.classList.toggle('color');

white.forEach(element=>{
    element.classList.toggle('white-text');
});

graye.forEach(grayColor =>{
grayColor.classList.toggle('gray-t');
});

whiten.forEach(white =>{
white.classList.toggle('whitet');
});

dark.forEach(blue=>{
blue.classList.toggle('color');
// console.log(blue);
});

gray.forEach(grayText =>{
grayText.classList.toggle('gray-text');
});

if(body.classList.contains('dark-theme')){
    ligTheme.textContent = 'Light Mode'
}else{
    ligTheme.textContent = 'Dark Mode';
}
});

