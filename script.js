const daysElement = document.getElementById('days') ;
const hoursElement = document.getElementById('hours') ;
const minutesElement = document.getElementById('minutes') ;
const secondsElement = document.getElementById('seconds') ;

const newYear = '30 July 2022' ;

function countdown(){
    const newYearDate = new Date(newYear) ;
    const currentDate = new Date() ;

    const totalSeconds = (newYearDate - currentDate) / 1000 ;
    const days = Math.floor(totalSeconds / 3600 / 24) ;
    const hours = Math.floor(totalSeconds / 3600) % 24 ;
    const minutes = Math.floor(totalSeconds / 60) % 60 ;
    const seconds = Math.floor(totalSeconds) % 60 ;

    daysElement.innerHTML = formatTime(days) ;
    hoursElement.innerHTML = formatTime(hours) ;
    minutesElement.innerHTML = formatTime(minutes) ;
    secondsElement.innerHTML = formatTime(seconds) ;
}

function formatTime(time){
    if(time<10){
        return `0${time}` ;
    } else {
        return time ;
    }
}

//initail
countdown() ;

//current
setInterval(countdown, 1000) ;