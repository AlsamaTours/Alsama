const taskForm = document.getElementById('Tours');
const trans = document.getElementById('trans');

const select = document.getElementById('Serch');

function Pack(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

    today = yyyy+'-'+mm+'-'+dd;

    taskForm.innerHTML = ``;
    trans.innerHTML = ``;
    trans.innerHTML = `<section id="contact-page">
    <div class="container">
      <div class="center">

        <h2>Permítanos crear un itinerario personalizado para usted.</h2>
        <p>Háganos saber los detalles y nos pondremos en contacto con usted pronto </p>
      </div>


      <form action="https://formsubmit.co/info@thewanderlustcr.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://www.thewanderlustcr.com/#Exito">
        <div class="form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" data-rule="minlen:3" data-msg="Please enter at least 4 chars"required />
              <div class="validation"></div>
            </div>
        <div class="form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Correo" data-rule="email" data-msg="Please enter a valid email" required/>
              <div class="validation"></div>
            </div>
         <div class="form-group">
              <input type="text" class="form-control" name="Pick" id="Pick" placeholder="Hotel de recogida" data-rule="minlen:4"  data-msg="Please enter a valid Pick up place" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" name="Days" id="Drop" placeholder="Cuanto tiempo estaras en el pais?" data-msg="Please enter a valid number" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="date" class="form-control" name="Date" id="start" data-rule="date"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" name="number" id="number" placeholder="Pasajeros" data-rule="numer"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <textarea type="text" class="form-control" name="Description" id="Description" placeholder="Que actividades buscas hacer?" data-rule="minlen:4"  data-msg="Please enter a valid description" required></textarea>
              <div class="validation"></div>
            </div>

       <div class="text-center" id="confirmacion"><button type="submit" class="btn btn-primary btn-lg">Enviar</button></div>
    </form>
      <!--/.row-->
    </div>
    <!--/.container-->
  </section>`;
    document.getElementById("start").setAttribute("min", today);
    document.getElementById("start").setAttribute("value", today);
}

function rentACar(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

    today = yyyy+'-'+mm+'-'+dd;

    taskForm.innerHTML = ``;
    trans.innerHTML = ``;
    trans.innerHTML = `<section id="contact-page">
    <div class="container">
      <div class="center">

        <h2>Enceuntra tu carro ideal </h2>
        <p>Háganos saber los detalles y nos pondremos en contacto con usted pronto  </p>
      </div>


      <form action="https://formsubmit.co/info@thewanderlustcr.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://www.thewanderlustcr.com/#Exito">
        <div class="form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" data-rule="minlen:3" data-msg="Please enter at least 4 chars"required />
              <div class="validation"></div>
            </div>
        <div class="form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Correo" data-rule="email" data-msg="Please enter a valid email" required/>
              <div class="validation"></div>
            </div>
         <div class="form-group">
              <input type="text" class="form-control" name="Pick" id="Pick" placeholder="Hotel de recogida" data-rule="minlen:4"  data-msg="Please enter a valid Pick up place" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="Drop" id="Drop" placeholder="Automatico / Manual / Ambos " data-rule="minlen:3"   data-msg="Please enter a valid Drop off place" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="date" class="form-control" name="Date" id="start"  data-rule="date"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" name="number" id="number" placeholder="Pasajeros" data-rule="numer"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>

       <div class="text-center" id="confirmacion"><button type="submit" class="btn btn-primary btn-lg">enviar</button></div>
    </form>
      <!--/.row-->
    </div>
    <!--/.container-->
  </section>`;
    document.getElementById("start").setAttribute("min", today);
    document.getElementById("start").setAttribute("value", today);
}

