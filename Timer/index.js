const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
var set = document.getElementById('setDisplay');
const setBtn = document.querySelector("#setBtn");
const hourBtn = document.querySelector("#hourBtn");

const minBtn = document.querySelector("#minBtn");
var x = document.getElementById("myAudio");


const secBtn = document.querySelector("#secBtn");




let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let visible = false;
let minx=0;
let hrsx=0;
let secx=0;
let countDownTime = 0;
let countDown=false;

set.style.visibility = 'hidden';

setBtn.addEventListener("click", () => {

   paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
secx=0;
minx=0;
hrsx=0;
countDown=false;
countDownTime=0;
    timeDisplay.textContent = "00:00:00";


    if(!visible){
        visible = true;
set.style.visibility = 'visible';
pauseBtn.style.visibility = 'hidden';
resetBtn.style.visibility = 'hidden';
setBtn.style.visibility = 'hidden';



    
    }
});

secBtn.addEventListener("click", () => {
if(secx<60){
secx = secx+10;






    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;}

    timeDisplay.textContent = `${pad(hrsx)}:${pad(minx)}:${pad(secx)}`;

}
});

minBtn.addEventListener("click", () => {
if(minx<60){
minx = minx+1;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;}

    timeDisplay.textContent = `${pad(hrsx)}:${pad(minx)}:${pad(secx)}`;

}
});

hourBtn.addEventListener("click", () => {
if(hrsx<12){
hrsx = hrsx+1;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;}

    timeDisplay.textContent = `${pad(hrsx)}:${pad(minx)}:${pad(secx)}`;

}
});

startBtn.addEventListener("click", () => {
if(!countDown){
    if(paused&&!visible){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
else if(paused && visible){
set.style.visibility = 'hidden';
pauseBtn.style.visibility = 'visible';
resetBtn.style.visibility = 'visible';
setBtn.style.visibility = 'visible';
visible=false;
//add code for countdown here
countDownTime = secx+minx*60+hrsx*60*60;
countDown = true;
//add code for countdown here
}
}
if(countDown){
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;




        intervalId = setInterval(updateTimex, 1000);
    }
}

});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
secx=0;
minx=0;
hrsx=0;
countDown=false;
countDownTime=0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

        secs =Math.floor((elapsedTime % (1000 * 60)) / 1000);
    mins = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    hrs = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
function updateTimex(){
    elapsedTime = Date.now() - startTime;
let time= countDownTime*1000-elapsedTime;

    secs =Math.floor((time % (1000 * 60)) / 1000);
    mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    hrs = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));




    secs = pad(secs+1);
    mins = pad(mins);
    hrs = pad(hrs);
if(time>0){timeDisplay.textContent = `${hrs}:${mins}:${secs}`;}
else if(time<=0){       paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
secx=0;
minx=0;
hrsx=0;
countDown=false;
countDownTime=0;
    timeDisplay.textContent = "00:00:00";
x.play();
}



    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}