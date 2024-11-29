import "./menu.css";
import "./header.css";
import scallionImg from "./images/scallionpancake.jpg"
import tacoImg from "./images/taco.jpg";
import cumSalad from "./images/spicycucumbersalad.jpg"
import bulgogi from "./images/bulgogifinal.jpg"
import fish from "./images/spicyboiledfishrice.jpg"
import tacos2 from "./images/tacos2.jpg"
export const loadMenu = ()=>{
    const content = document.getElementById("content");
    const container = document.createElement('div');
    container.id = "container";
    content.appendChild(container);
    container.appendChild(cardFactory(scallionImg,"scallion pancakes"));
    container.appendChild(cardFactory(tacoImg,"birria tacos"));
    container.appendChild(cardFactory(cumSalad,"spicy cucumber salad"));
    container.appendChild(cardFactory(bulgogi,"bulgogi"));
    container.appendChild(cardFactory(fish,"spicy boiled fish"));
    container.appendChild(cardFactory(tacos2,"steak & chicken tacos"));
    
    
};

const cardFactory = (imageUrl, text) =>{
    const card = document.createElement('div');
    card.classList.add("card");
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add("dishImg");
    card.appendChild(img);
    const dishDesc = document.createElement('p');
    dishDesc.classList.add('dishDesc');
    dishDesc.innerText = text;
    card.appendChild(dishDesc);
    return card;
};

