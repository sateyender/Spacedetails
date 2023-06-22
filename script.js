//JSON data representing planets
const planets =[
    {
        name:"Mercury",
        image:"images/mercury.jpg",
        description:"Mercury is the collest planet to the sun Mercury was known in Egypt and also probably in the East as early as 1500 BCE. The name mercury originated in 6th-century alchemy, in which the symbol of the planet was used to represent the metal; the chemical symbol Hg derives from the Latin hydrargyrum, “liquid silver.” Although its toxicity was recognized at an early date, its main application was for medical purposes."
    },

    {
        name:"Venus",
        image:"images/venus.jpg",
        description:"Venus is known for its thick atmosphere and greenhouse effect.Venus is the second planet from the Sun, and is Earth's closest neighbor in the solar system. Venus is the brightest object in the sky after the Sun and the Moon, and sometimes looks like a bright star in the morning or evening sky. The planet is a little smaller than Earth, and is similar to Earth inside."
    },

    {
        name:"Earth",
        image:"images/earth.jpg",
        description:"Earth is the third planet from the sun and the only known planet to support life.Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70% of Earth's surface."
    },

    //add more planet objects here..

];

//function to create a planet card
function createPlanetCard(planet){
    const card=document.createElement("div");
    card.classList.add("card");
    
    const image=document.createElement("img");
    image.src=planet.image;
    image.alt=planet.name;
    
    const heading =document.createElement("h3");
    heading.textContent=planet.name;
    
    const description=document.createElement("p");
    description.textContent=planet.description;

    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(description);
    return card;

}

document.addEventListener("DOMContentLoaded",function(){
    const planetContainer=document.getElementById("planet-container");

    planets.forEach(function(planet){
        const planetCard=createPlanetCard(planet);
        planetContainer.appendChild(planetCard);
    });
});