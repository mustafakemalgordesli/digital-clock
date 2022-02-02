const Hour = document.getElementById("hour");
const Minute = document.getElementById("minute");
const Second = document.getElementById("second");
const DateText = document.getElementById("date");

function GetTime(){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear(); 

    (hour<10) ? Hour.innerText = "0" + hour : 
               Hour.innerText = hour;

   (minute<10) ? Minute.innerText = "0" + minute :
                 Minute.innerText = minute;

   (second<10) ? Second.innerText = "0" + second :
                 Second.innerText = second;

    
    if(month < 10 && day < 10) {
        DateText.innerText = "0" + day + " / " + "0" + month + " / " + year;
        return;
    } else if(month < 10) {
        DateText.innerText = day + " / " + "0" + month + " / " + year;
        return;
    } else if (day < 10){
        DateText.innerText = "0" + day + " / " + month + " / " + year;
        return;
    }
    DateText.innerText = day + " / " + month + " / " + year;
}

setInterval(() => {
    GetTime();
}, 1000);