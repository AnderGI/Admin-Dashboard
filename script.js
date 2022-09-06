(function(){
const projectBtn = document.getElementById('addProject')
const projectsContainer = document.getElementById('projects')
const projectPopUp = document.getElementById('projectPopUp')
const projectTitle = document.getElementById('projectTitle')
const projectDescription = document.getElementById('projectDescription')
const projectState = document.getElementById('projectStatus')
class Project{
    constructor(title,description){
        this.title= title;
        this.description= description;

    }
    showPopUp = () =>{
        projectPopUp.showModal()
        projectTitle.value= ""
        projectDescription.value= ""
    }
    displayProject = () =>{
        //create div project
        let project = document.createElement('div')
        project.setAttribute('class', 'projectItem')
        //title
        let projectTitle = document.createElement('h1')
        projectTitle.textContent = this.title
        project.append(projectTitle)
        //description
        let projectDescription = document.createElement('p')
        projectDescription.textContent = this.description
        project.append(projectDescription)

        //Live preview
        let livePreview = document.createElement('button')
        livePreview.textContent = 'Live Preview'
        project.append(livePreview)

        //Code files
        let codeFiles = document.createElement('button')
        codeFiles.textContent = 'Code file'
        project.append(codeFiles)

        //button
        let projectStatus = document.createElement('button')
        projectStatus.textContent = projectState.value
        project.append(projectStatus)

        //add to container
        project.setAttribute('id',projectState.value)
        projectsContainer.append(project)

    }
}
let project = new Project()


projectBtn.addEventListener('click', project.showPopUp)
//this will be called when the btn in the dialog is clicked 
//with the input value
document.getElementById('submitBtn').addEventListener('click', ()=>{
    project = new Project(projectTitle.value, projectDescription.value)
    project.displayProject()
})

})();




