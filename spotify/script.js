console.log("welcome to spotify")

let songindex = 0;
let audioelement=new Audio('1.mp3');
let masterplay = document.getElementByid('masterplay');
let myprogressbar = document.getElementByid('myprogressbar'); 

let songs = [
    {songname: "moonlight", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "moonlight", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "moonlight", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "moonlight", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "moonlight", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "moonlight", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "moonlight", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "moonlight", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "moonlight", filepath: "song/1.mp3", coverpath: "covers/1.jpg"}
]

// audioElement.play();

// handle play/pause click
masterplay.addEventListener('click', ()=>{
if(audioelement.paused || audioelement.currenttime<=0){
     audioelement.play();   
}
})

// listen to events
document.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
})
  