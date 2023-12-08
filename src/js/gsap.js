import { gsap } from "gsap"
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const anim01 = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "top top",
        end: "+=1500",
        scrub: 6,
        pin: false,
        markers:false,
    }
});

// anim01.from(".graphic", {y: 1300, rotation: -20, scale:1, duration: 1, ease: "power1.out",})

const graphics = document.querySelectorAll('.graphic, .logo')

const relativeStrokeWidth = Math.floor((window.innerHeight + (window.innerWidth / 5)) / 600)

for(let j = 0; j < graphics.length; j++) {
    let pulsePaths = graphics[j].querySelectorAll('.pulse')
    for(let i = 0; i < pulsePaths.length; i++) {
        pulsePaths[i].style.animationDelay = `${i / 10}s`
        pulsePaths[i].style.strokeWidth = `${relativeStrokeWidth}px`
    }
}

const floatPaths = document.querySelectorAll('.float')

for(let i = 0; i < floatPaths.length; i++) {
    floatPaths[i].style.animationDelay = `${i * (Math.random() + 1 * 2 )}s`
}