function Trasnport(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

    today = yyyy+'-'+mm+'-'+dd;

    taskForm.innerHTML = ``;
    trans.innerHTML = ``;
    trans.innerHTML +=`<div id="btn-menu" class="btn-menu">
       <a class="btn btn-primary btn-lg" href="javascript:void(0); ">Transporte Privado</a>
       <a class="btn btn-primary btn-lg" href="javascript:void(0);">Tours Privados</a>
       <a class="btn btn-primary btn-lg" href="javascript:void(0);">Shuttle</a>
    </div>

    <div id="PrivateTour">
      <div id="PrivateTour">
      <div class="Tit-Shut">
      <h2>Tours Privados</h2>
      <p>El 4% de impuesto al valor agregado (IVA), debe sumarse a todas las tarifas desde Julio 2021 hasta Julio 2022</p> 
      <p>H1 max 5 pasajeros  -  Hiace max 10 pasajeros </p> 
    </div>
    
    <table class="table table-bordered border-primary personalizada">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Detalles</th>
      <th scope="col">Precio H1</th>
      <th scope="col">Precio Hiace</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>One day San Jose - Jaco</td>
      <td>Máximo 6 horas de espera</td>
      <td>$214</td>
      <td>$243</td>
    </tr>
    <tr>
      <td>One day San Jose - Manuel Antonio</td>
      <td>Máximo 6 horas de espera</td>
      <td>$271</td>
      <td>$300</td>
    </tr> 
     <tr>
      <td>One day San Jose - Arenal</td>
      <td>Máximo 6 horas de espera</td>
      <td>$257</td>
      <td>$286</td>
    </tr>
     <tr>
      <td>One day San Jose - Monteverde</td>
      <td>Máximo 6 horas de espera</td>
      <td>$279</td>
      <td>$307</td>
    </tr>
    <tr>
      <td>San Jose - Volcan Poas Tour</td>
      <td>Entradas no incluidas</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>San Jose - Doka - Volcan Poas Tour</td>
      <td>Entradas no incluidas</td>
      <td>$157</td>
      <td>$186</td>
    </tr>
    <tr>
      <td>San Jose - Doka - Volcan Poas - La Paz Tour</td>
      <td>Entradas no incluidas</td>
      <td>$170</td>
      <td>$200</td>
    </tr>
    <tr>
      <td>San Jose - Volcan Irazu</td>
      <td>Entradas no incluidas</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>San Jose - Volcan Irazu - Orosi & Lankaster</td>
      <td>Entradas no incluidas</td>
      <td>$193</td>
      <td>$221</td>
    </tr>
    <tr>
      <td>San Jose - Volcan Irazu - ruins of Cartago & Baisilica</td>
      <td>Entradas no incluidas</td>
      <td>$157</td>
      <td>$186</td>
    </tr>
    <tr>
      <td>Dinner in San Jose</td>
      <td>Entradas no incluidas</td>
      <td>$86</td>
      <td>$114</td>
    </tr>
    <tr>
      <td>San Jose City Tour</td>
      <td>Maximo 4 Horas </td>
      <td>$143</td>
      <td>$170</td>
    </tr>



  </tbody>
</table>
<a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
  <br>
  
    </div>
    </div>

    <div id="PrivateShuttle">
      
  <section id="contact-page">
    <div class="container">
      <div class="center">

        <h2>Shuttle</h2>
        <p>Déjanos saber los detalles y nos pondremos en contacto contigo pronto </p>
      </div>


      <form action="https://formsubmit.co/info@thewanderlustcr.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://www.thewanderlustcr.com/#Exito">
        <div class="form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" data-rule="minlen:3" data-msg="Please enter at least 4 chars"required />
              <div class="validation"></div>
            </div>
        <div class="form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Correo" data-rule="email" data-msg="Please enter a valid email" required/>
              <div class="validation"></div>
            </div>
         <div class="form-group">
              <input type="text" class="form-control" name="Pick" id="Pick" placeholder="Hotel de recogida" data-rule="minlen:4"  data-msg="Please enter a valid Pick up place" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="Drop" id="Drop" placeholder="Hotel de dejada" data-rule="minlen:4"   data-msg="Please enter a valid Drop off place" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="date" class="form-control" name="Date" id="start" placeholder="Drop off" data-rule="date"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" name="number" id="number" placeholder="Pasajeros" data-rule="numer"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>

       <div class="text-center" id="confirmacion"><button type="submit" class="btn btn-primary btn-lg">Enviar</button></div>
    </form>
      <!--/.row-->
    </div>
    <!--/.container-->
  </section>
<div class="Terms-cond">
    <hr>
      <h2>Terminos & Condiciones</h2>
      <ul>
        <li>1 equipaje de mano</li>
        <li>1 maleta</li>
        <li>Maletas extra $10</li>
        <li>Tabla de surf $10</li>
        <li>Cuando tu recogida sea en el aeropuerto tienes que ir al restaurante delimalinche.</li>
      </ul>
      <hr>
            <h2>En los hoteles en el lobby</h2>
      <ul>
        <li>Existe un posible retraso de 15 minutos para la recogida en otros hoteles.</li>
        <li>Las reservas se pueden abrir con un mínimo de 2 pasajeros.</li>
        <li>Pero cuando son menos es mejor preguntar</li>
        <li>Si el servicio se abrio en el sitio o un hotel, podemos vendérselo.</li>
      </ul>
      <hr>
  </div>

    </div>

    <div id="PrivateTrans">
      <div class="Tit-Shut">
      <h2>Transporte Privado</h2>
      <p>El 4% de impuesto al valor agregado (IVA), debe sumarse a todas las tarifas desde Julio 2021 hasta Julio 2022 </p> 
      <p>H1 max 5 pasajeros  -  Hiace max 10 pasajeros </p> 
    </div>
    
    <table class="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">Salida</th>
      <th scope="col">Destino</th>
      <th scope="col">Precio H1</th>
      <th scope="col">Precio Hiace</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Aeropuerto</td>
      <td>San Jose</td>
      <td>$50</td>
      <td>$57</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Aeropuerto</td>
      <td>$43</td>
      <td>$50</td>
    </tr>
    <tr>
      <td>Aeropuerto / San Jose</td>
      <td>Jaco</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>Aeropuerto / San Jose</td>
      <td>Puntarenas</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>Aeropuerto / San Jose</td>
      <td>Caldera</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Esterillos</td>
      <td>$170</td>
      <td>$200</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Monteverde</td>
      <td>$186</td>
      <td>$214</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Arenal</td>
      <td>$170</td>
      <td>$200</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Manuel Antonio</td>
      <td>$186</td>
      <td>$214</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Dominical</td>
      <td>$286</td>
      <td>$314</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Sierpe</td>
      <td>$314</td>
      <td>$357</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Golfito</td>
      <td>$357</td>
      <td>$400</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Puerto Viejo Limon</td>
      <td>$286</td>
      <td>$314</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Puerto Viejo Limon</td>
      <td>$257</td>
      <td>$286</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Tamarindo</td>
      <td>$286</td>
      <td>$314</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Montezuma - Santa Teresa Mal pais</td>
      <td>$314</td>
      <td>$343</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Santa Teresa - Mal pais (with transfer)</td>
      <td>$296</td>
      <td>$324</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Montezuma (with transfer)</td>
      <td>$275</td>
      <td>$304</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Santa Teresa - Mal pais (with transfer)</td>
      <td>$296</td>
      <td>$324</td>
    </tr>




  </tbody>
</table>
  <br>
  <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
    </div>`;

    document.getElementById('PrivateTour').style.display = 'none';
    document.getElementById('PrivateShuttle').style.display = 'none';
    document.getElementById("start").setAttribute("min", today);
    document.getElementById("start").setAttribute("value", today);

}

