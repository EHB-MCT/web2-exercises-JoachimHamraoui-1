'use strict';

window.onload = function() {
    console.log('loaded')
    let randomNumber = Math.floor(Math.random() * 20);
    let inputNumber = document.getElementById('number').value;
    console.log(randomNumber);

    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();
        compareNumber(inputNumber);

    })

    function compareNumber(nr) {
        console.log(nr);

        if(nr > randomNumber) {
            console.log('guess lower');
        } else if (nr < randomNumber) {
            console.log('guess up');
        } else if (nr == randomNumber) {
            console.log('You have won');
        }

    }

    let promise = new Promise(function(resolve, reject) {
        console.log('Start of promise');
    })

}