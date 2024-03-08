const main = document.querySelector('main')

const step2Triggers = document.querySelectorAll('article.welcome .prompt_bt')

const videoCtnr = document.querySelector('.video_ctnr');
const video = videoCtnr.querySelector('.passport_video');
const switchButton = document.querySelector('.checkin_start .switch');
let stream;

const welcomeSubitems = document.querySelectorAll('article.welcome > .ctnr > *')

const checkinStartSubitems = document.querySelectorAll('article.checkin_start > .ctnr > *')

const checkinOutputSubitems = document.querySelectorAll('article.checkin_output > .ctnr > *')

const welcomeArticle = document.querySelector('article.welcome')
const checkinStartArticle = document.querySelector('article.checkin_start')
const checkinOutputArticle = document.querySelector('article.checkin_output')

let articleItems;
let allArticleItems = document.querySelectorAll('.outputs_ctnr article > .ctnr > *');

function updateStep(article) {
    articleItems = article.querySelectorAll('.ctnr > *')

    allArticleItems.forEach(item => {
        item.classList.remove('show')
    });

    console.log(articleItems)

    for(let i = 0; i < articleItems.length; i++) {
        setTimeout(() => {
            articleItems[i].classList.add('show')
        }, 90 * i);
    }
}

updateStep(welcomeArticle)

// for(let i = 0; i < welcomeSubitems.length; i++) {
//     setTimeout(() => {
//         welcomeSubitems[i].classList.add('show')
//     }, 90 * i);
// }

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    switchButton.style.display = 'flex';
}

step2Triggers.forEach(element => {
    element.addEventListener('click', async function() {
        // document.querySelector('.outputs_ctnr .prompt_bt').classList.add('hide')
        
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            document.querySelector('.take_photo').style.display = 'none'
        } catch (err) {
            videoCtnr.style.display = 'none'
            document.querySelector('article.checkin_start .instruction').style.display = 'none'
        }

        

        // updateStep(checkinStartArticle)
        main.classList.add('checkin_start')

        for(let i = 0; i < welcomeSubitems.length; i++) {
            setTimeout(() => {
                welcomeSubitems[i].classList.remove('show')
            }, 30 * i);
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


const step3Triggers = document.querySelectorAll('.checkin_start button')

step3Triggers.forEach(element => {
    element.addEventListener('click', function() {
        main.classList.remove('checkin_start')

        for(let i = 0; i < checkinStartSubitems.length; i++) {
            setTimeout(() => {
                checkinStartSubitems[i].classList.remove('show')
            }, 90 * i);
        }

        setTimeout(() => {
            for(let i = 0; i < checkinOutputSubitems.length; i++) {
                setTimeout(() => {
                    checkinOutputSubitems[i].classList.add('show')
                }, 90 * i);
            }
        }, 100);

        main.classList.add('checkin_output')
    })
})