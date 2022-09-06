(function(){
const projectBtn = document.getElementById('addProject')
const projectsContainer = document.getElementById('projects')
const projectPopUp = document.getElementById('projectPopUp')
const projectTitle = document.getElementById('projectTitle').value
const projectDescription = document.getElementById('projectDescription').value
const projectStatus = document.getElementById('projectStatus').value

class Project{
    constructor(title,description){
        this.title= title;
        this.description= description;
    }
    showPopUp = () =>{
        projectPopUp.showModal()
    }
    displayProject = () =>{
        //create div project
        let project = document.createElement('div')
        project.setAttribute('class', 'projectItem')
        //title
        let projectTitle = document.createElement('h1')
        projectTitle.textContent = 'Project Title'
        project.append(projectTitle)
        //description
        let projectDescription = document.createElement('p')
        projectDescription.textContent = 'Project Description'
        project.append(projectDescription)
        //button
        let projectStatus = document.createElement('button')
        projectStatus.textContent = 'Project Status'
        project.append(projectStatus)

        //add to container
        projectsContainer.append(project)

    }
}
let project = new Project('calculator', 'is for calculating things')

projectBtn.addEventListener('click', project.showPopUp)
//this will be called when the btn in the dialog is clicked 
//with the input value
//projectBtn.addEventListener('click', project.displayProject)
})();




