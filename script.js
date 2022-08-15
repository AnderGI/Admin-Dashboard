//HOURS
let myHour = document.getElementById('hour')

updateHour()
setInterval(updateHour, 1000)
function updateHour(){
    let date = new Date()
    myHour.textContent = configureClock(date)
    function configureClock(){
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        function fixZeroes(time){
            time= time.toString()
            return time.length != 1 ? time : '0' + time
        }
        hours = fixZeroes(hours)
        minutes = fixZeroes(minutes)
        seconds = fixZeroes(seconds)
        return `${hours}:${minutes}:${seconds}`
    }
}

//LIGHT MODE AND DARK MODE

















