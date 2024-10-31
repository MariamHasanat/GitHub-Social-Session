import { commenter } from "./data.js";

const container = document.getElementById('comments');

commenter
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(profile => {
        const { sex, name, jobTitle, gitHubUserName, commentdata } = profile;
        const imgSrc = sex == "male" ? "man.png" : "woman.png";

        const comment = `<div class="comment">
                    <div class="imgName">
                        <img src="./assets/${imgSrc}" alt="icon" width="30px" height="30px"
                            style="border-radius: 50%;">&nbsp;&nbsp;
                             <a href="https://github.com/${gitHubUserName}" target="_blank">
                 <span class="commentAuther">${name}</span></a>
                    </div>
                    <div>${commentdata}</div>
                </div>
    `;
        container.innerHTML += comment;
        
        
    });