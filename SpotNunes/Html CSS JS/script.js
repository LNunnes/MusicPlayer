let music = document.getElementsByTagName("audio")[0]
let controls = document.getElementById("controls")

function pause(){
    music.pause()

}

function play(){
    music.play()

}

function repeat(){
    music.pause()
    music.currentTime = 0 

}

