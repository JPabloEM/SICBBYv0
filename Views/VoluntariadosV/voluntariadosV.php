<?php
nav_info($data);
$arrVoluntariados = $data['VoluntariadosV'];
?>



<div class="container-fluid header-bg py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
  <div class="container-title py-5">
    <h1 class="display-4 text-white mb-3 animated slideInDown">
      Voluntariados
    </h1>
    <nav aria-label="breadcrumb animated slideInDown">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <a class="text-white" href="home">Home</a>
        </li>
        <li class="breadcrumb-item text-primary active" aria-current="page">
          Voluntariados
        </li>
      </ol>
    </nav>
  </div>
</div>

</head>

<section class="section section-xl">
  <div class="container">
    <div class="row row-50 justify-content-lg-between align-items-lg-center">
      <div class="col-lg-6 col-xl-5">
        <div class="innset-xl-left-70">
          <h3>¿Por qué es importante participar en voluntariados?</h3>
          <p class="text-opacity-80">
            En esta página, es importante tener información sobre por qué es importante de
            participar en las actividades de voluntariados. Si estás interesado en participar,
            aquí se puede encontrar esa información sobre cómo puedes participar, por ende,
            acá irá en las actividades que se publiquen de voluntariados y la información de esta actividad.

          </p>
        </div>
      </div>
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
        <div class="img-border">
          <img class="img-fluid" src="Assets/Ptemplate/img/voluntariado1.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>



<div class="text-center wow bounceInUp" data-wow-delay="0.1s">
  <small
    class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Actividades</small>
  <h1 class="display-5 mb-5">Voluntariados disponibles</h1>
</div>


<section class="bg0 p-t-104 p-b-116">
  <div class="container">

    <?php
    for ($p = 0; $p < count($arrVoluntariados); $p++) {
      // $rutaVoluntario= $arrVoluntarios[$p]['ruta']; 
      ?>



      <div class="card">

        <div class="mb-3">
          <img src="Assets/Ptemplate/img/voluntariado.png" alt="Taller" class="text-primary mb-4">
          <h3 class="mb-3">
            <strong>
              <?= $arrVoluntariados[$p]['nombre'] ?>
            </strong>

          </h3>
        </div>


        <div class="card-content ">

          <i class="fas fa-map-marker-alt mr-1.5"></i>
          <?= $arrVoluntariados[$p]['lugar']; ?>
          </span>


          <div class="h4 card-title">
            <?= $arrVoluntariados[$p]['descripcion'] ?>
          </div>


        </div>

        <div>



          <a href="tallerV"><button class="ver-mas-btn"> Ver más </button></a>
        </div>

      </div>





    <?php } ?>

  </div>
</section>
<!-- Service End -->

<script src="Assets/Ptemplate/js/functions.js"></script>



<?php

footer_info($data);
?>