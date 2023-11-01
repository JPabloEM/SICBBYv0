<?php 
 nav_info($data);
 $arrDocV = $data['DocumentacionV'];
 ?> 

<div
      class="container-fluid header-bg py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
      >
      <div class="container py-5">
        <h1 class="display-4 text-white mb-3 animated slideInDown">
        Documentacion
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a class="text-white" href="home">Home</a>
            </li>
            <li class="breadcrumb-item text-primary active" aria-current="page">
            Documentacion
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <script src="Assets/js/function_Dowload.js"></script>
  <style>

    
    /* Estilos CSS */
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      margin: 16px;
      width: 335px;
      display: inline-block;
    }

    .cardH {
      border: 1px solid #445d2e;
      border-radius: 8px;
      justify-content: center;
      overflow: hidden;
      margin: 17px;
      width: auto;
      display: inline-block;
      text-align: center;
    }

    .card-img {
      content: "";
    width: 150px;
    height: auto;
    position: absolute;
    right: 0;
    bottom: 0;
    background: var(--bs-primary);
    border-radius: 10px;
    opacity: 1;
    z-index: -1;
    transition: .5s;
    }

    .card-content {
  padding: 16px;
  text-align: center;
}

    .card-tags {
      margin-bottom: 8px;
    }

    .tag {
      text-decoration: none;
      background-color: #007bff;
      color: #fff;
      padding: 4px 8px;
      border-radius: 4px;
    }

    .h4 {
      font-size: 1.5rem;
      margin: 8px 0;
    }

    .card-footer {
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666;
      gap: 5px;
    }

    .inline-flex {
      display: inline-flex;
      align-items: center;
    }

    .text-xs {
      font-size: 0.75rem;
    }

    .mr-1.5 {
      margin-right: 1.5px;
    }
  </style>

</head>
<body>
  <!-- Contenido HTML -->
  	<?php 
				for ($p=0; $p < count($arrDocV) ; $p++) {
					// $rutaVoluntario= $arrVoluntarios[$p]['ruta']; 
			 ?>
  <div class="card">
   
  <div class="cardH">
  <h3 class="card-title">
    
        <?= $arrDocV[$p]['nombreP'] ?>
     
      </h3>
      </div>

    
    <div class="card-content ">
    
        <i class="fas fa-map-marker-alt mr-1.5"></i>
        <?= $arrDocV[$p]['descripcionP']; ?>
      </span>


      <div class="h4 card-title">
      <?= $arrDocV[$p]['fechaDocP'] ?>
      </div>
  
     



      <div class="card-footer mt-6 flex space-x-4">
    <!-- Botón con la fecha del documento -->
    <div class="card-footer mt-6 flex space-x-4">
    <!-- Botón con la fecha del documento -->
    <button onClick="downloadPDFP('<?= $arrDocV[$p]['id_documentoP']; ?>')" class="button-descargar">
    Descargar
</button>


</div>

</div>


      
    </div>
    
  </div>
</body>



<?php } ?>
        





<?php 
  
	footer_info($data);
?>
