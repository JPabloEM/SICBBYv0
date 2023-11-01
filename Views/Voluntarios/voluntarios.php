<?php
headerAdmin($data);
getModal('modalVoluntario', $data);
?>
<div id="contentAjax"></div> 
<main class="app-content">
  <div class="app-title">
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="tile">
        <div class="tile-body">
          <div class="table-responsive">
            <h1><i class="fas fa-user-tag"></i> Voluntarios en solicitud</h1>
            <table class="table table-hover table-bordered" id="tableVoluntarios">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Identificacion</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Direccion</th>
                  <th>Edad</th>
                  <th>Ocupacion</th>
                  <th>Telefono</th>
                  <th>Fecha solicitud</th>
                  <th>Estado</th>
                  <th>Acciones</th>
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
</main>
<?php footerAdmin($data); ?>