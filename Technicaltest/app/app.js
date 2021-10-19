window.onload = function(){
    console.log("loaded")

    let villager = [];
    let container = document.getElementById('roster');

    async function getData() {
        let response = await fetch('http://acnhapi.com/v1/villagers/101');
        let JSON = await response.json();
        villager.push(JSON)
        console.log(villager[0]);
        renderVillager();
    }

function renderVillager() {

        let html = "";

        for (let v in villager) {
           html += `<div id="pokemon">
            <img src="${v.image_URL}" alt="pokemon">
            <h2>#${v.id}</h2>
            <h1>${v.name}</h1>
        </div>`
        }

        container.innerHTML = html;

    }


        
    getData();
    // renderVillager();
}
