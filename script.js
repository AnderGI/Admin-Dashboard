(function(){

const projectBtn = document.getElementById('addProject')
const projectsContainer = document.getElementById('projects')
const projectPopUp = document.getElementById('projectPopUp')
const projectTitle = document.getElementById('projectTitle')
const projectDescription = document.getElementById('projectDescription')
const projectState = document.getElementById('projectStatus')
const codePreview = document.getElementById('codePreview')
const livePreview = document.getElementById('livePreview')


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

        //Div for the project
        let projectPreview = document.createElement('div')
            //Live preview
            let livePreviewBtn = document.createElement('button')
            let livePreviewLink = document.createElement('a')
                livePreviewLink.setAttribute('href', livePreview.value)
                livePreviewLink.setAttribute('target', '_blank')
                livePreviewLink.textContent = `Live Preview`

                livePreviewLink.style.cssText=`
                text-decoration: none;
                color:black;
                `

                livePreviewBtn.appendChild(livePreviewLink)

            livePreviewBtn.style.cssText=`
            padding:0.25em 2em;
            border:none;
            `
            projectPreview.append(livePreviewBtn)

            //Code files
            let codeFilesBtn = document.createElement('button')
            let codeFilesLink = document.createElement('a')
                codeFilesLink.setAttribute('href', codePreview.value)
                codeFilesLink.setAttribute('target', '_blank')
                codeFilesLink.textContent = `Code Preview`

                codeFilesLink.style.cssText=`
                text-decoration: none;
                color:black;
                `

                codeFilesBtn.appendChild(codeFilesLink)

            codeFilesBtn.style.cssText=`
            padding:0.25em 2em;
            border:none;
            `
            projectPreview.append(codeFilesBtn)
        
        projectPreview.style.cssText = `
        display:flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-around;
        `
        project.append(projectPreview)
        //button
        let projectStatus = document.createElement('button')
        projectStatus.textContent = projectState.value
        projectStatus.setAttribute('id', 'statusBtn')
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




