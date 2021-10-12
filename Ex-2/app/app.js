import CreateTeam from './team.js';
'use strict';

let list = [];
let pokemon = [];

let createTeam = new CreateTeam();

function getData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => {
        return response.json();
    }).then(data => {
        list = data.results;

        for (let element of list) {
            fetch(element.url).then(response => {
                return response.json();
            }).then(data => {
                pokemon.push(data);
            });
        }

    });
};

window.onload = function() {

getData();
setTimeout(buildList, 3000);

function buildList() {
    let html = "";

    pokemon.sort(function(a, b) {
        return a.id - b.id;
    })

    for (let p of pokemon) {
        html += `<div id="pokemon">
        <img src="${p.sprites.front_default}" alt="pokemon">
        <h2>#${p.id}</h2>
        <h1>${p.name}</h1>
        <div id="types">
            <div id="type"><h3>Grass</h3></div>
            <div id="type"><h3>Poison</h3></div>
        </div>
        <button class="button">Add to your team ➕</button>
    </div>  `
    }
document.getElementById('roster').innerHTML = html;

document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', event => {
        let id = event.target.id;

    });
});

}
refreshTeam();
}

function refreshTeam() {
    document.getElementById('team').innerHTML = createTeam.describe();
}