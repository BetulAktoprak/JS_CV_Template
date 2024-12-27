const infosElement = document.getElementById("infos");
const skillsElement = document.getElementById("skills");
const languagesElement = document.getElementById("languages");
const projectElement = document.getElementById("projects");
const educationElement = document.getElementById("education");
const mediaElement = document.getElementById("socialMedia");


fetch("./cvTemplate.json")
.then(res => res.json())
.then(data => {

    data.infos.forEach(info => {
        const element = `
            <p>
                <i class="${info.class}"></i>
                ${info.title}
            </p>
        `;
        infosElement.innerHTML += element;
    });

    data.skills.forEach(skill => {
        const element = `
            <p>${skill.title}</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
                <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:${skill.degree}%">${skill.degree}%</div>
            </div>
        `;

        skillsElement.innerHTML += element;
    });

    data.languages.forEach(language => {
        const element = `
            <p>${language.title}</p>
            <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-round-xlarge w3-teal" style="height:24px;width:${language.degree}%"></div>
            </div>
        `;

        languagesElement.innerHTML += element;
    });

    data.projects.forEach((project, index) => {
        const element = `
            <div class="w3-container">
                <h5 class="w3-opacity">
                  <b>${project.name}</b>
                </h5>
                <p>
                  ${project.description}
                </p>
                <i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i><a>${project.link}</a>
                <hr />
            </div>
        `;

        projectElement.innerHTML += element;
    });

    
    data.educations.forEach((education) => {
        let descriptionContent = '';
        if (Array.isArray(education.description)) {
            descriptionContent = education.description
                .map((desc) => `<li>${desc.title}</li>`)
                .join('');
            descriptionContent = `<ul>${descriptionContent}</ul>`;
        } else {
            descriptionContent = `<p>${education.description}</p>`;
        }
        const element = `
            <div class="w3-container">
              <h5 class="w3-opacity"><b>${education.name}</b></h5>
              <p> ${descriptionContent}</p>
              <hr />
            </div>
        `;

        educationElement.innerHTML += element;
    });

    const pElement = document.createElement("p");
    pElement.textContent = "Find me on social media.";
    mediaElement.appendChild(pElement);
    data.socialMedia.forEach(media => {
        const element = `
            <i class="${media.class}"></i>
        `;

        mediaElement.innerHTML += element;
    })
})

