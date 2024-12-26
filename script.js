const infosElement = document.getElementById("infos");
const skillsElement = document.getElementById("skills");
const languagesElement = document.getElementById("languages");
const experienceElement = document.getElementById("experience");
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

    data.experiences.forEach((experience, index) => {
        const element = `
            <div class="w3-container">
                <h5 class="w3-opacity">
                  <b>${experience.profession} / ${experience.companySite}</b>
                </h5>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>${experience.startDate} -
                  ${index !== 0 ?  `${experience.endDate}` : `<span class="w3-tag w3-teal w3-round">${experience.endDate}</span>`}
                </h6>
                <p>
                  ${experience.description}
                </p>
                <hr />
            </div>
        `;

        experienceElement.innerHTML += element;
    });

    data.educations.forEach(education => {
        const element = `
            <div class="w3-container">
              <h5 class="w3-opacity"><b>${education.name}</b></h5>
              <h6 class="w3-text-teal">
                <i class="fa fa-calendar fa-fw w3-margin-right"></i>${education.startDate} ${education.endDate}
              </h6>
              <p>${education.description}</p>
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

