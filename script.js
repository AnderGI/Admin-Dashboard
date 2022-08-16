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
const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('click', ()=>{
    document.querySelector('.user').classList.toggle('dark')
    document.querySelector('.projects').classList.toggle('dark')
    document.querySelector('.toogle').classList.toggle('dark')
})

//ADD DIV INTO THE PROJECT CONTAINER WHEN CLICKING NEW BUTTON
const newBtnEl = document.getElementById('newBtn')
const itemsContainer = document.querySelector('.projects-items')
const itemEl = `<div class='item'>
<p id="project-name">Project Name:</p>
<p id="project-status"><img src="./Google Fonts/fiber_manual_record_FILL0_wght400_GRAD0_opsz48.svg">Status: Pending</p>
<div>
<img src="./Google Fonts/delete_FILL0_wght400_GRAD0_opsz48.svg" id="delete-img">
<img src="./Google Fonts/edit_FILL0_wght400_GRAD0_opsz48.svg">
</div>
</div>`
newBtnEl.addEventListener('click',addNewProject)
function addNewProject(){
  console.log('btn clicked')
  itemsContainer.insertAdjacentHTML('beforebegin', itemEl)
}














