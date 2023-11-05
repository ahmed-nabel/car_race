// variables for the btns


let startBtn = document.getElementById('start');
let resetBtn = document.getElementById('reset');

// variables for cars
let car1 = document.getElementById('car1');
let car2 = document.getElementById('car2');


// ariables for caar info
let carinfo1 = document.getElementById('carInfo1');
let carinfo2 = document.getElementById('carInfo2');


 // variable of track
let track = document.querySelector(".raceTrack");


// flag variables 
let isComplete = false;
let place = 'first';

function checkIfComplete () {
    if (isComplete === false){
        isComplete = true ;
    } else {
        place = 'second';
    }
};



// build fn to check if car has won or not
startBtn.addEventListener('click', function(){

    animateFun2();
    animateFun1();
    

});





// get cars width
let carWidth = car1.offsetWidth;


// get width of track 
let trackWidth = track.offsetWidth - carWidth ;
console.log(trackWidth);
console.log(carWidth);
// get  random values from 1 to 5000 ms for both cars

let carTime1 = Math.floor((Math.random() * 5000) + 1 );
let carTime2 = Math.floor((Math.random() * 5000) + 1);


let animateFun2 = function  () {
car2.animate([{transform: `translateX(0)`},{transform: `translateX(${trackWidth}px)`}],{duration: carTime2 ,  fill : "forwards"});

setTimeout(()=> checkIfComplete(),carTime2);
setTimeout(()=>  carinfo2.firstElementChild.textContent = `Finished in ${place} place and clocked in at ${carTime2} milliseconds!`, carTime2);   
};


let animateFun1 = function () {
car1.animate([{transform: `translateX(0)`},{transform: `translateX(${trackWidth}px)`}], {duration: carTime1 ,  fill : "forwards"});
setTimeout(()=> checkIfComplete(),carTime1);
setTimeout(()=> carinfo1.firstElementChild.textContent = `Finished in ${place} place and clocked in at ${carTime1} milliseconds!`, carTime1);
};

// create reset function 


resetBtn.addEventListener('click',function(){
    //car1.style.cssText = " right:'trackWidth px'; "
    car2.animate([{transform: `translateX(${trackWidth}px)`},{transform: `translateX(0)`}],{duration: 0 ,  fill : "forwards"});
    car1.animate([{transform: `translateX(${trackWidth}px)`},{transform: `translateX(0)`}],{duration: 0 ,  fill : "forwards"});
    carinfo2.firstElementChild.textContent = ``; 
    carinfo1.firstElementChild.textContent = ``;
    isComplete = false;
    place = 'first';
    window.location.reload();

});


