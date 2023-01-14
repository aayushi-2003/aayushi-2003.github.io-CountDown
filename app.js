const bday='1 Jan 2024';

const daysCount = document.getElementById('days')
const hoursCount = document.getElementById('hours')
const minCount = document.getElementById('mins')
const secCount = document.getElementById('seconds')

function countdown(){
    const bdayDate = new Date(bday);
    const currentDay = new Date();
    const seconds = (bdayDate-currentDay)/1000;
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds/3600)%24;
    const minutes = Math.floor(seconds/60)%60;
    const sec = Math.floor(seconds)%60  
    daysCount.innerHTML=days;
    hoursCount.innerHTML=hours;
    minCount.innerHTML=minutes;
    secCount.innerHTML=sec;

}
countdown();
setInterval(countdown, 1000 );