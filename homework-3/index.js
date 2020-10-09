const span = document.querySelector('span');

const numberOfDays = { //One day.
    MS: 1000,
    S: 60,
    MINUTES: 60,
    HOURS: 24
};

function fontInit() {
    span.style.fontWeight = 600;
    span.style.fontSize = `20px`;
}
function printTimer(day, hours, minutes, seconds) {
    span.innerText = `${day}d ${hours < 10 ? `0${hours}` : `${hours}`}h ${minutes >= 10 ? `${minutes}` : `0${minutes}`}m ${seconds >= 10 ? `${seconds}` : `0${seconds}`}s`;
}
function getTime() {
    const xmasDay = new Date("2020-12-24:00:00:00+0900");
    const currentDate = new Date();
    const timeDifference = xmasDay.getTime() - currentDate.getTime(); //ms(number) return
    const time = new Date(0, 0, 0, 0, 0, 0, timeDifference); //ms insert
    const remainDay = timeDifference / numberOfDays.MS / numberOfDays.S / numberOfDays.MINUTES / numberOfDays.HOURS;
    printTimer(Math.floor(remainDay), time.getHours(), time.getMinutes(), time.getSeconds());
    setInterval(getTime, 1000);
}
function init() {
    fontInit();
    getTime();
}
init();
