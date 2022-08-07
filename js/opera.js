const taskForm = document.getElementById('Tours');
const trans = document.getElementById('trans');

const select = document.getElementById('Serch');
const delay = 3000; //ms

let btnAbrirPopup = document.getElementById('btn-abrir-popup'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnCerrarpopup = document.getElementById('btn-cerrar-popup');

function Pack(){
  location.href = "#aqui";
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

        <h2>Let us create a personalized itinerary for you </h2>
        <p>Let us know the details and we will contact you soon </p>
      </div>


      <form action="https://formsubmit.co/info@thewanderlustcr.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://www.thewanderlustcr.com/#Exito">
        <div class="form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:3" data-msg="Please enter at least 4 chars"required />
              <div class="validation"></div>
            </div>
        <div class="form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required/>
              <div class="validation"></div>
            </div>
         <div class="form-group">
              <input type="text" class="form-control" name="Pick" id="Pick" placeholder="Pick up" data-rule="minlen:4"  data-msg="Please enter a valid Pick up place" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" name="Days" id="Drop" placeholder="How long would you stay with us?" data-msg="Please enter a valid number" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="date" class="form-control" name="Date" id="start" data-rule="date"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" name="number" id="number" placeholder="Pax" data-rule="numer"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <textarea type="text" class="form-control" name="Description" id="Description" placeholder="Wich activities you prefer to do" data-rule="minlen:4"  data-msg="Please enter a valid description" required></textarea>
              <div class="validation"></div>
            </div>

       <div class="text-center" id="confirmacion"><button type="submit" class="btn btn-primary btn-lg">send</button></div>
    </form>
      <!--/.row-->
    </div>
    <!--/.container-->
  </section>`;
  document.getElementById("start").setAttribute("min", today);
    document.getElementById("start").setAttribute("value", today);
}

function rentACar(){
  location.href = "#aqui";
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

        <h2>Find your ideal car </h2>
        <p>Let us know the details and we will contact you soon </p>
      </div>


      <form action="https://formsubmit.co/info@thewanderlustcr.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://www.thewanderlustcr.com/#Exito">
        <div class="form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:3" data-msg="Please enter at least 4 chars"required />
              <div class="validation"></div>
            </div>
        <div class="form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required/>
              <div class="validation"></div>
            </div>
         <div class="form-group">
              <input type="text" class="form-control" name="Pick" id="Pick" placeholder="Pick up" data-rule="minlen:4"  data-msg="Please enter a valid Pick up place" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="Drop" id="Drop" placeholder="Automatic / Manual or Both " data-rule="minlen:3"   data-msg="Please enter a valid Drop off place" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="date" class="form-control" name="Date" id="start"  data-rule="date"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" name="number" id="number" placeholder="Pax" data-rule="numer"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>

       <div class="text-center" id="confirmacion"><button type="submit" class="btn btn-primary btn-lg">send</button></div>
    </form>
      <!--/.row-->
    </div>
    <!--/.container-->
  </section>`;
  document.getElementById("start").setAttribute("min", today);
    document.getElementById("start").setAttribute("value", today);
}

function Trasnport(){
  location.href = "#aqui";
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
       <a class="btn btn-primary btn-lg" href="javascript:void(0); ">Private Transport</a>
       <a class="btn btn-primary btn-lg" href="javascript:void(0);">Private Tours</a>
       <a class="btn btn-primary btn-lg" href="javascript:void(0);">Shuttle</a>
    </div>

    <div id="PrivateTour">
      <div id="PrivateTour">
      <div class="Tit-Shut">
      <h2>Private Tours</h2>
      <p>4% Value Added Taxes (VAT), must be summed up to all rates from July 2021 to July 2022 </p> 
      <p>H1 max 5 pax  -  Hiace max 10 pax </p> 
    </div>
    
    <table class="table table-bordered border-primary personalizada">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Details</th>
      <th scope="col">Price H1</th>
      <th scope="col">Price Hiace</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>One day San Jose - Jaco</td>
      <td>Maximum 6 hours of waiting</td>
      <td>$214</td>
      <td>$243</td>
    </tr>
    <tr>
      <td>One day San Jose - Manuel Antonio</td>
      <td>Maximum 6 hours of waiting</td>
      <td>$271</td>
      <td>$300</td>
    </tr> 
     <tr>
      <td>One day San Jose - Arenal</td>
      <td>Maximum 6 hours of waiting</td>
      <td>$257</td>
      <td>$286</td>
    </tr>
     <tr>
      <td>One day San Jose - Monteverde</td>
      <td>Maximum 6 hours of waiting</td>
      <td>$279</td>
      <td>$307</td>
    </tr>
    <tr>
      <td>San Jose - Volcan Poas Tour</td>
      <td>Entrance not include</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>San Jose - Doka - Volcan Poas Tour</td>
      <td>Entrance not include</td>
      <td>$157</td>
      <td>$186</td>
    </tr>
    <tr>
      <td>San Jose - Doka - Volcan Poas - La Paz Tour</td>
      <td>Entrance not include</td>
      <td>$170</td>
      <td>$200</td>
    </tr>
    <tr>
      <td>San Jose - Volcan Irazu</td>
      <td>Entrance not include</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>San Jose - Volcan Irazu - Orosi & Lankaster</td>
      <td>Entrance not include</td>
      <td>$193</td>
      <td>$221</td>
    </tr>
    <tr>
      <td>San Jose - Volcan Irazu - ruins of Cartago & Baisilica</td>
      <td>Entrance not include</td>
      <td>$157</td>
      <td>$186</td>
    </tr>
    <tr>
      <td>Dinner in San Jose</td>
      <td>3 hours of waiting</td>
      <td>$86</td>
      <td>$114</td>
    </tr>
    <tr>
      <td>San Jose City Tour</td>
      <td>Maximum 4 hours </td>
      <td>$143</td>
      <td>$170</td>
    </tr>



  </tbody>
</table>
<a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
  <br>
  
    </div>
    </div>

    <div id="PrivateShuttle">
      
  <section id="contact-page">
    <div class="container">
      <div class="center">

        <h2>Reserve the shuttle</h2>
        <p>Let us know the details and we will contact you soon </p>
      </div>


      <form action="https://formsubmit.co/info@thewanderlustcr.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://www.thewanderlustcr.com/#Exito">
        <div class="form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:3" data-msg="Please enter at least 4 chars"required />
              <div class="validation"></div>
            </div>
        <div class="form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required/>
              <div class="validation"></div>
            </div>
         <div class="form-group">
              <input type="text" class="form-control" name="Pick" id="Pick" placeholder="Pick up" data-rule="minlen:4"  data-msg="Please enter a valid Pick up place" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="Drop" id="Drop" placeholder="Drop off" data-rule="minlen:4"   data-msg="Please enter a valid Drop off place" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="date" class="form-control" name="Date" id="start" placeholder="Drop off" data-rule="date"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" name="number" id="number" placeholder="Pax" data-rule="numer"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>

       <div class="text-center" id="confirmacion"><button type="submit" class="btn btn-primary btn-lg">send</button></div>
    </form>
      <!--/.row-->
    </div>
    <!--/.container-->
  </section>
<div class="Terms-cond">
    <hr>
      <h2>Terms & Conditions</h2>
      <ul>
        <li>1 carry-on baggage</li>
        <li>1 bag</li>
        <li>Extra bag $10</li>
        <li>Surfboard $10</li>
        <li>When you pick up at the airport you have to go to the delimalinche restaurant.</li>
      </ul>
      <hr>
            <h2>At the hotels in the lobby</h2>
      <ul>
        <li>There is a 15 minutes of posible delay for pick up at other hotels.</li>
        <li>Reservations can be opened with a minimum of 2 pax.</li>
        <li>But when they are less it is better to ask</li>
        <li>If the service was opened by the site or a hotel we can sell it to you.</li>
      </ul>
      <hr>
  </div>

    </div>

    <div id="PrivateTrans">
      <div class="Tit-Shut">
      <h2>Private Transport</h2>
      <p>4% Value Added Taxes (VAT), must be summed up to all rates from July 2021 to July 2022 </p> 
      <p>H1 max 5 pax  -  Hiace max 10 pax </p> 
    </div>
    
    <table class="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">Departure</th>
      <th scope="col">Destination</th>
      <th scope="col">Price H1</th>
      <th scope="col">Price Hiace</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Airport</td>
      <td>San Jose</td>
      <td>$50</td>
      <td>$57</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Airport</td>
      <td>$43</td>
      <td>$50</td>
    </tr>
    <tr>
      <td>Airport / San Jose</td>
      <td>Jaco</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>Airport / San Jose</td>
      <td>Puntarenas</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>Airport / San Jose</td>
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
  <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
    </div>`;

    document.getElementById('PrivateTour').style.display = 'none';
    document.getElementById('PrivateShuttle').style.display = 'none';
    document.getElementById("start").setAttribute("min", today);
    document.getElementById("start").setAttribute("value", today);

}

function canopy(){
  location.href = "services.html#aqui";
  taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2> Rainforest Canopy</h2>
            </div>
            <p class=izquierda>
              Our park offers Costa Rica´s safest zip-line and effortlessly traverse the canopy and its hanging gardens under the supervision of our experienced guides.
            </p>
            <p class=izquierda>
             The exhilarating canopy tour takes guests flying across the magnificent Moliente River several times.
              </p>
            <p class=izquierda>
              Walking trails lead visitors deep into the rainforest floor. Passengers will be strapped in safe top-quality gear specifically designed for this canopy tour.
            </p>
            <p class="izquierda">
            <strong>Price:</strong> $96 pp
            </p>

            <p class=izquierda>
            <strong>What to bring?</strong> Comfortable shoes, long pants, y camera.
            </p>
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrances</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch </p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guide</p>
            <div class="ficon">
            </div>
          </div>



          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/Canopy/Canopy.jpg" width="560" height="366" alt="img25" />
        </figure>


        <figure class="effect-zoe">
          <img loading="lazy" src="img/Canopy/Canopy2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function combo(){
  location.href = "services.html#aqui";
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
            <strong>Price:</strong> $149 pp
            </p>

            <p class=izquierda>
            <strong>What to bring?</strong>  Comfortable shoes, long pants, y camera.
            </p>
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrances</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Breackfast and lunch </p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guide</p>
            <div class="ficon">
            </div>
          </div>



          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/Combo/Combo.jpg" width="560" height="366" alt="img25" />
        </figure>

         <figure class="effect-zoe">
          <img loading="lazy" src="img/Combo/Combo2.jpg" width="560" height="366" alt="img25" />
        </figure>

         <figure class="effect-zoe">
          <img loading="lazy" src="img/Combo/Combo3.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/Combo/Combo4.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function pacuare(){
  location.href = "services.html#aqui";
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
            <strong>Price:</strong> $99 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>  Extra clothes, repellent, comfortable shoes, towel, sweater.
            </p>
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/seguridad.png">
            </div>
            <p  class="centrado">Equipment</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guide</p>
            <div class="ficon">
            </div>
          </div>


          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/Pacuare/Pacuare.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/Pacuare/Pacuare2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function at(){
  location.href = "services.html#aqui";
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
            <strong>Price:</strong> $162 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>    Hat, sunscreen, swimming suit, towel and camera
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch and dinner</p>
            <div class="ficon">
            </div>
          </div>

          

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/AT/AT1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/AT/AT2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function aereal(){
  location.href = "services.html#aqui";
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
            <strong>Price:</strong> $107 pp
            </p>
             <p class=izquierda>
            <strong>What to bring?</strong>   Walking shoes, binoculars, raincoat and camera.
            </p>
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guide</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/Tram/Tram.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/Tram/Tram2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function tortuguero(){
  location.href = "services.html#aqui";
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
            <strong>Price:</strong> $140 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>   Comfortable shoes, repellent, hat, binoculars, extra clothes and camera
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance to the National Park</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Breakfast and lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Local guides and boat tour</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/Tortuguero/Tortuguero1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/Tortuguero/Tortuguero2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function Folk(){
  location.href = "services.html#aqui";
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
            <strong>Price:</strong> $70 pp
            </p> 
          <p class=izquierda>
            <strong>What to bring?</strong>    Comfortable shoes, long pants, and camera.
            </p>

          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/taza.png">
            </div>
            <p  class="centrado">coffee tasting</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Bilingual guide</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/Folklore/Folklore.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/Folklore/Folklore2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function TortugaIsland(){
  location.href = "services.html#aqui";
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
               Includes: transportation, guide, light breakfast, cruise, tropical fruits, refreshments, live music and lunch. Bring: light clothing, bathing suit, towel, sunscreen lotion, hat, and camera.
            </p>
            <p class="izquierda">
            <strong>Price:</strong> $135 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>    Hat, sunblock, swimming suit, towel and camera
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Breakfast, lunch, fruits and drinks</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/kayac.png">
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
          <img loading="lazy" src="img/Tortuga/Tortuga.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/Tortuga/Tortuga2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function IOL(){
  location.href = "services.html#aqui";
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
            <strong>Price:</strong> $112 pp
            </p>
           <p class=izquierda>
            <strong>What to bring?</strong>    Walking shoes, binoculars, raincoat and camera
            </p>  
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guide</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/IOL/IRAZU.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/IOL/IRAZU2.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/IOL/IRAZU3.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/IOL/IRAZU4.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function ManuelAntonio(){
  location.href = "services.html#aqui";
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
            <strong>Price:</strong> $135 pp
            </p>
             <p class=izquierda>
            <strong>What to bring?</strong>  Hat, sun block, swimming suit, towel and camera.
            </p> 
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guide</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/Manuel/ManuelAntonio1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/Manuel/ManuelAntonio2.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`
}

function PDGS(){
  location.href = "services.html#aqui";
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
               You will be guided through the estate, visiting the plantations and the 96 year old "beneficio" or coffee mill. Learn how the best coffee beans turn into a fabulous cup of java before enjoying a regional Costa Rican lunch. Continue to the town of Sarchí, home to Costa Rica’s most experienced artisans.
            </p>
            <p class=izquierda>
              Here, see first-hand how typical oxcarts are built and painted, indulge in buying the local’s beautiful wood souvenirs!
            </p>
            <p class="izquierda">
            <strong>Price:</strong> $112 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>   Comfortable shoes, long pants, y camera.
            </p> 
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guide</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/PDGS/PDGS1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/PDGS/PDGS2.jpg" width="560" height="366" alt="img26" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/PDGS/PDGS3.jpg" width="560" height="366" alt="img27" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/PDGS/PDGS4.jpg" width="560" height="366" alt="img28" />
        </figure>
      </div>
    </div>`

}

function Cooffee(){
  location.href = "services.html#aqui";
  taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Britt Coffee Tour</h2>
            </div>
            <p class=izquierda>
              Imagine following the journey of a coffee bean from the plantation to the processing plant to a cup of gourmet coffee, our experts guide you through the lifecycle of gourmet coffee. Begin in our nursery and follow the beans starting with their growing cycle through careful collection and selection of the finest beans.
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
            <strong>Price:</strong> $76 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>   Comfortable shoes, long pants, and camera.
            </p> 
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Bilingual guide</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/Coffe/Coffee.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/Coffe/Coffee2.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`

}

function Vip(){
  location.href = "services.html#aqui";
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
              Our favorite places to visit for a guided walk in San Jose include Costa Rica's cherished National Theater (lobby), Art Museum, Metropolitan Cathedral the old and authentic Central Market, the new and impressive National Stadium, an in-depth description of the National Monument, and the influential historical episode that took place at the Democracy Plaza.
            </p>
            <p class=izquierda>
               Our VIP City Bus tour will take you comfortably and safely through San Jose's narrow and busy streets driving by beautiful outdoor city attractions. The living city is our museum.
            </p>
            <p class="izquierda">
            <strong>Price:</strong> $76 pp
            </p>
            <p class=izquierda>
            <strong>What to bring?</strong>  Comfortable shoes, long pants, y cámara
            </p> 
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Bilingual guide</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/VIP/Vip1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/VIP/Vip2.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`

}

function SeisEnUno(){
  location.href = "services.html#aqui";
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
              zip-lines, adrena-line, butterflies and frogs garden, a guided walk and a hanging bridge tour.
            </p>
            <p class=izquierda>
              Start this rich experience with a true flight over the treetops in our comfortable aerial tram
              while an expert naturalist guide describes hidden treasures of the forest
            </p>
            <p class=izquierda>
              Then you’ll experience real emotion with our zip line tour with 14 safe platforms and 10 cables,
               which include the thrill of the Adrena-line cable, of 2297 feet long and 55 km/h speed.
            </p>
            <p class=izquierda>
              Back to the
              ground you will feel relaxation during a guided walk through our natural trails with a visit
              over Molinete river’s hanging bridge and a fun and educational stop to our very own
              hummingbird, butterflies and frogs garden, where you can learn about different species of the
              region.

            </p>

            <p class="izquierda">
            <strong>Price:</strong> $150 pp
            </p>

            <p class=izquierda>
            <strong>What to bring?</strong>  Walking shoes, binoculars, raincoat and camera.
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guide</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
        <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/6-in-1/6 in 1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/6-in-1/Canopy.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`

}

function Tocori(){
    location.href = "services.html#aqui";
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
              leave your horses on the trail as Don Gilberto or his daughter Dyala guide you through the exotic plant and animal life on a nature walk. They will let you taste, 
              smell, touch and observe firsthand the real Costa Rican jungle. After indulging your mind and spirit with expert knowledge,
               take a refreshing dip in pristine natural mountain waters while being splashed on by two stunning waterfalls at Tocori.
            </p>
            

            <p class="izquierda">
            <strong>Price:</strong> $125 pp
            </p>

            <p class=izquierda>
            <strong>What to bring?</strong>  Comfortable clothes, Long pants & Towel, a hat, Hiking boots or water shoes, Bathing suit (wear underneath),Sun Block & Insect Repellent
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Snacks and Juice</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guide</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
        <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/mountain/mountain.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/mountain/mount2.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`

}

function CincoEnUno(){
    location.href = "services.html#aqui";
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
            <strong>Price:</strong> $65 pp
            </p>

            <p class=izquierda>
            <strong>What to bring?</strong>  Light Clothing, Closed Toes Shoes (Mandatory), Extra Clothes & Raincoat, Sun Block & Insect Repellent, Camera.
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guide</p>
            <div class="ficon">
            </div>
          </div>
          

          </div>
       </div>
    </div>
        <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/5in1/5in1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/5in1/escalar.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>
    
 <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/5in1/tram.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/5in1/zip.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`;

}

function TortugaJaco(){
    location.href = "services.html#aqui";
    taskForm.innerHTML =`<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Tortuga Island Jaco</h2>
            </div>
            <p class=izquierda>
             Discover the magic of a dream island, Isla Tortuga (Tortuga Island). It is located in the Gulf of Nicoya,
              Costa Rica, 12 nautical miles from Puntarenas, Isla Tortuga (called Tolinga by local indigenous) has an area 
              of 120 hectares (296,52 acres) and remains as a protected forest that has awarded the Bandera Azul Ecológica 
              ecological certification (Ecological Blue Flag) for more than five years. This distinction is given to the Costa Rican
              beaches that have their waters free of pollution. Because of its geographical feature, its waters are turquoise and are 
              great for swimming.
            </p>
            <p class="izquierda">
            <strong>Our Catamaran has three environments for your enjoyment:</strong>
            </p>
            <ul>
                <li><p class=izquierda> <strong>MAIN ROOM: </strong>with air conditioning, bar and dressing rooms  </p></li>
                <li><p class=izquierda> <strong>THE BOW: </strong>with a wonderful view of the landscapes  </p></li>
                <li><p class=izquierda> <strong>UPPER DECK: </strong>ideal to relax or refresh in the Jacuzzi. </p></li>
            </ul>
            <br><hr>
            <p class="izquierda">
            <strong>The rate includes:</strong>
            </p>
            <ul>
                <li><p class=izquierda> Round trip transportation from: Manuel Antonio, Jacó. </p></li>
                <li><p class=izquierda> Bilingual specialized guides: ENGLISH / SPANISH (another language, please consult).</p></li>
                <li><p class=izquierda> Snack-type breakfast (Due to current sanitary restrictions, due to COVID19; it cannot be consumed on the bus; for this reason, it will be delivered minutes before arriving at our dock so that it can be comfortably tasted on the boat)</p></li>
                <li><p class=izquierda> Coffee and cookies in the morning (on the boat)</p></li>
                <li><p class=izquierda> 90 minutes trip on board our CATAMARAN</p></li>
                <li><p class=izquierda> On the way to the island, we will assist you with: tropical fruits and fish ceviche</p></li>
                <li><p class=izquierda> UNLIMITED natural drinks / throughout the tour</p></li>
                <li><p class=izquierda> Three sodas drinks</p></li>
                <li><p class=izquierda> Lunch on the island</p></li>
                <li><p class=izquierda> On the way back to Puntarenas we will serve you with a dessert that complements lunch and tropical fruits</p></li>
                <li><p class=izquierda> DJ music</p></li>
                <li><p class=izquierda> Beach chair / beach umbrella not included</p></li>
                <li><p class=izquierda> Five hours of beach time on Tortuga Island</p></li>
                <li><p class=izquierda> Entertainment: During the stay on the beach, you can enjoy beach volleyball, which is included in the package</p></li>
                <li><p class=izquierda> *Extra charge activities: snorkel, banana, kayak, among others*</p></li>
            </ul>
            

            <p class="izquierda">
            <strong>Price:</strong> $136 pp
            </p>

            <p class=izquierda>
            <strong>What to bring?</strong> Swimwear or shorts, additional clothes, sandals or comfortable shoes, towel, sunscreen, hat, sunglasses, camera and money for extra activities (optional).
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img loading="lazy" src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img loading="lazy" src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guide</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
        <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img loading="lazy" src="img/Tortuga/Tortuga.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img loading="lazy" src="img/Tortuga/Tortuga2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`

}

function inicio(){ //Se guarda tdo menos los tours



  trans.innerHTML = ``;
  taskForm.style.display = "block";
  taskForm.innerHTML =`               

      <div class="text-center">
        <h2>One and Half day tours</h2>

          <p>
            <br>8% Value Added Taxes (VAT), must be summed up to all rates <br> From July 2022 to July 2023<br><strong>Click the name to see more information<strong>.
        </p>
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
            Imagine following the journey of a coffee bean from the plantation to the processing plant to a cup of gourmet coffee, our experts guide you through the lifecycle of gourmet coffee
          </p>
          <button onclick="Cooffee()" class="btn btn--block card__btn" >More info</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--flowers "></div>
        <div class="card__content">
          <div class="card__title">6 in 1</div>
          <p class="card__text">Combine six popular rain forest activities into a single day jam-packed with adventure on this tour to Braulio Carrillo National Park from San Jose. Fly down ziplines over the rain forest canopy,
            visit a terrarium and butterfly garden, walk along nature trails, and more, all with hassle-free round-trip transportation from your San Jose hotel and a typical Costa Rican lunch to keep you going.

          </p>
          <button onclick="SeisEnUno()" class="btn btn--block card__btn" >More info</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--Vip "></div>
        <div class="card__content">
          <div class="card__title">VIP City Bus</div>
          <p class="card__text">Our unique sightseeing double decker bus will take you to downtown San Jose from your hotel to witness the city's main historical landmarks for an immersive and
            panoramic cultural experience and a better understanding of Costa Rica's evolution.
          </p>
          <button onclick="Vip()" class="btn btn--block card__btn" >More info</button>
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
          <button onclick="PDGS()" class="btn btn--block card__btn" >More info</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--ManuelAntonio "></div>
        <div class="card__content">
          <div class="card__title">Manuel Antonio</div>
          <p class="card__text">This national park is considered to be one of the most beautiful in the country. It is a combination of a paradisiacal beach of crystalline waters with coral reefs, 
            bordered by exuberant vegetation and the natural captivations of the tropical humid forest.
          </p>
          <button onclick="ManuelAntonio()" class="btn btn--block card__btn" >More info</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--IOL "></div>
        <div class="card__content">
          <div class="card__title">Irazú,Orosi,Lankaster</div>
          <p class="card__text">This excursion offers the opportunity to visit the City of Cartago and its Basilica of Los Angeles, to discover the highest volcano in Costa Rica at
             11000 feet above sea level and its amazing resemblance to the moon’s surface.
          </p>
          <button onclick="IOL()" class="btn btn--block card__btn" >More info</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--Totuga "></div>
        <div class="card__content">
          <div class="card__title">Tortuga Island Cruise</div>
          <p class="card__text">Board a boat at Puntarenas and enjoy the Gulf of Nicoya, a beautiful archipelago and sea birds, and a great cruise until we arrive at Tortuga Island that is known for its immaculate white sand beach and turquoise waters, a perfect stop for swimming and snorkeling.
          </p>
          <button onclick="TortugaIsland()" class="btn btn--block card__btn" >More info</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--Folk "></div>
        <div class="card__content">
          <div class="card__title">Folklore Dinner Show</div>
          <p class="card__text">Home to the Tierra Tipica spectacle. Ram Luna is perched high above the mountains overlooking the Central Valley. From this unique vantage point you can admire the auspicious panoramic views at dusk, and then take in the brilliance of the lights emanating from the capital.
          </p>
          <button onclick="Folk()" class="btn btn--block card__btn" >More info</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--Tortuguero "></div>
        <div class="card__content">
          <div class="card__title">Tortuguero NP</div>
          <p class="card__text">This is an expedition through the dense jungle of one of the most beautiful and scenic regions of Costa Rica. Sail the exotic channels of Tortuguero National Park, famous for its solitary beaches where the nesting of gigantic green turtles takes place (Jul to Sept.).
          </p>
          <button onclick="tortuguero()" class="btn btn--block card__btn" >More info</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--Aereal "></div>
        <div class="card__content">
          <div class="card__title">Rainforest Aerial Tram</div>
          <p class="card__text">This Rain Forest Aerial Tram from San Jose travels between the Grove Forest, and the canopy and its gardens, allowing you to discover plants and animals that usually are hidden in the heights of the forest.
          </p>
          <button onclick="aereal()" class="btn btn--block card__btn" >More info</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
      <div class="card">
        <div class="card__image card__image--AT "></div>
        <div class="card__content">
          <div class="card__title">Arenal & Hot springs</div>
          <p class="card__text">It is no coincidence that the Arenal Volcano & Hot Springs is one of the most popular tours in the country. Visiting one of the most famous areas in Costa Rica and relaxing in the hot springs is an unforgettable experience!
          </p>
          <button onclick="at()" class="btn btn--block card__btn" >More info</button>
        </div>
      </div>
    </li>
    <li class="cards__item SJ">
        <div class="card">
          <div class="card__image card__image--Pacuare "></div>
          <div class="card__content">
            <div class="card__title">Water Rafting Pacuare River</div>
            <p class="card__text">In this excursion you have the opportunity to be in one of the most popular rivers for this sport, Pacuare River. During the trip you will enjoy incomparable landscapes along the river.</p>
            <button onclick="pacuare()" class="btn btn--block card__btn" >More info</button>
          </div>
        </div>
      </li>
      <li class="cards__item SJ">
        <div class="card">
          <div class="card__image card__image--Combo "></div>
          <div class="card__content">
            <div class="card__title">Combo Tour</div>
            <p class="card__text">As we ascend towards the volcano we will stop for a brief explanation of our coffee. There is a noticeable change in temperature and vegetation, preparing us for the pleasure of the exuberant cloud forest of Poas Volcano.</p>
            <button onclick="combo()" class="btn btn--block card__btn" >More info</button>
          </div>
        </div>
      </li>
      <li class="cards__item SJ">
        <div class="card">
          <div class="card__image card__image--Canopy "></div>
          <div class="card__content">
            <div class="card__title">Rainforest Canopy</div>
            <p class="card__text">Our park offers Costa Rica´s safest zip-line and effortlessly traverse the canopy and its hanging gardens under the supervision of our experienced guides.</p>
            <button onclick="canopy()" class="btn btn--block card__btn" >More info</button>
          </div>
        </div>
      </li>
      <li class="cards__item JC">
      <div class="card">
        <div class="card__image card__image--fiveinone "></div>
        <div class="card__content">
          <div class="card__title">EXTREME ADRENALINE</div>
          <p class="card__text">Start this great trip by flying over the treetops in our aerial tram tour while you learn all about the nature that surrounds you, then soar above the clouds and fly over the treetops and immerse yourself in nature and it’s surroundings experiencing first hand why Costa Rica is the best Adventure and Eco-tourism destination in the world.</p>
          <button onclick="CincoEnUno()" class="btn btn--block card__btn" >More info</button>
        </div>
      </div>
    </li>
    <li class="cards__item JC">
    <div class="card">
      <div class="card__image card__image--Jaco "></div>
      <div class="card__content">
        <div class="card__title">TORTUGA ISLAND from jaco</div>
        <p class="card__text">Discover the magic of a dream island, Isla Tortuga (Tortuga Island). It is located in the Gulf of Nicoya, Costa Rica, 12 nautical miles from Puntarenas</p>
        <button onclick="TortugaJaco()" class="btn btn--block card__btn" >More info</button>
      </div>
    </div>
  </li>
  <li class="cards__item JC">
  <div class="card">
    <div class="card__image card__image--tocori "></div>
    <div class="card__content">
      <div class="card__title">MOUNTAIN & WATERFALL</div>
      <p class="card__text">Let Don Gilberto and his family show you the real Costa Rica – on horseback! Once they pick you up the adventure in history and nature begins, starting with the Quepos Indians and leads you through the changes of Manuel Antonio today</p>
      <button onclick="Tocori()" class="btn btn--block card__btn" >More info</button>
    </div>
  </div>
</li>
  </ul>












 <div class="text-center" ><a onclick="abrir()" class="btn btn-primary btn-lg more" onclick="">More</a></div>
`;


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


trans.addEventListener('click' , (e)=>{ //Se hace un target para diferenciar de transport, private tour y shuttle
  const name = e.target.innerHTML;
  console.log(name);
  if(name == "Private Transport"){
          document.getElementById('PrivateTour').style.display = "none";
          document.getElementById('PrivateShuttle').style.display = "none";
          document.getElementById('PrivateTrans').style.display = "block";
         }else if(name == "Private Tours"){
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


 if(NombreService != "aqui"){
     inicio();
  }

});

function URlPage(){ //Async await para obtener el URL
    return new Promise((resolve,reject) =>{
        resolve(window.location.href);
    } )
}



window.addEventListener('onhaschange', (e)=>{
    console.log("paso");
    NameUrl();
  })

async  function NameUrl(){
    let nombre = await URlPage(); //llamo para ver el URL
    const NombreService = nombre.split('#')[1]; //Uso lo que esta despues del # asi da una sensacion de php
    console.log(NombreService);

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
  NameUrl(); //Cargar la pagina depende de que URL sea pues no se usa php
})

function SanJoseToursPDF(){
  window.location.href= "One%20Day%20Tours.pdf";
}

function JacoToursPDF(){
  window.location.href= "Jaco%20One%20Day%20Tours.pdf";
}

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

/*
 
*/


