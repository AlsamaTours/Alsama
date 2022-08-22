
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
    document.getElementById('task-id').style.display = 'none';
    var name = window.location.href;
    name = name.split('#')[1];
    console.log(name);

    document.getElementById('task-id').value = name;
    btn.style.display = "none";
    document.getElementById('qr').style.display = 'none';
    BuscarCliente();
   

})

const options = {
  margin: 0.5,
  filename: 'invoice.pdf',
  image: { 
    type: 'jpeg', 
    quality: 500
  },
  html2canvas: { 
    scale: 1 
  },
  jsPDF: { 
    unit: 'in', 
    format: 'letter', 
    orientation: 'portrait' 
  }
}



function printDiv(divName) {
 var printContents = document.getElementById(divName).innerHTML;
 var originalContents = document.body.innerHTML;

 document.body.innerHTML = printContents;

 window.print();

 document.body.innerHTML = originalContents;
}

function generateQr(){
    document.getElementById('qr').style.display = 'block';
    let size = "1000x1000";
    let data = "https://www.alsamatourscr.com/Coti/index.html#"+document.getElementById('task-id').value ;
    let baseURL = "https://api.qrserver.com/v1/create-qr-code/";
    let url = `${baseURL}?data=${data}&size=${size}`;

    document.getElementById('qr').src = url;
}

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
    window.location.href = 'https://www.alsamatourscr.com/';
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
            await Busqueda();  
                     
 }
}


async function Busqueda(){
    onGetTask2 ((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                    if(doc.data().Tours == ID){
                        project.innerHTML = `<p><span>Servicio</span> Tours and shuttles</p>
                        <p><span>CLIENT</span> ${doc.data().Name}</p>
                        <p><span>Niños</span> ${doc.data().Nino}</p>
                        <p><span>Adultos</span> ${doc.data().Adulto}</p>`;
                        if(doc.data().estado == true){
                             project.innerHTML += `<p><span>Estado</span>Aceptado</p>`;
                        }else{
                             project.innerHTML += `<p><span>Estado</span>Cancelado</p>`;
                        }
                        Adulto = doc.data().Adulto;
                        Ninos = doc.data().Nino;
                        IVA = doc.data().iva;
                        
                        
                    }
                })
                   
            })
    Aceptado();
}

async function Aceptado(){

    generateQr();
    try{
         await onGetTask();
    }catch(error){
        console.log(error);
        
    window.location.href = '../index.html';
    }
   
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

}










