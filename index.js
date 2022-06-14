const stopB = document.getElementById("back-video");
const musicB = document.getElementById("back-music");
const container = document.getElementsByClassName("container");
const music = document.getElementById("music");
const stop = document.getElementById("stop");
const progress = document.querySelector('.video-progress');
const progressBar = document.querySelector('.video-progress-filled');
const volume = document.querySelector('#volume');
const time = document.querySelector('#time');

        function playVideo() {
            stop.style.transitionDuration = '1s';
            if(stopB.paused){
                stopB.play();
                stop.style.backgroundColor = "transparent";
            }else{
                stopB.pause();
                stop.style.backgroundColor = 'red';
            }
        }
        function playMusic(){
            music.style.transitionDuration = "1s";
            if(musicB.paused){
                musicB.play();
                music.style.backgroundColor = "transparent";
            }else{
                musicB.pause();
                music.style.backgroundColor = "red";
            }
        }
        // Progress bar
        volume.addEventListener("mousemove", (e) =>{
                musicB.volume = e.target.value;
        })
        stopB.addEventListener('timeupdate', (e) =>{
            time.value = (stopB.currentTime / stopB.duration) * 100;
        })
        time.addEventListener('input', () => {
            stopB.currentTime = time.value * stopB.duration / 100;
        })
