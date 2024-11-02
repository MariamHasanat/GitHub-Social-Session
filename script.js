import { commenter } from "./data.js";

const container = document.getElementById('comments');

commenter
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(profile => {
        const { sex, name, jobTitle, gitHubUserName, commentdata } = profile;
        const imgSrc = sex == "male" ? "man.png" : "woman.png";

        const comment = `<div class="comment borderRadiase">
                    <div class="imgName">
                        <img src="./assets/${imgSrc}" alt="icon" class="imgIcon">&nbsp;&nbsp;
                             <a href="https://github.com/${gitHubUserName}" target="_blank">
                                <span class="commentAuther">${name}</span>
                                <div class="jobTitle">${jobTitle}</div>
                            </a>
                    </div>
                    <div>${commentdata}</div>
                </div>
    `;
        container.innerHTML += comment;
        
        
    });