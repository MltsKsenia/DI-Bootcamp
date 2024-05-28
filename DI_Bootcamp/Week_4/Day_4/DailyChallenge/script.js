const planets = [
    { name: "Mercury", color: "gray", moons: [] },
    { name: "Venus", color: "yellow", moons: [] },
    { name: "Earth", color: "blue", moons: ["Moon"] },
    { name: "Mars", color: "red", moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", color: "orange", moons: ["Io", "Europa", "Ganymede", "Callisto"] },
    { name: "Saturn", color: "goldenrod", moons: ["Titan", "Enceladus", "Mimas", "Iapetus", "Rhea"] },
    { name: "Uranus", color: "lightblue", moons: ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"] },
    { name: "Neptune", color: "darkblue", moons: ["Triton", "Nereid"] }
];

const listPlanets = document.querySelector('.listPlanets');

planets.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;
    planetDiv.style.margin = '40px';

    listPlanets.appendChild(planetDiv);

    planet.moons.forEach((moon, index) => {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add('moon');
        moonDiv.style.left = `${100 + (index * 80)}px`;
        moonDiv.textContent = moon;
        moonDiv.style.padding = '15px';
        moonDiv.style.marginLeft = '40px';
        moonDiv.style.textAlign = 'center';
        planetDiv.appendChild(moonDiv);
    });
});