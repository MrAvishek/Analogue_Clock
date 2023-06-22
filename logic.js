let selectSec=document.querySelector('.secHand');
let selectMin=document.querySelector('.minHand');
let selectHour=document.querySelector('.hourHand');

function showTime()
{
    let time= new Date();
    let x=time.getSeconds()/60*360-90;
    let y=time.getMinutes()*360/60-90;
    let z=time.getHours()/12*360-90;
    selectSec.style.transform=`rotate(${x}deg)`;
    selectMin.style.transform=`rotate(${y}deg)`;
    selectHour.style.transform=`rotate(${z}deg)`;
    
}
setInterval(showTime,1000);
    

