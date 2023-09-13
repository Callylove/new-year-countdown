// variables
var daysContainer = document.querySelector('#days');
var hoursContainer = document.querySelector('#hours');
var minutesContainer = document.querySelector('#minutes');
var secondsContainer = document.querySelector('#seconds');
var year = document.querySelector('#new-year');



function updateCountDown () {
    var currentTime = new Date().getFullYear();
    var newYear = new Date(`January 1 ${currentTime+1} 00:00:00`);
const currentDate = new Date();
var diff = newYear - currentDate;

var days = Math.floor(diff / (1000 * 60 * 60 * 24));
var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((diff % (1000 * 60)) / (1000));
var leadingSeconds = 0;
var leadingMinutes = 0;
var leadingHours = 0;
var leadingDays = 0;
if (seconds < 10){
leadingSeconds="0" + seconds;
}else{
    leadingSeconds = seconds
}
if (seconds < 10){
    leadingSeconds="0" + seconds;
    }else{
        leadingSeconds = seconds
    }
if (minutes < 10){
        leadingMinutes="0" + minutes;
        }else{
            leadingMinutes = minutes;
        }
if (hours < 10){
            leadingHours="0" + hours;
            }else{
                leadingHours = hours;
            }
            if (days < 10){
                leadingDays="0" + days;
                }else{
                    leadingDays = days;
                }

daysContainer.innerHTML = leadingDays + "<span>Days</span>";

hoursContainer.innerHTML =  leadingHours + "<span>Hours</span>";

minutesContainer.innerHTML =  leadingMinutes + "<span>Minutes</span>";

secondsContainer.innerHTML =  leadingSeconds + "<span>Seconds</span>";
}
setInterval(updateCountDown, 1000);

//variables for time intervals and time status

var date = new Date();
function addOneYear(date){
    const dateCopy = new Date(date);
    dateCopy.setFullYear(dateCopy.getFullYear() + 1);
    return dateCopy; 
}
year.innerHTML = addOneYear(date).getFullYear();





