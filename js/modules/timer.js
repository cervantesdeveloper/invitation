const d = document;

export default function timer(daysId, hoursId, minutesId){
    const countDownDate = new Date("nov 16, 2024 12:00:00").getTime();

    let countDown = setInterval(()=>{
        let currentDate = new Date().getTime();
        let difference = countDownDate - currentDate;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60 ));



        d.querySelector(daysId).innerHTML = days;
        d.querySelector(hoursId).innerHTML = hours;
        d.querySelector(minutesId).innerHTML = minutes;
        console.log(hours)
    }, 1000)
}