<?php 
    headerAdmin($data); 
    getModal('modalDocumentosP',$data);
?>

<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fas fa-box-tissue"></i> <?= $data['page_title'] ?>
                <?php if($_SESSION['permisosMod']['w']){ ?>
                    <button class="btn btn-primary" type="button" onclick="openModal();"><i class="fas fa-plus-circle"></i> Nuevo</button>
                <?php } ?> 
            </h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item"><a href="<?= base_url(); ?>/documentosP"><?= $data['page_title'] ?></a></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-body">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered" id="tableDocumentosP">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                 
                                    <th>Status</th>
                                    <th>Fecha</th>
                                    <!-- tr> -->
                                    <!-- <td>Download:</td> -->
                                    <!-- <td id="contenedorBotonDescarga"></td> -->
                                  <!-- </tr> -->
                                    <th>Acciones</th>
                                    <!-- <td id="contenedorBotonDescarga"></td> -->
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div id="contenedorBotonDescarga"></div> -->
</main>

<?php footerAdmin($data); ?>
    