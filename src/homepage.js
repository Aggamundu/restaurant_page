import chefs from "./images/chefhorizontal-modified.png";
import "./styles.css";
export const loadHome = () =>{
    const content = document.getElementById("content");
    //set the div containing eric
    const descDiv = document.createElement('div');
    descDiv.id = "descDiv";
    
    const desc = document.createElement('p');
    desc.innerText = "The best food in Livi at least";
    descDiv.appendChild(desc);
    desc.classList.add("desc");

    const eric = document.createElement('img');
    eric.id = "chefsImage";
    eric.src = chefs;
    descDiv.appendChild(eric)

    const desc2 = document.createElement('p');
    desc2.innerText = "Come visit us at Livi C!";
    desc2.classList.add("desc");
    descDiv.appendChild(desc2);
    content.appendChild(descDiv);
};

