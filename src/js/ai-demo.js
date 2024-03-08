const step2Triggers = document.querySelectorAll('article.welcome .prompt_bt')

const videoCtnr = document.querySelector('.video_ctnr');
const video = videoCtnr.querySelector('.passport_video');
const switchButton = document.querySelector('.checkin_start .switch');

const welcomeArticle = document.querySelector('article.welcome')
const checkinStartArticle = document.querySelector('article.checkin_start')
const checkinOutputArticle = document.querySelector('article.checkin_output')

let allArticles = document.querySelectorAll('.outputs_ctnr article')

function nextStep(article, delay) {
    setTimeout(() => {
        article.classList.add('show')
    }, delay);

    allArticles.forEach(item => {
        item.classList.remove('show')
    });

}

nextStep(welcomeArticle, 200)

step2Triggers.forEach(element => {
    element.addEventListener('click', async function() {
        let stream;
        try {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            videoCtnr.style.display = 'flex';
            document.querySelector('article.checkin_start .instruction').style.display = 'flex';
        } catch (err) {
            videoCtnr.style.display = 'none';
            document.querySelector('article.checkin_start .instruction').style.display = 'none';
        }
        nextStep(checkinStartArticle, 300);
    });
});



// const takePhotoBt = document.querySelector('button.take_photo')

// takePhotoBt.addEventListener('click', function() {
//     tryVideo()
//     videoCtnr.style.display = 'flex'
//     document.querySelector('article.checkin_start .instruction').style.display = 'flex'

// })


const step3Triggers = document.querySelectorAll('.checkin_start button:not(.take_photo)')

step3Triggers.forEach(element => {
    element.addEventListener('click', function() {
        nextStep(checkinOutputArticle, 900)
    })
})







const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    switchButton.style.display = 'flex';
}

switchButton.addEventListener('click', async () => {
    if (!stream) return;

    function handleVideo(cameraFacing) {
        const constraints = {
          video: {
            facingMode: {
              exact: cameraFacing
            }
          }
        }
        return constraints
    };
      
      function turnVideo(constraints) {
        navigator.mediaDevices.getUserMedia(constraints)
          .then((stream) => {
            video = document.createElement("video")
            video.srcObject = stream
            video.play()
            video.onloadeddata = () => {
              ctx.height = video.videoHeight
            }
          })
      
    }
      
    document.querySelector(".frontCamera").addEventListener("click", () => {
        turnVideo(handleVideo("user"));
    })
});