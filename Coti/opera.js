
const db = firebase.firestore();
const tasksContainer = document.getElementById('tasks-container');
const Servicios = document.getElementById('Servicios');
const project = document.getElementById('project');
const btn = document.getElementById('task-form');
const superior = document.getElementById('task-Superior');
var Ninos = 0;
var Adultos = 0;
var Precio = 0;
var IVA = 0;
contador = 1;
precio = 0;
var exite = 1;
var ID = document.getElementById('task-id').value;

window.addEventListener('DOMContentLoaded',(e)=>{
   
    var name = window.location.href;
     //btn.style.display = 'none';
    //var split = name.slice(47);
    console.log(name);
    var split = name..split('#');
   
    document.getElementById('task-id').value = split[1];
    btn.style.display = "none";
     BuscarCliente();

})

const onGetTask = (callback) => db.collection(" Tours/collection/"+ID).onSnapshot(callback); //En vivo
const onGetTask2 = (callback) => db.collection("Clientes").onSnapshot(callback); //En vivo

function restaFechas(f1,f2)
 {
  
var fechaInicio = new Date(f1).getTime();
var fechaFin    = new Date(f2).getTime();
var diff = fechaFin - fechaInicio;
var DifeD = (diff/(1000*60*60*24));
if(DifeD == 0){
    return 1;
}else{
    return(DifeD );
}


 }
async function  BuscarCliente() {
    console.log("Click en cliente");
    if(!document.getElementById('task-id').value){
        alert("Texto vacio");
    window.location.href = 'https://www.thewanderlustcr.com/index.html';
    }
    else {
            superior.innerHTML=`<th class="service">ID</th>
            <th class="desc">Detalles</th>
            <th>Time</th>
            <th>PlaceIn</th>
            <th>PlaceOut</th>
            <th>In/Out</th>
            <th>Price</th>`;
       
            ID = String(document.getElementById('task-id').value) 
 
            await onGetTask2();
            project.innerHTML =``;
            onGetTask2 ((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                if(doc.data().Tours == ID){
                    project.innerHTML = `<div><span>Servicio</span> Tours and shuttles</div>
                    <div><span>CLIENT</span> ${doc.data().Name}</div>
                    <div><span>Niños</span> ${doc.data().Nino}</div>
                    <div><span>Adultos</span> ${doc.data().Adulto}</div>`;
                    if(doc.data().estado == true){
                         project.innerHTML += `<div><span>Estado</span>Aceptado</div>`;
                    }else{
                         project.innerHTML += `<div><span>Estado</span>Cancelado</div>`;
                    }
                    Adulto = doc.data().Adulto;
                    Ninos = doc.data().Nino;
                    IVA = doc.data().iva;
                    exite = 0;
                }


                })
               
            })
             await onGetTask();
            if(exite == 1){
               
                
                onGetTask((querySnapshot) =>{
                querySnapshot.forEach(doc => {
                  Servicios.innerHTML += ` <td class="service">${doc.data().ID}</td>
                        <td class="desc">${doc.data().Description}</td>
                        <td class="unit">${doc.data().Time}</td>
                        <td class="qty">${doc.data().PlaceIn} </td>
                        <td class="total">${doc.data().PlaceOut}</td>
                        <td class="total">${doc.data().In} <br> ${doc.data().Out}</td>
                        <td class="total">$${doc.data().Price}</td>
                      </tr>`;
                      
                    Precio += (((doc.data().Price) * Ninos) + ((doc.data().Price) * Adulto))*restaFechas(doc.data().In,doc.data().Out );    
                })
                Servicios.innerHTML+=`  
                        <tr>
                        <td colspan="7" class="grand total"></td>

                      </tr>

                     <tr>
                        <td colspan="6">SUBTOTAL</td>
                        <td class="total">$${Precio}</td>
                      </tr>
                      <tr>
                        <td colspan="6">TAX ${IVA}%</td>
                        <td class="total">$${Math.round(  Precio*(IVA))/100  }</td>
                      </tr>
                      <tr>
                        <td colspan="6" class="grand total">GRAND TOTAL</td>
                        <td class="grand total">$${Precio*(IVA/100)+Precio}</td>
                      </tr>`
                      Precio = 0;
                    })

            }else{
                 alert("No existe el ID ingresado");
                window.location.href = 'https://www.thewanderlustcr.com/index.html';
   
            }
 }
}










