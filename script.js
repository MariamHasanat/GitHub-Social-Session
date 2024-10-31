import { commenter } from "./data.js";

const container = document.getElementById('comments');
console.log("lello");

commenter
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(profile => {
        const { sex, name, jobTitle, gitHubUserName, commentdata } = profile;
        const imgSrc = sex == "male" ? "man.png" : "woman.png";

        const comment = `<div class="comment">
                    <div class="imgName">
                        <img src="./assets/${imgSrc}" alt="icon" width="30px" height="30px"
                            style="border-radius: 50%;">&nbsp;&nbsp;<span class="commentAuther">${name}</span>
                    </div>
                    <div>${commentdata}</div>
                </div>
    `;
        container.innerHTML += comment;
        
        
    });
//     <div class="flex flex-col place-items-center w-[250px] gap-2 bg-white comment shadow-xl p-4 rounded">
//     <img class="w-4/5" src="./assets/images/${imgSrc}" />
//     <h3 class="text-center">${name}</h3>
//     <p class="m-0 text-[#00000099] text-center">${jobTitle}</p>
//     <div class="flex gap-2">
//         <a href="https://www.linkedin.com/in/${linkedInUserName}" target="_blank">
//             <img class="hover:scale-110 cursor-pointer transition-all w-[50px]" src="./assets/icons/linkedin.png" />
//         </a>
//         <a href="https://github.com/${gitHubUserName}" target="_blank">
//             <img class="hover:scale-110 cursor-pointer transition-all w-[50px]" src="./assets/icons/github.png" />
//         </a>
//     </div>
// </div>