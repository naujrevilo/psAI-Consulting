const main = document.querySelector('main')

const contextPrompts = document.querySelectorAll('article.welcome .prompt_bt')

const videoCtnr = document.querySelector('.video_ctnr');
const switchButton = document.querySelector('.checkin_start .switch');
let stream;

const welcomeSubitems = document.querySelectorAll('article.welcome > .ctnr > *')
const checkinStartSubitems = document.querySelectorAll('article.checkin_start > .ctnr > *')

for(let i = 0; i < welcomeSubitems.length; i++) {
    setTimeout(() => {
        welcomeSubitems[i].classList.add('show')
    }, 90 * i);
}

contextPrompts.forEach(element => {
    element.addEventListener('click', async function() {
        document.querySelector('.outputs_ctnr .prompt_bt').classList.add('hide')
        
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoCtnr.querySelector('.passport_video').srcObject = stream;
            document.querySelector('.take_photo').style.display = 'none'
        } catch (err) {
            videoCtnr.style.display = 'none'
            document.querySelector('article.checkin_start .instruction').style.display = 'none'
        }

        
        main.classList.add('checkin_start')

        for(let i = 0; i < welcomeSubitems.length; i++) {
            setTimeout(() => {
                welcomeSubitems[i].classList.remove('show')
            }, 90 * i);
        }

        setTimeout(() => {
            for(let i = 0; i < checkinStartSubitems.length; i++) {
                setTimeout(() => {
                    checkinStartSubitems[i].classList.add('show')
                }, 90 * i);
            }
        }, 100);

        setTimeout(() => {
            main.classList.remove('welcome')
        }, 400);
    })
});

switchButton.addEventListener('click', async () => {
    if (!stream) return;

    console.log(stream)

    const tracks = stream.getVideoTracks();
    if (tracks.length === 0) {
        console.error('No video tracks found');
        return;
    }

    const currentTrack = tracks[0];
    const facingMode = currentTrack.getSettings().facingMode;

    const constraints = { video: { facingMode: facingMode === 'user' ? 'environment' : 'user' } };
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoElement.srcObject = stream;
    } catch (err) {
        console.error('Error switching camera:', err);
    }
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