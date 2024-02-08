
const header = document.querySelector('header');
const hamBt = document.querySelector(".hambt");
const nav = document.querySelector(".header_nav");
const navBts = document.querySelectorAll(".header_nav a, .header_nav button");
const exitArea = document.querySelector('.exit_area');
const contactBox = document.querySelector('.contact_box');
const contactBts = document.querySelectorAll('.contact_bt');
const pulsePaths = document.querySelectorAll('.pulse');

let showingNav = false;
let showingContactBox = false;

function toggleExitArea() {
    exitArea.classList.toggle('show', showingContactBox || showingNav);
}

function toggleNav() {
    showingNav = !showingNav;
    hamBt.classList.toggle('active', showingNav);
    nav.classList.toggle("show", showingNav);
    toggleExitArea();
    
    controlPathAnimation(showingNav ? 'paused' : 'running');

    if (showingContactBox) {
        toggleContactBox();
    }
}

function controlPathAnimation(state) {
    pulsePaths.forEach(path => path.style.animationPlayState = state);
}

function toggleContactBox() {
    showingContactBox = !showingContactBox;
    contactBox.classList.toggle('show', showingContactBox);
    controlPathAnimation(showingContactBox ? 'paused' : 'running');
    toggleExitArea();
}

hamBt.addEventListener("click", toggleNav);

if (window.matchMedia('(max-width:850px)').matches) {
    navBts.forEach(btn => {
        btn.addEventListener("click", () => {
            toggleNav();
            if (showingContactBox) {
                toggleContactBox();
            }
        });
    });
}

window.addEventListener("scroll", () => {
    if (showingNav) {
        toggleNav();
    }
});

contactBts.forEach(btn => {
    btn.addEventListener('click', toggleContactBox);
});

exitArea.addEventListener('click', () => {
    if (showingContactBox) {
        toggleContactBox();
    } else if (showingNav) {
        toggleNav();
    }
});