const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hrsHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hrs = now.getHours();
    const secondsInDegrees = ((seconds / 60) * 360) + 90
    const minutesInDegress = ((minutes / 60) * 360) + 90
    const hrsInDegress = ((hrs / 12) * 360) + 90
    if (seconds == '59') {
        setTimeout(function () {
            secondHand.style.transition = 'all 0s';;
        }, 1000);
    }
    secondHand.style.transform = `rotate(${secondsInDegrees}deg)`
    minuteHand.style.transform = `rotate(${minutesInDegress}deg)`
    hrsHand.style.transform = `rotate(${hrsInDegress}deg)`
}


setInterval(setDate, 1000);