import "./location.css";
import livic from "./images/livic.png";
export const loadLocation = ()=>{
    const content = document.getElementById("content");
    const locContainer = document.createElement('div');
    const livicImg = document.createElement('img');
    livicImg.src = livic;
    livicImg.id = "livicImg";
    const locDesc = document.createElement("p");
    locDesc.id = "locDesc";
    locDesc.innerText = "Livingston Apartment Building C Room 328 🦅💧😩"
    locContainer.id = "locContainer";
    locContainer.appendChild(locDesc);
    locContainer.appendChild(livicImg);
    content.appendChild(locContainer);
};