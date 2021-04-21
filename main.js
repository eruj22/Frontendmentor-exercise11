// set date to countdown to in ms
let d = '2021, 5, 1';
let start = new Date(d).getTime();
// time in seconds from target time till now
let secondsToDate = (start - Date.now()) / 1000;

function timer(seconds) {
    // date now in ms 
    let countdown;
    let now = Date.now();
    let then = now + seconds * 1000;
    countdown = setInterval(() => {
        // get seconds
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // stops interval when we hit 0
        if (secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    // displays remaining time
    const days = Math.floor(seconds / 3600 / 24);
    const remainderHours = (Math.floor(seconds / 3600)) % 24;
    const remainderMinutes = (Math.floor(seconds / 60)) % 60;
    const remainderSeconds = seconds % 60;
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = remainderHours;
    document.getElementById('minutes').innerHTML = remainderMinutes;
    document.getElementById('seconds').innerHTML = remainderSeconds;
    // console.log({remainderMinutes, remainderSeconds, remainderHours, days});
}

timer(secondsToDate)

