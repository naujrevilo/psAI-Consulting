import { gsap } from "gsap"
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const anim01 = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#deliverables",
//         start: "top top",
//         end: "+=1500",
//         scrub: 1,
//         pin: true,
//         markers:false,
//     }
// });

// anim01.from(".default1 .list li", {x: 1300, opacity:0, duration: 1, ease: "power1.out",})

const graphics = document.querySelectorAll('.graphic, .logo')
const serviceLogos = document.querySelectorAll('svg.service_logo')


const serviceLogosOutHeader = document.querySelectorAll('main svg.service_logo')

const relativeStrokeWidth = Math.floor((window.innerHeight + (window.innerWidth / 5)) / 580)


for(let j = 0; j < graphics.length; j++) {
    let pulsePaths = graphics[j].querySelectorAll('.pulse')

    for(let i = 0; i < pulsePaths.length; i++) {
        pulsePaths[i].style.animationDelay = `${i / 15}s`
        pulsePaths[i].style.strokeWidth = `${relativeStrokeWidth}px`
    }
}

for(let j = 0; j < serviceLogos.length; j++) {
    let pulsePaths = serviceLogos[j].querySelectorAll('.pulse')

    for(let i = 0; i < pulsePaths.length; i++) {
        pulsePaths[i].style.animationDelay = `${i / 15}s`
    }
}

for(let k = 0; k < serviceLogosOutHeader.length; k++) {
    let serviceLogosOutHeaderPaths = serviceLogosOutHeader[k].querySelectorAll('.pulse')

    for(let i = 0; i < serviceLogosOutHeaderPaths.length; i++) {
        serviceLogosOutHeaderPaths[i].style.animationDelay = `${i / 15}s`
        serviceLogosOutHeaderPaths[i].style.strokeWidth = `${relativeStrokeWidth}px`
    }
}

// const floatPaths = document.querySelectorAll('.float')

// for(let i = 0; i < floatPaths.length; i++) {
//     floatPaths[i].style.animationDelay = `${i * (Math.random() + 1 * 2 )}s`
// }