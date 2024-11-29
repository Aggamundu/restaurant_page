import {loadHome} from "./homepage";
import { loadMenu } from "./menu";
import fish from "./images/spicy boiled fish.jpg"
import { loadLocation } from "./location";
    //set the background
    const backgroundDiv = document.createElement('div');
    backgroundDiv.style.backgroundImage = `url(${fish})`;
    backgroundDiv.id = "backgroundDiv";
    document.body.appendChild(backgroundDiv);
loadHome();

const content = document.getElementById("content");
const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const contactButton = document.getElementById("contactButton");
const buttons = document.querySelectorAll(".radioButton");

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        buttons.forEach(button =>button.setAttribute("aria-pressed","false"));
        button.setAttribute("aria-pressed","true");
    });
});

homeButton.addEventListener('click', ()=>{
    content.classList.add("remove");
    content.addEventListener("transitionend",()=>{
        content.innerHTML = "";
        loadHome();
        content.classList.remove("remove");
    },{once:true}); 
});

menuButton.addEventListener('click', ()=>{
    content.classList.add("remove");
    content.addEventListener("transitionend",()=>{
        content.innerHTML = "";
        loadMenu();
        content.classList.remove("remove");
    },{once:true}); 
});

contactButton.addEventListener('click', ()=>{
    content.classList.add("remove");
    content.addEventListener("transitionend",()=>{
        content.innerHTML = "";
        loadLocation();
        content.classList.remove("remove");
    },{once:true}); 
});