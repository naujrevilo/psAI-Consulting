const main = document.querySelector('main')

const contextPrompts = document.querySelectorAll('.context_prompts button')

contextPrompts.forEach(element => {
    element.addEventListener('click', function() {
        main.classList.remove('welcome')
        setTimeout(() => {
            main.classList.add('checkin_start')
        }, 600);
    })
});


const uploadBt = document.querySelectorAll('.checkin_start .options button')

uploadBt.forEach(element => {
    element.addEventListener('click', function() {
        main.classList.remove('checkin_start')
        setTimeout(() => {
            main.classList.add('checkin_output')
        }, 900);
    })
})