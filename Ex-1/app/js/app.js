window.onload = function(){
    console.log("loaded");

    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();
        
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let order = document.getElementById('order').value;

        let message = `<p>The order for the customer ${name}  is the following:  ${order}. The customer may be notified by email:  ${email}</p>`

        document.getElementById("message").innerHTML = message;
    })
}

