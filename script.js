import { commenters } from "./data.js";

const container = document.getElementById('comments');

commenters
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(profile => {
        const { sex, name, jobTitle, gitHubUserName, commentData } = profile;
        const imgSrc = sex == "male" ? "man.png" : "woman.png";

        const comment = `<div class="comment borderRadiase">
                    <div class="imgName">
                        <img src="./assets/${imgSrc}" alt="icon" class="imgIcon">&nbsp;&nbsp;
                             <a href="https://github.com/${gitHubUserName}" target="_blank">
                                <span class="commentAuther">${name}</span>
                                <div class="jobTitle">${jobTitle}</div>
                            </a>
                    </div>
                    <div>${commentData}</div>
                </div>
    `;
        container.innerHTML += comment;
        
        
    });