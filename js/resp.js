burger = document.querySelector('.burger')
navBar = document.querySelector('.navBar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

console.log(rightNav)

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-nav-resp');
    navList.classList.toggle('v-nav-resp');
    navBar.classList.toggle('h-nav-resp');
}) 