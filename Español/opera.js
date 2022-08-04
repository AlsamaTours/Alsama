const taskForm = document.getElementById('Tours');
const trans = document.getElementById('trans');

const select = document.getElementById('Serch');

let btnAbrirPopup = document.getElementById('btn-abrir-popup'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnCerrarpopup = document.getElementById('btn-cerrar-popup');

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
          <h2>Canopy en un Bosque lluvioso</h2>
          </div>
          <p clase=izquierda>
          Nuestro parque ofrece la tirolesa más segura de Costa Rica y atraviesa sin esfuerzo el dosel y sus jardines colgantes bajo la supervisión de nuestras guías experimentadas.
        </p>
        <p clase=izquierda>
         El emocionante tour de canopy lleva a los visitantes a volar varias veces a través del magnífico río Moliente.
          </p>
        <p clase=izquierda>
          Los senderos para caminar llevan a los visitantes a las profundidades del suelo de la selva tropical. Los pasajeros estarán atados con equipo seguro de alta calidad diseñado específicamente para este tour de canopy.
        </p>
        <p class="izquierda">
        <strong>Precio:</strong> $96 por persona
        </p>

          <p clase=izquierda>
          <strong>¿Qué llevar?</strong> Zapatos cómodos, pantalón largo, cámara.
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
          <h2> Volcán Poás, Hacienda Doka y Cascadas La Paz</h2>
          </div>
          <p clase=izquierda>
            A medida que ascendemos hacia el volcán, nos detendremos para una breve explicación de nuestro café. Hay un cambio notable en la temperatura y la vegetación, preparándonos para el placer de la exuberante selva nublada del Volcán Poás.
          </p>
          <p clase=izquierda>
            Caminaremos por un sendero hasta la hermosa Laguna de Botos. Continuaremos nuestro viaje hacia el Caribe, deteniéndonos para descubrir los Jardines de las Cataratas de La Paz.
            </p>
          <p clase=izquierda>
            En el parque natural donde caminaremos por muchos senderos espectaculares que nos llevarán a la Cascada de Magia Blanca, la más espectacular de la zona.

          </p>
           </p>
           <p class="izquierda">
          <strong>Precio:</strong> $149 por persona
          </p>

          <p clase=izquierda>
          <strong>¿Qué llevar?</strong> Zapatos cómodos, pantalón largo, cámara.
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
          <h2>Rafting Río Pacuare</h2>
          </div>
          <p clase=izquierda>
            En esta excursión tienes la oportunidad de estar en uno de los ríos más populares para este deporte, el río Pacuare. Durante el viaje disfrutarás de incomparables paisajes a lo largo del río.
          </p>
          <p clase=izquierda>
            El río Pacuare es uno de los cinco ríos más importantes del mundo por sus paisajes y rápidos rápidos. En este río tropical el viaje es pura magia.
            </p>
          <p clase=izquierda>
            Ubicado en el Caribe de Costa Rica, el río Pacuare confina la Montaña de Talamanca, hogar de los indios nativos de Cabécar y una inmensa variedad de flora y fauna. Una vez en el río, recorrerá 16 millas en el corazón de la selva tropical, observando cascadas, aves y la diversidad de la flora.
          </p>
          <p class="izquierda">
          <strong>Precio:</strong> $99 por persona
          </p>
          <p clase=izquierda>
          <strong>¿Qué llevar?</strong> Ropa extra, repelente, zapatos cómodos, toalla, suéter.
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
          <h2>Volcán Arenal y aguas termales</h2>
          </div>
          <p clase=izquierda>
            No es casualidad que el Volcán Arenal y Aguas Termales sea uno de los tours más populares del país. ¡Visitar una de las zonas más famosas de Costa Rica y relajarse en las aguas termales es una experiencia inolvidable!
          </p>
          <p clase=izquierda>
            Camino a Arenal, pasando por el pintoresco pueblo de La Fortuna, en un día despejado, tendrás la oportunidad de admirar el majestuoso coloso.
            </p>
          <p clase=izquierda>
            En las aguas termales cercanas al volcán, relájese en los jacuzzis con calefacción natural, llenos de minerales saludables, o disfrute de los servicios adicionales que ofrece el galardonado Tabacon Grand Spa & Thermal Resort o Baldi Hot Springs.
          </p>
          <p class="izquierda">
          <strong>Precio:</strong> $162 por persona
          </p>
          <p clase=izquierda>
          <strong>¿Qué llevar?</strong> Sombrero, bloqueador solar, traje de baño, toalla y cámara
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
          <h2>Teleférico de la selva tropical</h2>
          </div>
          <p clase=izquierda>
            Este teleférico del bosque lluvioso de San José viaja entre Grove Forest, el dosel y sus jardines, lo que le permite descubrir plantas y animales que generalmente están escondidos en las alturas del bosque.
          </p>
          <p clase=izquierda>
            Ubicado a solo 50 minutos de San José en la carretera a Limón, el Teleférico RainForest ofrece uno de los parques de ecoturismo e investigación más impresionantes y únicos del mundo. Los visitantes viajan literalmente 90 minutos entre la arboleda, el dosel y sus jardines descubriendo plantas y animales que suelen estar escondidos.
            </p>
          <p clase=izquierda>
            Este mundo poco conocido tiene una belleza increíble y una diversidad biológica extraordinaria. El Tour en “Góndola” (Tranvía Aéreo) es un “Remonte” modificado que cubre una distancia de 2.6 kilómetros a través de la selva tropical de Costa Rica. El recorrido dura aproximadamente 90 minutos. Los visitantes verán los diferentes niveles de una selva tropical, específicamente el nivel más difícil de alcanzar hasta hace poco y la parte del bosque menos conocida científicamente, el dosel (las copas de los árboles). Este curso es muy seguro y muy tranquilo, lo que permite a los visitantes escuchar los diferentes sonidos de la selva tropical.
          </p>
          <p class="izquierda">
          <strong>Precio:</strong> $107 por persona
          </p>
           <p clase=izquierda>
          <strong>¿Qué llevar?</strong> Zapatos para caminar, binoculares, impermeable y cámara.
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
          <h2>Parque Nacional Tortuguero</h2>
          </div>
          <p clase=izquierda>
            Esta es una expedición a través de la densa jungla de una de las regiones más bellas y escénicas de Costa Rica. Navega los exóticos canales del Parque Nacional Tortuguero, famoso por sus solitarias playas donde se lleva a cabo el desove de gigantescas tortugas verdes (julio a septiembre).
          </p>
          <p clase=izquierda>
            Tortuguero es uno de los sitios de anidación más importantes de la Tortuga Verde en el Hemisferio Occidental. Una red navegable de canales y lagunas que te permitirán estar en contacto directo con la gran variedad de flora y fauna del Parque Nacional de Tortuguero
            </p>
          <p clase=izquierda>
             Saldremos temprano y viajaremos a través del Parque Nacional Braulio Carrillo donde pasaremos montañas cubiertas por densos bosques así como numerosos ríos y cascadas hasta llegar al Caribe de Costa Rica. Aquí, cruzaremos las plantaciones de banano para abordar el bote para navegar hacia el Parque Nacional Tortuguero.
          </p>
          <p class="izquierda">
          <strong>Precio:</strong> $140 por persona
          </p>
          <p clase=izquierda>
          <strong>¿Qué llevar?</strong> Zapatos cómodos, repelente, gorra, binoculares, ropa extra y cámara
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
          <h2>Cena Espectáculo Folclórico</h2>
          </div>
          <p clase=izquierda>
            Hogar del espectáculo Tierra Típica. Ram Luna se alza sobre las montañas que dominan el Valle Central. Desde este punto de vista único, puede admirar las auspiciosas vistas panorámicas al atardecer y luego disfrutar del brillo de las luces que emanan de la capital.
          </p>
          <p clase=izquierda>
             Además, seremos obsequiados con una muestra del folclor costarricense a través de los diversos bailes típicos y música de marimba, mientras disfrutamos de una deliciosa cena buffet con un menú que refleja los platos típicos de la región.
          </p>
          <p clase=izquierda>
             Durante nuestra visita, los artesanos locales exhibirán sus creaciones únicas y exquisitas que representan las diferentes regiones del país. La velada culmina con el tradicional espectáculo de disfraces y un animado espectáculo de fuegos artificiales. ¡No te pierdas esta experiencia inolvidable!
          </p>
          <p class="izquierda">
          <strong>Precio:</strong> $70 por persona
          </p>
        <p clase=izquierda>
          <strong>¿Qué llevar?</strong> Zapatos cómodos, pantalón largo y cámara.
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
          <h2>Crucero Isla Tortuga</h2>
          </div>
          <p clase=izquierda>
            Aborde un bote en Puntarenas y disfrute del Golfo de Nicoya, un hermoso archipiélago y aves marinas, y un gran crucero hasta llegar a Isla Tortuga, conocida por su inmaculada playa de arena blanca y aguas turquesas, una parada perfecta para nadar y bucear.
          </p>
          <p clase=izquierda>
             Permanecerás en la isla por aproximadamente cuatro horas donde podrás disfrutar de diferentes actividades como canopy, caminatas por senderos, kayak, snorkel, nado, deportes de playa o simplemente relajarte y disfrutar de la playa mientras la tripulación prepara un almuerzo de estilo exquisito.
          </p>
          <p clase=izquierda>
             Incluye: Transporte, Guía, desayuno ligero, crucero, frutas tropicales, refrigerios, música en vivo y Almuerzo. Traer: ropa ligera, traje de baño, toalla, bloqueador solar, sombrero y cámara.
          </p>
          <p class="izquierda">
          <strong>Precio:</strong> $135 por persona
          </p>
          <p clase=izquierda>
          <strong>¿Qué llevar?</strong> Sombrero, bloqueador solar, traje de baño, toalla y cámara
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
          <h2>Volcán Irazú, Valle de Orosi y Jardín Lankester</h2>
          </div>
          <p clase=izquierda>
            Esta excursión ofrece la oportunidad de visitar la Ciudad de Cartago y su Basílica de Los Ángeles, para descubrir el volcán más alto de Costa Rica a 11000 pies sobre el nivel del mar y su asombroso parecido con la superficie de la luna.
          </p>
          <p clase=izquierda>
             luego descienda al histórico y colorido Valle de Orosi donde tendrá la oportunidad de visitar la iglesia más antigua de Costa Rica, la iglesia colonial de Orosi y su pueblo.
          </p>
          <p class="izquierda">
          <strong>Precio:</strong> $112 por persona
          </p>
         <p clase=izquierda>
          <strong>¿Qué llevar?</strong> Zapatos para caminar, binoculares, impermeable y cámara.
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
          <h2>Parque Nacional Manuel Antonio</h2>
          </div>
          <p clase=izquierda>
            Este parque nacional es considerado uno de los más bellos del país. Es una combinación de una paradisíaca playa de aguas cristalinas con arrecifes de coral, bordeada por una exuberante vegetación y los encantos naturales del bosque húmedo tropical.
          </p>
          <p clase=izquierda>
             Sus playas se cuentan entre las mejores del país, donde el snorkel y el surf son muy populares. En el camino a Manuel Antonio a lo largo de la línea costera, disfrutará de hermosas vistas y cruzará plantaciones de palma africana y pintorescos pueblos a lo largo de la costa del Pacífico, hasta llegar al puerto de Quepos y unos minutos después el Parque Nacional.
          </p>
          <p clase=izquierda>
            A nuestra llegada haremos una caminata hasta el parque, cruzando un arroyo para acceder al parque, ya que este parque está cerrado a los vehículos. Una vez en el parque, es posible simplemente disfrutar de la playa, tomar un baño de sol o realizar una caminata por la naturaleza a través de los senderos del parque, lo que le permitirá observar la abundante flora y fauna del parque, especialmente varias especies de monos, iguanas, pájaros, y tal vez, el perezoso de tres dedos.
          </p>
          <p clase=izquierda>
            Uno de los senderos bordea Punta Catedral desde donde la vista del parque y el mar es espectacular. En nuestro camino de regreso a San José, nos detendremos en Molas Souvenir, donde tendrá la oportunidad de obtener las mejores artes costarricenses.

          </p>
          <p class="izquierda">
          <strong>Precio:</strong> $135 por persona
          </p>
           <p clase=izquierda>
          <strong>¿Qué llevar?</strong> Gorro, bloqueador solar, traje de baño, toalla y cámara.
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
          <h2>Volcán Poás, Doka Estates, Grecia y Sarchí</h2>
          </div>
          <p clase=izquierda>
            Admira el imponente Volcán Poás a una altura de 8.884 pies sobre el nivel del mar. Visite una plantación de café única y la ciudad histórica de Sarchí en esta emocionante excursión de un día.
          </p>
          <p clase=izquierda>
            Nuestra primera parada es el Parque Nacional Volcán Poás, donde disfrutará de magníficas vistas del Valle Central y del enorme cráter del volcán, ¡considerado uno de los más grandes del mundo! A continuación, visitaremos las hermosas plantaciones de café en Doka Estate.
          </p>
          <p clase=izquierda>
             Será guiado por la finca, visitando las plantaciones y el "beneficio" o beneficio de café de 96 años. Aprenda cómo los mejores granos de café se convierten en una fabulosa taza de café antes de disfrutar de un Almuerzo costarricense regional. Continúe hasta el pueblo de Sarchí, hogar de los artesanos más experimentados de Costa Rica.
          </p>
          <p clase=izquierda>
            Aquí, vea de primera mano cómo se construyen y pintan las típicas carretas de bueyes, ¡disfrute comprando los hermosos recuerdos de madera del lugar!
          </p>
          <p class="izquierda">
          <strong>Precio:</strong> $112 por persona
          </p>
          <p clase=izquierda>
          <strong>¿Qué llevar?</strong> Zapatos cómodos, pantalón largo, cámara.
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
              Imagínese seguir el viaje de un grano de café desde la plantación hasta la planta de procesamiento y una taza de café gourmet, nuestros expertos lo guían a través del ciclo de vida del café gourmet. Comience en nuestro vivero y siga los granos desde su ciclo de crecimiento a través de una cuidadosa recolección y selección de los mejores granos.
            </p>
            <p class=izquierda>
              Conozca cómo el clima único y los diversos paisajes de Costa Rica brindan las condiciones de cultivo perfectas para los granos de café gourmet. A continuación, quedará encantado con los aromas de nuestra tostaduría, donde descubrirá cómo las diferentes técnicas de tostado afectan los granos y la infusión. Revelaremos nuestros secretos de tostado y empaque que nos permiten entregar el mejor café de nuestra plantación de Costa Rica a su taza, en cualquier parte del mundo.
            </p>
            <p class=izquierda>
Aprenda cómo los expertos “rompen la taza” usando técnicas para probar o “tazar” el café para identificar y calificar las características que califican un café gourmet. Finalmente, rodeado de nuestro paraíso tropical al aire libre y mientras escucha música tradicional, tiene la opción de saborear un almuerzo buffet con ingredientes locales en nuestro Restaurante Don Próspero.
            </p>
            <p class=izquierda>
Visita nuestra cafetería, pide y disfruta de la bebida de café de tus sueños. Explore nuestra tienda de fábrica y tienda de regalos y permítanos enviarle algunos recuerdos y café recién hecho a su hogar, donde le recordarán su aventura tropical en Costa Rica.
            </p>
            <p class="izquierda">
            <strong>Precio:</strong> $76 pp
            </p>
            <p class=izquierda>
            <strong>¿Qué llevar?</strong
            > Zapatos cómodos, pantalón largo y cámara. </p>

          
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
          <h2>Autobús Urbano VIP</h2>
          </div>
          <p clase=izquierda>
            Nuestro exclusivo autobús turístico de dos pisos lo llevará al centro de San José desde su
            hotel para presenciar los principales hitos históricos de la ciudad para una inmersión cultural y panorámica
            experiencia y una mejor comprensión de la evolución de Costa Rica.
          </p>
          <p clase=izquierda>
            Nuestros lugares favoritos para visitar para una caminata Guiad en San José incluyen el preciado Teatro Nacional de Costa Rica (vestíbulo), el Museo de Arte, la Catedral Metropolitana, el antiguo y auténtico Mercado Central, el nuevo e impresionante Estadio Nacional, una descripción detallada del Monumento Nacional. , y el influyente episodio histórico ocurrido en la Plaza de la Democracia.
          </p>
          <p clase=izquierda>
             Nuestro recorrido en autobús urbano VIP lo llevará de manera cómoda y segura a través de las calles estrechas y concurridas de San José, conduciendo por hermosas atracciones al aire libre de la ciudad. La ciudad viva es nuestro museo.
          </p>
          <p class="izquierda">
          <strong>Precio:</strong> $76 por persona
          </p>
          <p clase=izquierda>
          <strong>¿Qué llevar?</strong> Zapatos cómodos, pantalón largo y cámara
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
          <h2>6 en 1</h2>
          </div>
          <p clase=izquierda>
            Rainforest Adventures, Costa Rica, le ofrece el paquete de ecoaventura más completo de
            el país. Este “6 en 1” incluye atractivos productos para asegurarte una increíble y
            experiencia natural inolvidable. Disfruta junto a tu familia y amigos de lo espectacular
            Selva Atlántica dentro del Parque Braulio Carrillo, realizando algunas actividades como: teleférico,
            tirolinas, adrenalina, jardín de mariposas y ranas, paseo guiado y recorrido por puentes colgantes.
          </p>
          <p clase=izquierda>
            Comienza esta rica experiencia con un verdadero vuelo sobre las copas de los árboles en nuestro cómodo teleférico
            mientras un experto naturalista Guia describe los tesoros escondidos del bosque
          </p>
          <p clase=izquierda>
            Entonces vivirás verdaderas emociones con nuestro recorrido en tirolesa con 14 plataformas seguras y 10 cables,
             que incluyen la emoción del cable Adrena-line, de 2297 pies de largo y 55 km/h de velocidad.
          </p>
          <p clase=izquierda>
            De vuelta a
            tierra sentirás relajación durante un paseo guiado por nuestros senderos naturales con una visita
            sobre el puente colgante del río Molinete y una parada divertida y educativa para nuestro propio
            jardín de colibríes, mariposas y ranas, donde se puede aprender sobre diferentes especies del
            región.

          </p>

            <p class="izquierda">
            <strong>Precio:</strong> $150 pp
            </p>

            <p clase=izquierda>
            <strong>¿Qué llevar?</strong> Zapatos para caminar, binoculares, impermeable y cámara.
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
          <h2>Montaña y Cascada</h2>
          </div>
          <p clase=izquierda>
           Deje que Don Gilberto y su familia le muestren la verdadera Costa Rica, ¡a caballo! Una vez que te recogen comienza la aventura en la historia y la naturaleza,
           comenzando con los indios de Quepos y lo lleva a través de los cambios de Manuel Antonio hoy.
          </p>
          <p clase=izquierda>
            Disfrute aprendiendo sobre las plantas exóticas y la fauna rara de Costa Rica mientras recorre la jungla tropical
             y reserva ecológica privada en Tocori, a pocos minutos de Manuel Antonio.
          </p>
          <p clase=izquierda>
            Después de un relajante paseo a caballo de una hora a través de la selva tropical, con el ritmo determinado por su nivel de comodidad y habilidad para montar,
            deje sus caballos en el camino como Don Gilberto o su hija Dyala le guiarán a través de la exótica vida vegetal y animal en un paseo por la naturaleza. te dejarán saborear,
            huele, toca y observa de primera mano la verdadera selva costarricense. Después de complacer su mente y espíritu con conocimiento experto,
             date un refrescante chapuzón en las prístinas aguas naturales de la montaña mientras te salpican dos impresionantes cascadas en Tocori.
          </p>
          

          <p class="izquierda">
          <strong>Precio:</strong> $125 por persona
          </p>

          <p clase=izquierda>
          <strong>¿Qué traer?</strong> Ropa cómoda, pantalones largos y toalla, sombrero, botas de montaña o zapatos para el agua, traje de baño (usar debajo), bloqueador solar y repelente de insectos
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
            <p clase=izquierda>
            Obtenga sus emociones en este paquete combinado de ecoaventura cinco en uno en Jacó. Vuela por encima del dosel en un tranvía aéreo,
             camine por los senderos de la jungla, escale una cascada de 50 metros (164 pies), deslícese en una tirolesa de 10 cables y 15 plataformas y cuelgue
             desde un puente aéreo colgante. Aprenda sobre el increíble ecosistema tropical de Costa Rica con el guía naturalista bilingüe
             su viaje y mejore su experiencia para incluir el almuerzo.
           </p>
           <p clase=izquierda>
            Comienza este gran viaje volando sobre las copas de los árboles en nuestro recorrido en teleférico mientras aprendes todo sobre la naturaleza que te rodea,
             luego vuele por encima de las nubes y vuele sobre las copas de los árboles y sumérjase en la naturaleza y sus alrededores experimentando de primera mano
             por qué Costa Rica es el mejor destino de Aventura y Ecoturismo del mundo.
             
           </p>
           <p clase=izquierda>
           <strong>El tour incluye: Tirolinas (10 cables y 15 plataformas), Circuito de cuerdas altas, Teleférico, Trekking (400mts)</strong>
             
           </p>
          

           <p class="izquierda">
           <strong>Precio:</strong> $65 por persona
           </p>

           <p clase=izquierda>
           <strong>¿Qué llevar?</strong> Ropa ligera, zapatos cerrados (obligatorio), ropa extra e impermeable, bloqueador solar y repelente de insectos, cámara.
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



function abrir() {
	overlay.classList.add('active');
	popup.classList.add('active');
};

btnCerrarpopup.addEventListener('click', function() {
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

function filter(){
    const filter = document.getElementById('filter');
    if(filter.style.display == 'none'){
      filter.style.display = 'block';
    }else{
      filter.style.display = 'none';
    }

    const menu = document.querySelectorAll('filterMenu');
}

function ToursBtn(){
  location.href = "#aqui";
  inicio();
}
function SanJoseToursPDF(){
  window.location.href= "../One%20Day%20Tours.pdf";
}

function JacoToursPDF(){
  window.location.href= "../Jaco%20One%20Day%20Tours.pdf";
}




function inicio(){ //Se guarda tdo menos los tours
  trans.innerHTML = ``;
  taskForm.style.display = "block";
  taskForm.innerHTML =`               
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <div class="text-center">
      <h2>Excursiones de un día y medio</h2>

          <p>
            <br>4% de Impuesto al Valor Agregado (IVA), debe sumarse a todas las tarifas <br> De julio de 2021 a julio de 2022<br><strong>Haga clic en el nombre para ver más información<strong>.
        </p>
      </div>
      <hr>
    </div>
  </div>

  <div class="text-center" >
      <a  class="btn btn-primary btn-lg more" onclick="Jaco()">Jaco</a>
      <a  class="btn btn-primary btn-lg more" onclick="Sanjose()">San jose</a>
  </div>
  
  <ul class="cards">
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--coffe "></div>
        <div class="card__content">
          <div class="card__title">Coffee tour</div>
          <p class="card__text">
          Imagínese seguir el viaje de un grano de café desde la plantación hasta la planta de procesamiento hasta una taza de café gourmet, nuestros expertos lo guían a través del ciclo de vida del café gourmet.  </p>
          <button onclick="Cooffee()" class="btn btn--block card__btn" >Mas informacion</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--flowers "></div>
        <div class="card__content">
          <div class="card__title">6 in 1</div>
          <p class="card__text">Combine seis actividades populares en la selva tropical en un solo día repleto de aventuras en este tour al Parque Nacional Braulio Carrillo desde San José. Vuela por tirolinas sobre el dosel de la selva tropical,
             Visite un terrario y un jardín de mariposas, camine por senderos naturales y más, todo con transporte de ida y vuelta sin complicaciones desde su hotel en San José y un almuerzo típico costarricense para seguir adelante.
          </p>
          <button onclick="SeisEnUno()" class="btn btn--block card__btn" >Mas informacion</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--Vip "></div>
        <div class="card__content">
          <div class="card__title">VIP City Bus</div>
          <p class="card__text">Nuestro exclusivo autobús turístico de dos pisos lo llevará al centro de San José desde su hotel para presenciar los principales lugares de interés histórico de la ciudad en una experiencia inmersiva y
          experiencia cultural panorámica y una mejor comprensión de la evolución de Costa Rica.
          </p>
          <button onclick="Vip()" class="btn btn--block card__btn" >Mas informacion</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--PDGS "></div>
        <div class="card__content">
          <div class="card__title">Poas,Doka,Grecia</div>
          <p class="card__text">Admire the imposing Poás Volcano at a height 8.884 ft above sea level. Visit a unique coffee plantation and the historic city of Sarchí on this exciting day trip
          </p>
          <button onclick="PDGS()" class="btn btn--block card__btn" >Mas informacion</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--ManuelAntonio "></div>
        <div class="card__content">
          <div class="card__title">Manuel Antonio</div>
          <p class="card__text">Este parque nacional es considerado uno de los más bellos del país. Es una combinación de una playa paradisíaca de aguas cristalinas con arrecifes de coral,
          bordeado por una exuberante vegetación y los encantos naturales del bosque húmedo tropical.
        </p>
          <button onclick="ManuelAntonio()" class="btn btn--block card__btn" >Mas informacion</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--IOL "></div>
        <div class="card__content">
          <div class="card__title">Irazú,Orosi,Lankaster</div>
          <p class="card__text">Esta excursión ofrece la oportunidad de visitar la Ciudad de Cartago y su Basílica de Los Ángeles, para descubrir el volcán más alto de Costa Rica en
          11000 pies sobre el nivel del mar y su asombroso parecido con la superficie de la luna.
       </p>
          <button onclick="IOL()" class="btn btn--block card__btn" >Mas informacion</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--Totuga "></div>
        <div class="card__content">
          <div class="card__title">Tortuga Island Cruise</div>
          <p class="card__text">Aborde un bote en Puntarenas y disfrute del Golfo de Nicoya, un hermoso archipiélago y aves marinas, y un gran crucero hasta llegar a Isla Tortuga, conocida por su inmaculada playa de arena blanca y aguas turquesas. una parada perfecta para nadar y bucear.
           </p>
          <button onclick="TortugaIsland()" class="btn btn--block card__btn" >Mas informacion</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--Folk "></div>
        <div class="card__content">
          <div class="card__title">Folklore Dinner Show</div>
          <p class="card__text">Hogar del espectáculo Tierra Típica. Ram Luna se alza sobre las montañas que dominan el Valle Central. Desde este punto de vista único, puede admirar las auspiciosas vistas panorámicas al atardecer y luego disfrutar del brillo de las luces que emanan de la capital.
           </p>
          <button onclick="Folk()" class="btn btn--block card__btn" >Mas informacion</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--Tortuguero "></div>
        <div class="card__content">
          <div class="card__title">Tortuguero NP</div>
          <p class="card__text">Esta es una expedición a través de la densa jungla de una de las regiones más bellas y escénicas de Costa Rica. Navega los exóticos canales del Parque Nacional Tortuguero, famoso por sus solitarias playas donde se lleva a cabo el desove de gigantescas tortugas verdes (julio a septiembre).
           </p>
          <button onclick="tortuguero()" class="btn btn--block card__btn" >Mas informacion</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--Aereal "></div>
        <div class="card__content">
          <div class="card__title">Rainforest Aerial Tram</div>
          <p class="card__text">Este teleférico del bosque lluvioso de San José viaja entre Grove Forest, el dosel y sus jardines, lo que le permite descubrir plantas y animales que generalmente están escondidos en las alturas del bosque.
           </p>
          <button onclick="aereal()" class="btn btn--block card__btn" >Mas informacion</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--AT "></div>
        <div class="card__content">
          <div class="card__title">Aguas termales Arenal</div>
          <p class="card__text">No es casualidad que el Volcán Arenal y Aguas Termales sea uno de los tours más populares del país. ¡Visitar una de las zonas más famosas de Costa Rica y relajarse en las aguas termales es una experiencia inolvidable!
           </p>
          <button onclick="at()" class="btn btn--block card__btn" >Mas informacion</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
        <div class="card">
          <div class="card__image card__image--Pacuare "></div>
          <div class="card__content">
            <div class="card__title">Water Rafting Pacuare River</div>
            <p class="card__text">En esta excursión tienes la oportunidad de estar en uno de los ríos más populares para este deporte, el río Pacuare. Durante el trayecto disfrutarás de incomparables paisajes a lo largo del río.</p>
            <button onclick="pacuare()" class="btn btn--block card__btn" >Mas informacion</button>
          </div>
        </div>
      </li>
      <li class="cards__item SJ">
        <div class="card">
          <div class="card__image card__image--Combo "></div>
          <div class="card__content">
            <div class="card__title">Combo Tour</div>
            <p class="card__text">A medida que ascendemos hacia el volcán, nos detendremos para una breve explicación de nuestro café. Hay un cambio notable en la temperatura y la vegetación, preparándonos para el placer de la exuberante selva nublada del Volcán Poás.</p>
            <button onclick="combo()" class="btn btn--block card__btn" >Mas informacion</button>
          </div>
        </div>
      </li>
      <li class="cards__item SJ">
        <div class="card">
          <div class="card__image card__image--Canopy "></div>
          <div class="card__content">
            <div class="card__title">Rainforest Canopy</div>
            <p class="card__text">Nuestro parque ofrece la tirolesa más segura de Costa Rica y atraviesa sin esfuerzo el dosel y sus jardines colgantes bajo la supervisión de nuestros guías experimentados.</p>
            <button onclick="canopy()" class="btn btn--block card__btn" >Mas informacion</button>
          </div>
        </div>
      </li>
      <li class="cards__item JC">
      <div class="card">
        <div class="card__image card__image--fiveinone "></div>
        <div class="card__content">
          <div class="card__title">EXTREME ADRENALINE</div>
          <p class="card__text">Comienza este gran viaje volando sobre las copas de los árboles en nuestro recorrido en teleférico mientras aprendes todo sobre la naturaleza que te rodea, luego vuela por encima de las nubes y vuela sobre las copas de los árboles y sumérgete en la naturaleza y es entorno experimentando de primera mano por qué Costa Rica es el mejor destino de Aventura y Ecoturismo del mundo.</p>
          <button onclick="CincoEnUno()" class="btn btn--block card__btn" >Mas informacion</button>
        </div>
      </div>
    </li>
    <li class="cards__item JC">
    <div class="card">
      <div class="card__image card__image--Jaco "></div>
      <div class="card__content">
        <div class="card__title">TORTUGA ISLAND from jaco</div>
        <p class="card__text">Descubre la magia de una isla de ensueño, Isla Tortuga (Isla Tortuga). Se encuentra en el Golfo de Nicoya, Costa Rica, a 12 millas náuticas de Puntarenas</p>
        <button onclick="TortugaJaco()" class="btn btn--block card__btn" >Mas informacion</button>
      </div>
    </div>
  </li>
  <li class="cards__item JC">
  <div class="card">
    <div class="card__image card__image--tocori "></div>
    <div class="card__content">
      <div class="card__title">MOUNTAIN & WATERFALL</div>
      <p class="card__text">Deje que Don Gilberto y su familia le muestren la verdadera Costa Rica, ¡a caballo! Una vez que lo recogen, comienza la aventura en la historia y la naturaleza, comenzando con los indios de Quepos y lo lleva a través de los cambios de Manuel Antonio hoy</p>
      <button onclick="Tocori()" class="btn btn--block card__btn" >Mas informacion</button>
    </div>
  </div>
</li>
  </ul>












 <div class="text-center" ><a onclick="abrir()" class="btn btn-primary btn-lg more" onclick="">mas</a></div>
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

function Jaco(){
  const TrJc = document.querySelectorAll('.JC');
  for (const elem of TrJc) {
    elem.style.display = 'block';
  }
  const TrSJ = document.querySelectorAll('.SJ');
  for (const elem of TrSJ) {
    elem.style.display = 'none';
  }
}
function Sanjose(){
  const TrJc = document.querySelectorAll('.JC');
  for (const elem of TrJc) {
    elem.style.display = 'none';
  }
  const TrSJ = document.querySelectorAll('.SJ');
  for (const elem of TrSJ) {
    elem.style.display = 'block';
  }
}