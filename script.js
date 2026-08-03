function playVideo(videoFile) {
    const player = document.getElementById("videoPlayer");

    player.src = videoFile;
    player.play();

    window.scrollTo({
        top: document.getElementById("player").offsetTop,
        behavior: "smooth"
    });
}
