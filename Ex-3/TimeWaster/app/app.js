'use strict';

window.onload = function() {

    let baseUrl = 'http://www.omdbapi.com/?apikey=1793753b&';

    let searchedMovie = document.getElementById('movie').value;
    console.log('loaded');
    let url = baseUrl + 't=bladerunner';
    getData(url).then(result => {
        console.log(result);
    })

    async function getData(url) {
        let response = await fetch(url);
        return await response.json();
    }

    document.get


}