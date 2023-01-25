const circle2 = document.getElementById('circle2');
const circle3  = document.getElementById('circle3');
const ball = document.getElementById('ball');
var initialX = 300;
var initialY = 100;
var clicker = document.getElementById('clicker');
var btn = document.getElementById('iPhoneBtn');
var stat = false;

document.addEventListener('mousemove', function(e){

    var t1X = (e.offsetX/1200)*21;
    var t1Y = (e.offsetY/600)*19;
    circle2.style.left = `${t1X}%`;
    
    circle2.style.top = `${t1Y}%`;

    var t2X = (e.offsetX/1200)*79;
    var t2Y = (e.offsetY/600)*80;
    circle3.style.left = `${t2X}%`;
    console.log("y corr" +t1Y)
    

    circle3.style.top = `${t2Y}%`;
});


document.addEventListener('keydown',()=>{
    // ball.style.left = `${initialX}px`;
    ball.style.bottom = `${initialY + 100}px`;
    if(stat == false){
        clicker.style.left = `${50}%`;
        stat = true;
        btn.style.backgroundColor = 'black';
        clicker.style.backgroundColor = 'white';
        
    }
    else{
        stat = false;
        clicker.style.left = `3px`;
        btn.style.backgroundColor = 'white';
        clicker.style.backgroundColor = 'grey';
    }
   
})
document.addEventListener('keyup',()=>{
    // ball.style.left = '20px';
    ball.style.bottom = `${initialY}px`;
})



