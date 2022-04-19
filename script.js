setInterval(setDate, 1000);

const hour = document.querySelector('[data-hour-hand]');
const minute = document.querySelector('[data-minute-hand]');
const second = document.querySelector('[data-second-hand]');

function setDate(){
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = (minutes + currentDate.getHours()) / 12;
    setRotation(second, seconds);
    setRotation(minute, minutes);
    setRotation(hour, hours);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}
