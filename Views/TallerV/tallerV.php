<?php
nav_info($data);
$arrActividad = $data['tallerV'];
?>



<div class="container-fluid header-bg py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
  <div class="container-title py-5">
    <h1 class="display-4 text-white mb-3 animated slideInDown">
      Talleres
    </h1>
    <nav aria-label="breadcrumb animated slideInDown">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <a class="text-white" href="home">Home</a>
        </li>
        <li class="breadcrumb-item text-primary active" aria-current="page">
          Talleres
        </li>
      </ol>
    </nav>
  </div>
</div>

</head>


<section class="section section-xl">
  <div class="container">
    <div class="row row-50 justify-content-lg-between align-items-lg-center">
    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="img-border">
              <img class="img-fluid" src="Assets/Ptemplate/img/taller1.jpg" alt="" />
            </div>
          </div>
      <div class="col-lg-6 col-xl-5">
        <div class="innset-xl-left-70">
          <h3>¿Por qué es importante participar en talleres?</h3>
          <p class="text-opacity-80">
            En esta página, es importante tener información sobre por qué es importante de
            participar en las actividades de talleres. Si estás interesado en participar,
            aquí se puede encontrar esa información sobre cómo puedes participar, por ende,
            acá irá en las actividades que se publiquen de talleres y la información de esta actividad.

          </p>
        </div>
      </div>
    </div>
  </div>
</section>


<div class="container-fluid service py-6">
  <div class="container">
    <div class="text-center wow bounceInUp" data-wow-delay="0.1s">
      <small
        class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Actividades</small>
      <h1 class="display-5 mb-5">Talleres disponibles</h1>
    </div>
    <div class="row g-4">

      <?php
      for ($p = 0; $p < count($arrActividad); $p++) {
        // $rutaVoluntario= $arrVoluntarios[$p]['ruta']; 
        ?>
        <div class="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
          <div class="bg-light rounded service-item">
            <div class="service-content d-flex align-items-center justify-content-center p-4">
              <div class="service-content-icon text-center">
                <img src="Assets/Ptemplate/img/taller.png" width='60px' height='60px' alt="Taller"
                  class="text-primary mb-4">

                <h4 class="mb-3">
                  <?= $arrActividad[$p]['nombre'] ?>
                </h4>
                <p class="mb-4">
                  <?= $arrActividad[$p]['descripcion'] ?>
                </p>
                <p class="mb-4"> <i class="fas fa-map-marker-alt mr-1.5"></i>
                  <?= $arrActividad[$p]['lugar']; ?>
                </p>

                <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Ver más</a>
              </div>
            </div>
          </div>
        </div>
      <?php } ?>
    </div>
  </div>
</div>
<!-- Service End -->


<script src="Assets/Ptemplate/js/functions.js"></script>





<?php

footer_info($data);
?>