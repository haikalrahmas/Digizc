// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika info di klik
document.querySelector('#info').onclick = () => {
navbarNav.classList.toggle('active');
};

// klik diluar 
const Info = document.querySelector( '#info');

document.addEventListener('click', function(e) {
    if(!Info.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')  
    }
    })
    