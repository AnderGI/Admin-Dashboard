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
    document.querySelector('#column-left').classList.toggle('dark')
    document.querySelector('.navigator').classList.toggle('dark')
    document.querySelector('.extras').classList.toggle('dark')
    document.querySelector('.extras-items>div').classList.toggle('dark')
    document.querySelector('.body').classList.toggle('dark')
})

//ADD DIV INTO THE PROJECT CONTAINER WHEN CLICKING NEW BUTTON
const newProjectsBtnEl = document.getElementById('newProjectBtn')
let projectsItemsContainer = document.querySelector('.projects-items')
let i = 0

newProjectsBtnEl.addEventListener('click',addNewProject)
function addNewProject(){
 
  const newProjectsItemEl  =  `<div>
<p id="project-name"> Project Name: ${i} </p>
<p id="project-status"><img src="./Google Fonts/fiber_manual_record_FILL0_wght400_GRAD0_opsz48.svg">Status: Pending</p>
<div>
<img src="./Google Fonts/delete_FILL0_wght400_GRAD0_opsz48.svg" id="delete-img">
<img src="./Google Fonts/edit_FILL0_wght400_GRAD0_opsz48.svg" id='edit'>
</div>
</div>`
  projectsItemsContainer.insertAdjacentHTML('afterend', newProjectsItemEl)
  i += 1
}

//ADD DIV INTO THE EXTRAS CONTAINER WHEN CLICKING NEW EXTRA BUTTON

const newExtraBtnEl = document.getElementById('newExtraBtn')
let extraItemsContainer = document.querySelector('.extras-items')
let j = 0

newExtraBtnEl.addEventListener('click',addNewExtra)
function addNewExtra(){
  const newExtraItemEl  =  `<div>
<p id="extra-name"> Extra Name:${j} </p>
<p id="extra-status"><img src="./Google Fonts/fiber_manual_record_FILL0_wght400_GRAD0_opsz48.svg">Status: Pending</p>
<div>
<img src="./Google Fonts/delete_FILL0_wght400_GRAD0_opsz48.svg" id="delete-img">
<img src="./Google Fonts/edit_FILL0_wght400_GRAD0_opsz48.svg">
</div>
</div>`
  extraItemsContainer.insertAdjacentHTML('afterend', newExtraItemEl)
  j += 1
}








