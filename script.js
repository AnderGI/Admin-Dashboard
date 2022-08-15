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
        return `${hours}:${minutes}:${seconds}`
    }
}





























/*
update()
setInterval(update, 1000)
function update(){
    let date = new Date()
    myHour.textContent = configureClock(date)
    function configureClock(date){
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        function fixZeroes(time){
            time = time.toString()
            return time.length<2? '0' + time : time
        }
        hours = fixZeroes(hours)
        minutes = fixZeroes(minutes)
        seconds = fixZeroes(seconds)

        return `${hours}:${minutes}:${seconds} ${hours<12? 'am': 'pm'}`
    }
}
*/