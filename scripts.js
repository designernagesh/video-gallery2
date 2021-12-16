let mainVideo = document.querySelector(".main-video .video video");
let videoList = document.querySelectorAll(".video-list .video") 
let mainTitle = document.querySelector(".main-video h3");

videoList.forEach( video => {
    video.addEventListener('click', () => {
        videoList.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active')
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            let title = video.children[1].innerText;
            //alert(title);
            mainVideo.src = src;
            mainTitle.innerText = title;
        }

    })
})