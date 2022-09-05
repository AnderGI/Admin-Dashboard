(function(){
const projectBtn = document.getElementById('addProject')
const projectsContainer = document.getElementById('projects')

class Project{
    constructor(title,description){
        this.title= title;
        this.description= description;
    }
    displayProject = () =>{
        console.log(`This ${this.title}  ${this.description}`)

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

projectBtn.addEventListener('click', project.displayProject)
})();




