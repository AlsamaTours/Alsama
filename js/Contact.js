const form  = document.getElementById('BtmForm');

form.addEventListener('click', function(e) {
    e.preventDefault();
    const BodyEmail = "<div>New posible cx, please get in touch with the cx as soon as possible</div>"+'\n'+
    "<div>Email: "+ document.getElementById('email').value+"</div>"+
    "<div>name: "+ document.getElementById('name').value+"</div>"+
    "<div>Pick up: "+ document.getElementById('Pick').value+"</div>"+
    "<div>Drop off: "+ document.getElementById('Drop').value+"</div>"+
    "<div>Start day: "+ document.getElementById('start').value+"</div>"+
    "<div>Number of cxs: "+ document.getElementById('number').value+"</div>"+
    "<div>Description: "+ document.getElementById('Description').value+"</div>";
    Email.send({
        Host : "smtp.elasticemail.com",
        Port: 2525,
        Username : "automaticosemails@gmail.com",
        Password : "827486E87EEDF8DC4246B3C76AC5CE9CBF18",
        To : 'automaticosemails@gmail.com',
        From : "Email: "+ document.getElementById('email').value,
        Subject : "Email from a new possible cx",
        Body : BodyEmail
    }).then( function(){
        toastr.info("Thank you for get in touch with us, an agent will contact you as soon as possible" +'\n'+"Gracias por ponerse en contacto con nosotros, un agente lo esta contactando tan pronto sea posible")
        document.getElementById('email').value = " ";
        document.getElementById('name').value = " ";
        document.getElementById('Pick').value = " ";
        document.getElementById('Drop').value = " ";
        document.getElementById('start').value = " ";
        document.getElementById('number').value = " ";
        document.getElementById('Description').value = " ";

    }
    ).catch((error) => {
        alert(error);
      });
});