function canopy(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2> Rainforest Canopy</h2>
            </div>
            <p class=izquierda>
              Our park offers Costa Rica´s safest zip-line and effortlessly traverse the canopy and its hanging gardens under the supervision of our experienced Guias.
            </p>
            <p class=izquierda>
             The exhilarating canopy tour takes guests flying across the magnificent Moliente River several times.
              </p>
            <p class=izquierda>
              Walking trails lead visitors deep into the rainforest floor. Passengers will be strapped in safe top-quality gear specifically designed for this canopy tour.
            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $96 pp
            </p>

            <p class=izquierda>
            <strong>What to bring?</strong> Comfortable shoes, long pants, y camera.
            </p>
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo </p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>



          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Canopy/Canopy.jpg" width="560" height="366" alt="img25" />
        </figure>


        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Canopy/Canopy2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function combo(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2> Poás Volcano, Doka Estate & La Paz Waterfalls</h2>
            </div>
            <p class=izquierda>
              As we ascend towards the volcano we will stop for a brief explanation of our coffee. There is a noticeable change in temperature and vegetation, preparing us for the pleasure of the exuberant cloud forest of Poas Volcano.
            </p>
            <p class=izquierda>
              We will hike on a trail to the beautiful Botos Lagoon. We will continue our trip towards the Caribbean, stopping to discover La Paz Waterfall Gardens.
              </p>
            <p class=izquierda>
              In the natural park where we will walk through many spectacular trails which will take us to the White Magic Waterfall, the most spectacular one in the area.

            </p>
             </p>
             <p class="izquierda">
            <strong>Precio:</strong> $149 pp
            </p>

            <p class=izquierda>
            <strong>What to bring?</strong>  Comfortable shoes, long pants, y camera.
            </p>
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Breackfast and Almuerzo </p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>



          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Combo/Combo.jpg" width="560" height="366" alt="img25" />
        </figure>

         <figure class="effect-zoe">
          <img loading="lazy" src="../img/Combo/Combo2.jpg" width="560" height="366" alt="img25" />
        </figure>

         <figure class="effect-zoe">
          <img loading="lazy" src="../img/Combo/Combo3.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Combo/Combo4.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function pacuare(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML = `    
<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Water Rafting Pacuare River</h2>
            </div>
            <p class=izquierda>
              In this excursion you have the opportunity to be in one of the most popular rivers for this sport, Pacuare River. During the trip you will enjoy incomparable landscapes along the river.
            </p>
            <p class=izquierda>
              The Pacuare River is one of the five most important rivers of the world by its landscapes and fast rapids. In this tropical river the trip is pure magic.       
              </p>
            <p class=izquierda>
              Located in the Caribbean of Costa Rica, the Pacuare River confines the Mountain of Talamanca, the home to the native Indians of Cabecar and an immense variety of flora and fauna. Once in the river you will go 16 miles on the Heart of the rainforest, observing cascades, birds and the diversity of Flora.
            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $99 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>  Extra clothes, repellent, comfortable shoes, towel, sweater.
            </p>
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/seguridad.png">
            </div>
            <p  class="centrado">Equipment</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>


          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Pacuare/Pacuare.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Pacuare/Pacuare2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function at(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Arenal Volcano & hots springs</h2>
            </div>
            <p class=izquierda>
              It is no coincidence that the Arenal Volcano & Hot Springs is one of the most popular tours in the country. Visiting one of the most famous areas in Costa Rica and relaxing in the hot springs is an unforgettable experience! 
            </p>
            <p class=izquierda>
              On the way to Arenal, passing through the picturesque town of La Fortuna, on a clear day, you will have the opportunity to admire the majestic colossus.       
              </p>
            <p class=izquierda>
              At the hot springs near the volcano, relax in the natural heating jacuzzis, full of healthy minerals, or enjoy the additional services offered by the award-winning Tabacon Grand Spa & Thermal Resort or Baldi Hot Springs.
            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $162 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>    Hat, sunscreen, swimming suit, towel and camera
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo and dinner</p>
            <div class="ficon">
            </div>
          </div>

          

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/AT/AT1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/AT/AT2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function aereal(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Rainforest Aerial Tram</h2>
            </div>
            <p class=izquierda>
              This Rain Forest Aerial Tram from San Jose travels between the Grove Forest, and the canopy and its gardens, allowing you to discover plants and animals that usually are hidden in the heights of the forest.
            </p>
            <p class=izquierda>
              Found only 50 minutes from San José on the highway to Limon, the RainForest Aerial Tram offers one of the most impressive and unique parks of ecotourism and investigation in the world. Visitors literally travel 90 minutes between the grove forest, the canopy and its gardens discovering plants and animals that are usually hidden.         
              </p>
            <p class=izquierda>
              This little-known world has incredible beauty and extraordinary biological diversity. The “Gondola” (Aerial Tram) Tour is a modified “Ski Lift'' that covers a distance of 2.6 kilometers through the Costa Rica rainforest. The tour lasts approximately 90 minutes. Visitors will see the different levels of a rainforest, specifically the most difficult level to reach until recently and the least scientifically known part of the forest, the canopy (the tree tops). This course is very secure and very quiet allowing visitors to listen to the many different sounds of the rainforest.
            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $107 pp
            </p>
             <p class=izquierda>
            <strong>What to bring?</strong>   Walking shoes, binoculars, raincoat and camera.
            </p>
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Tram/Tram.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Tram/Tram2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function tortuguero(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Tortuguero National Park</h2>
            </div>
            <p class=izquierda>
              This is an expedition through the dense jungle of one of the most beautiful and scenic regions of Costa Rica. Sail the exotic channels of Tortuguero National Park, famous for its solitary beaches where the nesting of gigantic green turtles takes place (Jul to Sept.).
            </p>
            <p class=izquierda>
              Tortuguero is one of the most important nesting sites of the Green Turtle in the Western Hemisphere. A navigable network of channels and lagoons that will allow you to be in direct contact with the great variety of flora and fauna across the National Park of Tortuguero            
              </p>
            <p class=izquierda>
               We will leave early and travel through the Braulio Carrillo National Park where we will pass mountains covered by dense forests as well as numerous rivers and waterfalls until we arrive at the Caribbean of Costa Rica. Here, we will cross the banana plantations to board the boat to sail to Tortuguero National Park.
            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $140 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>   Comfortable shoes, repellent, hat, binoculars, extra clothes and camera
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas to the National Park</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Breakfast and Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Local Guias and boat tour</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Tortuguero/Tortuguero1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Tortuguero/Tortuguero2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function Folk(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Folklore Dinner Show</h2>
            </div>
            <p class=izquierda>
              Home to the Tierra Tipica spectacle. Ram Luna is perched high above the mountains overlooking the Central Valley. From this unique vantage point you can admire the auspicious panoramic views at dusk, and then take in the brilliance of the lights emanating from the capital.
            </p>
            <p class=izquierda>
               In addition, we will be treated to a sampling of Costa Rican Folklore through the various typical dances and marimba music, while we enjoy a delicious dinner buffet with a menu that reflects the typical dishes of the region.
            </p>
            <p class=izquierda>
               During our visit, the local artisans will exhibit their unique and exquisite creations that represent the different regions of the country. The evening culminates with the traditional masquerade extravaganza and a lively fireworks show. Do not miss this unforgettable experience!
            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $70 pp
            </p> 
          <p class=izquierda>
            <strong>What to bring?</strong>    Comfortable shoes, long pants, and camera.
            </p>

          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/taza.png">
            </div>
            <p  class="centrado">coffee tasting</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Bilingual Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Folklore/Folklore.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Folklore/Folklore2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function TortugaIsland(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML = `    <div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Tortuga Island Cruise</h2>
            </div>
            <p class=izquierda>
              Board a boat at Puntarenas and enjoy the Gulf of Nicoya, a beautiful archipelago and sea birds, and a great cruise until we arrive at Tortuga Island that is known for its immaculate white sand beach and turquoise waters, a perfect stop for swimming and snorkeling.
            </p>
            <p class=izquierda>
               You will remain on the island for approximately four hours where you can enjoy different activities such as canopy, hiking trails, kayaking, snorkeling, swimming, beach sports or simply relax and enjoy the beach while the crew prepares an exquisite style lunch
            </p>
            <p class=izquierda>
               Includes: Transporte, Guia, light breakfast, cruise, tropical fruits, refreshments, live music and Almuerzo. Bring: light clothing, bathing suit, towel, sunscreen lotion, hat, and camera.
            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $135 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>    Hat, sunblock, swimming suit, towel and camera
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Breakfast, Almuerzo, fruits and drinks</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/kayac.png">
            </div>
            <p  class="centrado">Kayac</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Tortuga/Tortuga.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Tortuga/Tortuga2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function IOL(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML = `  <div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Irazú Volcano, Orosi Valley & Lankester Garden</h2>
            </div>
            <p class=izquierda>
              This excursion offers the opportunity to visit the City of Cartago and its Basilica of Los Angeles, to discover the highest volcano in Costa Rica at 11000 feet above sea level and its amazing resemblance to the moon’s surface.
            </p>
            <p class=izquierda>
               then descend to the historic and colorful Valley of Orosi where you will have the opportunity to visit the oldest church of Costa Rica, the Colonial church of Orosi, and its town.
            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $112 pp
            </p>
           <p class=izquierda>
            <strong>What to bring?</strong>    Walking shoes, binoculars, raincoat and camera
            </p>  
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/IOL/IRAZU.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/IOL/IRAZU2.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/IOL/IRAZU3.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/IOL/IRAZU4.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function ManuelAntonio(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Manuel Antonio National Park</h2>
            </div>
            <p class=izquierda>
              This national park is considered to be one of the most beautiful in the country. It is a combination of a paradisiacal beach of crystalline waters with coral reefs, bordered by exuberant vegetation and the natural captivations of the tropical humid forest.
            </p>
            <p class=izquierda>
               Its beaches are counted among the best in the country, where snorkelling and surfing are very popular. On the way to Manuel Antonio along the coastal line, you will enjoy nice views and will be crossing plantations of African palm and picturesque villages along the Pacific coast, until you reach the port of Quepos and a few minutes after the National Park.
            </p>
            <p class=izquierda>
              At our arrival we will hike to the park, crossing a creek to access the park, since this park is closed to vehicles. Once at the park, it is possible to simply enjoy the beach, take a sunbath, or a nature walk through the park’s trails, which will allow you to observe the abundant flora and fauna of the park, especially several species of monkeys, iguanas, birds, and maybe, the three toed sloth.
            </p>
            <p class=izquierda>
              One of the trails borders Cathedral Point from where the sight of the park and the sea is spectacular. On our way back to San José, we will stop at Molas Souvenir, where you could have the opportunity to get the finest Costa rican arts.

            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $135 pp
            </p>
             <p class=izquierda>
            <strong>What to bring?</strong>  Hat, sun block, swimming suit, towel and camera.
            </p> 
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Manuel/ManuelAntonio1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Manuel/ManuelAntonio2.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`
}

function PDGS(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Poás Volcano, Doka Estates, Grecia & Sarchí</h2>
            </div>
            <p class=izquierda>
              Admire the imposing Poás Volcano at a height 8.884 ft above sea level. Visit a unique coffee plantation and the historic city of Sarchí on this exciting day trip.
            </p>
            <p class=izquierda>
              Our first stop is Poás Volcano National Park, where you will enjoy magnificent views of the Central Valley and the volcano´s enormous crater - considered one of the largest in the world! Next, we will visit the beautiful coffee plantations at Doka Estate.
            </p>
            <p class=izquierda>
               You will be Guiad through the estate, visiting the plantations and the 96 year old "beneficio" or coffee mill. Learn how the best coffee beans turn into a fabulous cup of java before enjoying a regional Costa Rican Almuerzo. Continue to the town of Sarchí, home to Costa Rica’s most experienced artisans.
            </p>
            <p class=izquierda>
              Here, see first-hand how typical oxcarts are built and painted, indulge in buying the local’s beautiful wood souvenirs!
            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $112 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>   Comfortable shoes, long pants, y camera.
            </p> 
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/PDGS/PDGS1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/PDGS/PDGS2.jpg" width="560" height="366" alt="img26" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/PDGS/PDGS3.jpg" width="560" height="366" alt="img27" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/PDGS/PDGS4.jpg" width="560" height="366" alt="img28" />
        </figure>
      </div>
    </div>`

}

function Cooffee(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Britt Coffee Tour</h2>
            </div>
            <p class=izquierda>
              Imagine following the journey of a coffee bean from the plantation to the processing plant to a cup of gourmet coffee, our experts Guia you through the lifecycle of gourmet coffee. Begin in our nursery and follow the beans starting with their growing cycle through careful collection and selection of the finest beans.
            </p>
            <p class=izquierda>
              Learn how Costa Rica’s unique climate and diverse landscapes provide perfect growing conditions for gourmet coffee beans. Next you will be enchanted by the aromas of our roastery where you will discover how different roasting techniques affect the beans and the brew. We’ll reveal our roasting and packing secrets that enable us to deliver the best coffee from our Costa Rican plantation to your cup - anywhere in the world.
            </p>
            <p class=izquierda>
               Learn how experts “break the cup” by using techniques to taste or “cup” coffee to identify and grade the characteristics that qualify a gourmet coffee. Finally, surrounded by our outdoor tropical paradise and while listening to traditional music, you have an option of savoring a buffet lunch featuring local ingredients at our Don Prospero Restaurant.
            </p>
            <p class=izquierda>
              Visit our coffee bar, order and enjoy the coffee beverage of your dreams. Browse our factory store and gift shop and allow us to ship some souvenirs and fresh coffee back to your home where they will remind you of your Costa Rican tropical adventure.
            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $76 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>   Comfortable shoes, long pants, and camera.
            </p> 
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Bilingual Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Coffe/Coffee.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/Coffe/Coffee2.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`

}

function Vip(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML =`<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Vip City Bus</h2>
            </div>
            <p class=izquierda>
              Our unique sightseeing double decker bus will take you to downtown San Jose from your
              hotel to witness the city's main historical landmarks for an immersive and panoramic cultural
              experience and a better understanding of Costa Rica's evolution.
            </p>
            <p class=izquierda>
              Our favorite places to visit for a Guiad walk in San Jose include Costa Rica's cherished National Theater (lobby), Art Museum, Metropolitan Cathedral the old and authentic Central Market, the new and impressive National Stadium, an in-depth description of the National Monument, and the influential historical episode that took place at the Democracy Plaza.
            </p>
            <p class=izquierda>
               Our VIP City Bus tour will take you comfortably and safely through San Jose's narrow and busy streets driving by beautiful outdoor city attractions. The living city is our museum.
            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $76 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>  Comfortable shoes, long pants, y cámara
            </p> 
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Bilingual Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/VIP/Vip1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/VIP/Vip2.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`

}

function SeisEnUno(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML =`<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>6 in 1</h2>
            </div>
            <p class=izquierda>
              Rainforest Adventures, Costa Rica, offers you the most complete eco-adventure package of
              the country. This “6 in 1” includes attractive products to assure you an incredible and
              unforgettable natural experience. Enjoy alongside your family and friends of the spectacular
              Atlantic rainforest within Braulio Carrillo Park, by doing some activities like: aerial tram,
              zip-lines, adrena-line, butterflies and frogs garden, a Guiad walk and a hanging bridge tour.
            </p>
            <p class=izquierda>
              Start this rich experience with a true flight over the treetops in our comfortable aerial tram
              while an expert naturalist Guia describes hidden treasures of the forest
            </p>
            <p class=izquierda>
              Then you’ll experience real emotion with our zip line tour with 14 safe platforms and 10 cables,
               which include the thrill of the Adrena-line cable, of 2297 feet long and 55 km/h speed.
            </p>
            <p class=izquierda>
              Back to the
              ground you will feel relaxation during a Guiad walk through our natural trails with a visit
              over Molinete river’s hanging bridge and a fun and educational stop to our very own
              hummingbird, butterflies and frogs garden, where you can learn about different species of the
              region.

            </p>

            <p class="izquierda">
            <strong>Precio:</strong> $150 pp
            </p>

            <p class=izquierda>
            <strong>What to bring?</strong>  Walking shoes, binoculars, raincoat and camera.
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
        <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/6-in-1/6 in 1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/6-in-1/Canopy.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`

}

function Tocori(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML =`<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Mountain & Waterfall</h2>
            </div>
            <p class=izquierda>
             Let Don Gilberto and his family show you the real Costa Rica – on horseback! Once they pick you up the adventure in history and nature begins, 
             starting with the Quepos Indians and leads you through the changes of Manuel Antonio today.
            </p>
            <p class=izquierda>
              Enjoy learning about Costa Rica’s exotic plants and rare wildlife as you ride through the tropical jungle
               and private ecological reserve at Tocori, just minutes away from Manuel Antonio.
            </p>
            <p class=izquierda>
              After a relaxing hour-long ride on horseback through the tropical rain forest – with the pace determined by your comfort level and riding ability – 
              leave your horses on the trail as Don Gilberto or his daughter Dyala Guia you through the exotic plant and animal life on a nature walk. They will let you taste, 
              smell, touch and observe firsthand the real Costa Rican jungle. After indulging your mind and spirit with expert knowledge,
               take a refreshing dip in pristine natural mountain waters while being splashed on by two stunning waterfalls at Tocori.
            </p>
            

            <p class="izquierda">
            <strong>Precio:</strong> $125 pp
            </p>

            <p class=izquierda>
            <strong>What to bring?</strong>  Comfortable clothes, Long pants & Towel, a hat, Hiking boots or water shoes, Bathing suit (wear underneath),Sun Block & Insect Repellent
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Snacks and Juice</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
        <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="../img/mountain/mountain.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="../img/mountain/mount2.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`

}

function CincoEnUno(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML =`<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>5 in 1 Extreme adrenaline</h2>
            </div>
            <p class=izquierda>
             Get your thrills on this five-in-one eco-adventure combo package in Jacó. Soar above the canopy in an aerial tram,
              trek jungle trails, rock climb a 164-foot (50-meter) waterfall, glide on a 10-cable, 15-platform zipline, and dangle 
              from a hanging sky bridge. Learn about Costa Rica’s incredible tropical eco-system from the bilingual naturalist guiding 
              your journey and upgrade your experience to include lunch.
            </p>
            <p class=izquierda>
             Start this great trip by flying over the treetops in our aerial tram tour while you learn all about the nature that surrounds you,
              then soar above the clouds and fly over the treetops and immerse yourself in nature and it’s surroundings experiencing first hand 
              why Costa Rica is the best Adventure and Eco-tourism destination in the world.
              
            </p>
            <p class=izquierda>
            <strong>The tour include:Zip-lines (10 cables and 15 platforms), Highropes course,Aerial tram, Trekking (400mts)</strong>
              
            </p>
           

            <p class="izquierda">
            <strong>Precio:</strong> $65 pp
            </p>

            <p class=izquierda>
            <strong>What to bring?</strong>  Light Clothing, Closed Toes Shoes (Mandatory), Extra Clothes & Raincoat, Sun Block & Insect Repellent, Camera.
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>
          

          </div>
       </div>
    </div>
    
     <!--Slider-->
<div class="container">
  <div class="row">
    <div class="center">
      <div class="img-slider">
        <div class="slide active" id="slide">
          <img loading="lazy" src="../img/5in1/5in1.jpg" alt="" >
          
        </div>
        <div class="slide" id="slide">
          <img loading="lazy" src="../img/5in1/escalar.jpg" alt="" >
        </div>
        <div class="slide" id="slide">
          <img loading="lazy" src="../img/5in1/tram.jpg" alt="" >
        </div>
        <div class="slide" id="slide">
          <img loading="lazy" src="../img/5in1/zip.jpg" alt="" >
        </div>
       
        <div class="navigationSlider">
          <div class="btn2 active" id="btn"></div>
          <div class="btn2" id="btn"></div>
           <div class="btn2" id="btn"></div>
            <div class="btn2" id="btn"></div>
        </div>
      </div>
    </div>

  </div>

</div>`;

}

function TortugaJaco(){
    location.href = "Servicio.html#Aqui";
    taskForm.innerHTML =`<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Tortuga Island Jaco</h2>
            </div>
            <p class=izquierda>
             Descubre la magia de una isla de ensueño, Isla Tortuga. Está ubicado en el Golfo de Nicoya,
              Costa Rica, a 12 millas náuticas de Puntarenas, Isla Tortuga (llamada Tolinga por los indígenas locales) tiene un área
              de 120 hectáreas (296,52 acres) y permanece como bosque protegido que ha sido galardonado con la Bandera Azul Ecológica
              desde hace más de cinco años. Esta distinción se le otorga a las playas costarricenses que tengan sus aguas libres de contaminación.
               Por su característica geográfica, sus aguas son de color turquesa y son ideal para nadar.
            </p>
            <p class="izquierda">
            <strong>Nuestro Catamarán cuenta con tres ambientes para su disfrute:</strong>
            </p>
            <ul>
                <li><p class=izquierda> <strong>SALA PRINCIPAL: </strong>con aire acondicionado, bar y vestidores </p></li>
                <li><p class=izquierda> <strong>LA PROA: </strong>con una vista maravillosa de los paisajes </p></li>
                <li><p class=izquierda> <strong>CUBIERTA SUPERIOR: </strong>ideal para relajarse o refrescarse en el jacuzzi. </p></li>
            </ul>
            <br><hr>
            <p class="izquierda">
            <strong>The rate includes:</strong>
            </p>
            <ul>
                <li><p class=izquierda> Transporte ida y vuelta desde: Manuel Antonio, Jacó. </p></li>
                <li><p class=izquierda> Guías especializados bilingües: INGLÉS/ESPAÑOL (otro idioma consultar).</p></li>
                <li><p class=izquierda> Desayuno tipo snack (Debido a las restricciones sanitarias vigentes, debido al COVID19; 
                no se puede consumir en el bus; por tal motivo, será entregado minutos antes de llegar a nuestro muelle para que pueda degustarse cómodamente en el barco)</p></li>
                <li><p class=izquierda> Café y galletas por la mañana (en el barco)</p></li>
                <li><p class=izquierda> 90 minutos de viaje a bordo de nuestro CATAMARÁN</p></li>
                <li><p class=izquierda> De camino a la isla, te atenderemos con: frutas tropicales y ceviche de pescado</p></li>
                <li><p class=izquierda> Bebidas naturales ILIMITADAS / durante todo el recorrido</p></li>
                <li><p class=izquierda> Tres refrescos</p></li>
                <li><p class=izquierda> Almuerzo en la isla</p></li>
                <li><p class=izquierda> De regreso a Puntarenas te serviremos un postre que complementa el almuerzo y frutas tropicales</p></li>
                <li><p class=izquierda> Música de DJ</p></li>
                <li><p class=izquierda>Silla de playa/sombrilla de playa no incluidas</p></li>
                <li><p class=izquierda> Cinco horas de playa en Isla Tortuga</p></li>
                <li><p class=izquierda> Entretenimiento: Durante la estadía en la playa, podrá disfrutar del voleibol de playa, que está incluido en el paquete</p></li>
                <li><p class=izquierda> *Actividades con cargo extra: snorkel, banana, kayak, entre otras*</p></li>
            </ul>
            

            <p class="izquierda">
            <strong>Precio:</strong> $136 pp
            </p>

            <p clase=izquierda>
            <strong>¿Qué llevar?</strong> Traje de baño o shorts, ropa adicional, sandalias o zapatos cómodos, toalla, bloqueador solar, gorra, lentes de sol, cámara y dinero para actividades extra (opcional).
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    
    
    <!--Slider-->
<div class="container">
  <div class="row">
    <div class="center">
      <div class="img-slider">
        <div class="slide active" id="slide">
          <img loading="lazy" src="../img/Tortuga/Tortuga.jpg" alt="" >
          
        </div>
        <div class="slide" id="slide">
          <img loading="lazy" src="../img/Tortuga/Tortuga2.jpg" alt="" >
         
        </div>
       
        <div class="navigationSlider">
          <div class="btn2 active" id="btn"></div>
          <div class="btn2" id="btn"></div>
        </div>
      </div>
    </div>

  </div>

</div>
 `;
}


// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
    var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn2');
    let currentSlide = 1;
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 7000);
    }
    repeater();
}

// Javascript for image slider manual navigation
var manualNav = function(manual){
    var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn2');
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}








function inicio(){ //Se guarda tdo menos los tours
    trans.innerHTML = ``;
    taskForm.style.display = "block";
    taskForm.innerHTML =`   
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="text-center">
          <h2>One and Half day tours</h2>

            <p>
              <br>4% Value Added Taxes (VAT), must be summed up to all rates <br> From July 2021 to July 2022<br><strong>Click the name to see more information<strong>.
          </p>
        </div>
        <hr>
      </div>
    </div>
    <div class="content">
     
        <div class="grid">
          
            <figure class=" effect-zoe click " > 
              <div  onclick="SeisEnUno()">
                <img loading="lazy" class="imgres" src="../img/6-in-1/6 in 1.jpg" alt="img25" />
                <figcaption class="tour">
                  <h2> <span><a href="#Aqui"> 6 in 1</a></span></h2>
                  <p class="icon-links">$139 pp</p>
                </figcaption>
              </div>
            </figure>

            <figure class="tour effect-zoe click ">
              <div onclick="Vip()"> 
                <img loading="lazy" src="../img/city bus.jpg" alt="img26" />
                <figcaption>
                  <h2><span> <a href="#Aqui">Vip City Bus</a></span></h2>
                  <p class="icon-links">$69 pp</p>
                </figcaption>
              </div>
            </figure>
          
        </div>
      </div>
    </div>

    <div class="content">
      <div class="responsive">
        <div class="grid">

          <figure class="effect-zoe click">
            <div onclick="Cooffee()">
              <img loading="lazy" src="../img/coffe tour.jpg" alt="img25" />
              <figcaption>
                <h2> <span><a href="#Aqui">Coffee Tour</a></span></h2>
                <p class="icon-links">$59 - $55 pp</p>
              </figcaption>
            </div>
          </figure>

          <figure class="effect-zoe click">
            <div onclick="PDGS()">
              <img loading="lazy" src="../img/poas-volcano-doka-grecia-sarchi.jpg" alt="img26" />
              <figcaption>
                <h2><span> <a href="#Aqui">Poas,Doka,Grecia</a></span></h2>
                <p class="icon-links">$67 pp</p>
              </figcaption>
            </div>
          </figure>

        </div>
      </div>
    </div>

    <div class="content">
      <div class="responsive">
        <div class="grid">

          <figure class="effect-zoe click">
            <div onclick="ManuelAntonio()">
              <img loading="lazy" src="../img/Manuel Antonio na.jpg" alt="img25" />
              <figcaption>
                <h2> <span><a href="#Aqui">Manuel Antonio</a></span></h2>
                <p class="icon-links">$135 pp</p>
              </figcaption>
            </div>
          </figure>

          <figure class="effect-zoe click">
            <div onclick="IOL()">
              <img loading="lazy" src="../img/Irazu-Volcano-Orosi-Valley-Lankester-Garden.jpg" alt="img26" />
              <figcaption>
                <h2><span> <a href="#Aqui">Irazú,Orosi,Lankaster</a></span></h2>
                <p class="icon-links">$112 pp</p>
              </figcaption>
            </div>
          </figure>
         
        </div>
      </div>
    </div>

    <div class="content">
      <div class="responsive">
        <div class="grid">

          <figure class="effect-zoe click">
            <div onclick="TortugaIsland()">
              <img loading="lazy" src="../img/Isla tortuga.jpg" alt="img25" />
              <figcaption>
                <h2> <span><a href="#Aqui">Tortuga Island Cruise</a></span></h2>
                <p class="icon-links">$135 pp</p>
              </figcaption>
            </div>
          </figure>

          <figure class="effect-zoe click">
            <div onclick="Folk()">
              <img loading="lazy" src="../img/Dinner.jpg" alt="img26" />
              <figcaption>
                <h2><span> <a href="#Aqui">Folklore Dinner Show</a></span></h2>
                <p class="icon-links">$70 pp</p>
              </figcaption>
            </div>
          </figure>
          
        </div>
      </div>
    </div>

    <div class="content">
      <div class="responsive">
        <div class="grid">

          <figure class="effect-zoe click">
            <div onclick="tortuguero()">
              <img loading="lazy" src="../img/Tortuguero.jpg" alt="img25" />
              <figcaption>
                <h2> <span><a href="#Aqui"> Tortuguero NP</a></span></h2>
                <p class="icon-links">$140 pp</p>
              </figcaption>
            </div>
          </figure>

          <figure class="effect-zoe click">
            <div onclick="aereal()">
              <img loading="lazy" src="../img/Tram/Tram.jpg" alt="img26" />
              <figcaption>
                <h2><span> <a href="#Aqui">Rainforest Aerial Tram</a></span></h2>
                <p class="icon-links">$107 pp</p>
              </figcaption>
            </div>
          </figure>

        </div>
      </div>
    </div>

    <div class="content">
      <div class="responsive">
        <div class="grid">

          <figure class="effect-zoe click">
            <div onclick="at()">
              <img loading="lazy" src="../img/Arenal TB.jpg" alt="img25" />
              <figcaption>
                <h2> <span><a href="#Aqui"> Arenal & Hot springs</a></span></h2>
                <p class="icon-links">$162 pp</p>
              </figcaption>
            </div>
          </figure>

          <figure class="effect-zoe click">
            <div onclick="pacuare()">
              <img loading="lazy" src="../img/Pacuare/Pacuare.jpg" alt="img26" />
              <figcaption>
                <h2><span> <a href="#Aqui"> Rafting Pacuare River</a></span></h2>
                <p class="icon-links">$99 pp</p>
              </figcaption>
            </div>
          </figure>

        </div>
      </div>
    </div>

  <div class="content">
    <div class="responsive">
      <div class="grid">

        <figure class="effect-zoe click">
          <div onclick="combo()">
            <img loading="lazy" src="../img/combo.jpg" alt="img25" />
            <figcaption>
              <h2> <span><a href="#Aqui"> Combo Tour</a></span></h2>
              <p class="icon-links">$149 pp</p>
            </figcaption>
          </div> 
        </figure>

        <figure class="effect-zoe click">
          <div onclick="canopy()">
            <img loading="lazy" src="../img/Canopy/Canopy.jpg" alt="img26" />
            <figcaption>
              <h2><span> <a href="#Aqui">Rainforest canopy</a></span></h2>
              <p class="icon-links">$96 pp</p>
            </figcaption>
          </div>
        </figure>

      </div>
    </div>
  </div>
   <div class="text-center" ><a href="One%20Day%20Tours.pdf" class="btn btn-primary btn-lg" onclick="">More</a></div>
`;
}


trans.addEventListener('click' , (e)=>{ //Se hace un target para diferenciar de transport, private tour y shuttle
    const name = e.target.innerHTML;
    console.log(name);
    if(name == "Transporte Privado"){
        document.getElementById('PrivateTour').style.display = "none";
        document.getElementById('PrivateShuttle').style.display = "none";
        document.getElementById('PrivateTrans').style.display = "block";
    }else if(name == "Tours Privados"){
        document.getElementById('PrivateTour').style.display = "block";
        document.getElementById('PrivateShuttle').style.display = "none";
        document.getElementById('PrivateTrans').style.display = "none";
    }else if(name == "Shuttle"){
        document.getElementById('PrivateTour').style.display = "none";
        document.getElementById('PrivateShuttle').style.display = "block";
        document.getElementById('PrivateTrans').style.display = "none";
    }
})

function BuscarCoti(){
    console.log("Redirigiendo");
    window.location.href="/Coti/index.html#"+document.getElementById('name').value;
}
//hashchange
window.addEventListener('hashchange',async (e)=>{
    let nombre = await URlPage();
    const NombreService = nombre.split('#')[1];
    console.log("hash");

    if(NombreService != "Aqui"){
        inicio();
    }

});

function URlPage(){ //Async await para obtener el URL
    return new Promise((resolve,reject) =>{
        resolve(window.location.href);
    } )
}

async  function name(){
    let nombre = await URlPage(); //llamo para ver el URL
    const NombreService = nombre.split('#')[1]; //Uso lo que esta despues del # asi da una sensacion de php
    if(NombreService == "Exito"){
        alert("Email enviado exitosamente / Email sent successfully");
    }else if(NombreService == "6-in-1"){
        SeisEnUno();
    }else if(NombreService == "VIP"){
        Vip();
    }else if(NombreService == "coffee"){
        Cooffee();
    }else if(NombreService == "Combo"){
        combo();
    }else if(NombreService == "Transport"){
        Trasnport();//
    }else if(NombreService == "ToursSanJose"){
        inicio();
    }else if(NombreService == "ToursJaco"){
        inicio();
    }else if(NombreService == "RentaCar"){
        rentACar();
    }else if(NombreService == "Packages"){
        Pack();
    }else if(NombreService == "TortugaJaco"){
        TortugaJaco();
    }else if(NombreService == "CincoEnUno"){
        CincoEnUno();
    }else if(NombreService == "Tocori"){
        Tocori();
    }else{
        inicio();
    }

}

window.addEventListener('DOMContentLoaded', async (e) =>{	//DOMContentLoaded
    name(); //Cargar la pagina depende de que URL sea pues no se usa php
})