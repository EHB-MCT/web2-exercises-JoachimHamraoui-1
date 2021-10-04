window.onload = function(){
    console.log("loaded");

    let dishes = [ {
        id: 1,
        name: 'California Rolls',
        price: 7.5
    },
    {
        id: 2,
        name: 'Paella',
        price: 16.75
    },
    {
        id: 3,
        name: 'Cheeseburger',
        price: 2.15
    },
    {
        id: 4,
        name: 'Takoyaki',
        price: 10
    },
    {
        id: 5,
        name: 'Quatro Formaggio Pizza',
        price: 6
    }

];


    for (let dish of dishes) {
        console.log(dish);

        document.getElementById('dish-container').insertAdjacentHTML('beforeend', `<input type="checkbox" id="${dish.id}" name="dish" value="${dish.name}">
        <label label for= "${dish.name}"> ${dish.name} </label> <br>`)
    }

    document.getElementById('submit-order').addEventListener('click', e => {
        e.preventDefault();

        let customerName = document.getElementById('name').value;
        let customerMail = document.getElementById('email').value;

        let customerOrder = document.querySelector('input[name="dish"]:checked').value;

        console.log(customerName, customerMail, customerOrder);

        let printOrder = () => {
            return `<p>The order for the customer ${customerName}  is the following:  ${customerOrder}. The customer may be notified by email:  ${customerMail}</p>`
        };

        document.getElementById("message").innerHTML = printOrder(customerName, customerMail, customerOrder);
    })

    document.getElementById('calculate-price').addEventListener('click', e => {
        e.preventDefault();

        let calculatePrice = () => {
            return `The total price  will be ${dish.price}`;    
        }

        document.getElementById("message").innerHTML = calculatePrice();

    })
}

