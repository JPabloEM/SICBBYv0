let tableVoluntariados;
let rowTable = "";
let divLoading = document.querySelector("#divLoading");

// cargar  la información de talller en la vista

tableVoluntariados = $("#tableVoluntariados").dataTable({
  aProcessing: true,
  aServerSide: true,
  language: {
    url: "//cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json",
  },
  ajax: {
    url: " " + base_url + "/Voluntariados/getVoluntariados",
    dataSrc: "",
  },
  columns: [
    { data: "idvoluntariado" },
    { data: "nombre" },
    { data: "descripcion" },
    { data: "fechaVoluntariado" },
    { data: "horaVoluntariado" },
    { data: "lugar" },
    { data: "capacidad" },
    { data: "status" },
    { data: "options" },
  ],
  dom: "lBfrtip",
  buttons: [
    {
      extend: "copyHtml5",
      text: "<i class='far fa-copy'></i> Copiar",
      titleAttr: "Copiar",
      className: "btn btn-secondary",
    },
    {
      extend: "excelHtml5",
      text: "<i class='fas fa-file-excel'></i> Excel",
      titleAttr: "Exportar a Excel",
      className: "btn btn-success",
    },
    {
      extend: "pdfHtml5",
      text: "<i class='fas fa-file-pdf'></i> PDF",
      titleAttr: "Exportar a PDF",
      className: "btn btn-danger",
    },
    {
      extend: "csvHtml5",
      text: "<i class='fas fa-file-csv'></i> CSV",
      titleAttr: "Exportar a CSV",
      className: "btn btn-info",
    },
  ],
  responsive: "true",
  bDestroy: true,
  iDisplayLength: 10,
  order: [[0, "desc"]],
});

//Función para subir una cargar una imagen
document.addEventListener(
  "DOMContentLoaded",
  function () {
    // if(document.querySelector("#foto")){
    //     var foto = document.querySelector("#foto");
    //     foto.onchange = function(e) {
    //         var uploadFoto = document.querySelector("#foto").value;
    //         var fileimg = document.querySelector("#foto").files;
    //         var nav = window.URL || window.webkitURL;
    //         var contactAlert = document.querySelector('#form_alert');
    //         if(uploadFoto !=''){
    //             var type = fileimg[0].type;
    //             var name = fileimg[0].name;
    //             if(type != 'image/jpeg' && type != 'image/jpg' && type != 'image/png'){
    //                 contactAlert.innerHTML = '<p class="errorArchivo">El archivo no es válido.</p>';
    //                 if(document.querySelector('#img')){
    //                     document.querySelector('#img').remove();
    //                 }
    //                 document.querySelector('.delPhoto').classList.add("notBlock");
    //                 foto.value="";
    //                 return false;
    //             }else{
    //                     contactAlert.innerHTML='';
    //                     if(document.querySelector('#img')){
    //                         document.querySelector('#img').remove();
    //                     }
    //                     document.querySelector('.delPhoto').classList.remove("notBlock");
    //                     var objeto_url = nav.createObjectURL(this.files[0]);
    //                     document.querySelector('.prevPhoto div').innerHTML = "<img id='img' src="+objeto_url+">";
    //                 }
    //         }else{
    //             alert("No selecciono foto");
    //             if(document.querySelector('#img')){
    //                 document.querySelector('#img').remove();
    //             }
    //         }
    //     }
    // }

    // if(document.querySelector(".delPhoto")){
    //     var delPhoto = document.querySelector(".delPhoto");
    //     delPhoto.onclick = function(e) {
    //         removePhoto();
    //     }
    // }

    //Nuevo Voluntariado

    var formVoluntariado = document.querySelector("#formVoluntariado");
    formVoluntariado.onsubmit = function (e) {
      e.preventDefault();

      var intIdVoluntariado = document.querySelector("#idVoluntariado").value;
      var strNombre = document.querySelector("#txtNombre").value;
      var strDescripcion = document.querySelector("#txtDescripcion").value;
      var strFecha = document.querySelector("#txtFecha").value;
      var strHora = document.querySelector("#txtHora").value;
      var strLugar = document.querySelector("#txtLugar").value;
      var intCapacidad = document.querySelector("#txtCapacidad").value;
      var intStatus = document.querySelector("#listStatus").value;
      if (
        strNombre == "" ||
        strDescripcion == "" ||
        strFecha == "" ||
        strHora == "" ||
        strLugar == "" ||
        intCapacidad == "" ||
        intStatus == ""
      ) {
        swal("Atención", "Todos los campos son obligatorios.", "error");
        return false;
      }
      divLoading.style.display = "flex";
      var request = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
      var ajaxUrl = base_url + "/Voluntariados/setVoluntariado";
      var formData = new FormData(formVoluntariado);
      request.open("POST", ajaxUrl, true);
      request.send(formData);
      request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
          let objData = JSON.parse(request.responseText);
          if (objData.status) {
            $("#modalFormVoluntariados").modal("hide");
            formVoluntariado.reset();
            swal("Voluntariado", objData.msg, "success");

            tableVoluntariados.api().ajax.reload();
          } else {
            swal("Error", objData.msg, "error");
          }
        }
        divLoading.style.display = "none";
        return false;
      };
    };
  },
  false
); // fin de la función que carga agrega la imagen

function fntViewInfo(idvoluntariado) {
  let request = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  let ajaxUrl = base_url + "/Voluntariados/getVoluntariado/" + idvoluntariado;
  request.open("GET", ajaxUrl, true);
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      let objData = JSON.parse(request.responseText);
      if (objData.status) {
        let estado =
          objData.data.status == 1
            ? '<span class="badge badge-success">Activo</span>'
            : '<span class="badge badge-danger">Inactivo</span>';
        document.querySelector("#voluntariadoId").innerHTML = objData.data.idvoluntariado;
        document.querySelector("#tNombre").innerHTML = objData.data.nombre;
        document.querySelector("#tDescricion").innerHTML =
          objData.data.descripcion;
        document.querySelector("#tFecha").innerHTML = objData.data.fechaVoluntariado;
        document.querySelector("#tHora").innerHTML = objData.data.horaVoluntariado;
        document.querySelector("#tLugar").innerHTML = objData.data.lugar;
        document.querySelector("#tCapacidad").innerHTML =
          objData.data.capacidad;
        document.querySelector("#tEstado").innerHTML = estado;
        // document.querySelector("#imagenTaller").innerHTML = '<img src="'+objData.data.url_portada+'"></img>';
        $("#modalViewVoluntariado").modal("show");
      } else {
        swal("Error", objData.msg, "error");
      }
    }
  };
}

function fntDelInfo(idVoluntariado) {
  swal(
    {
      title: "Eliminar Voluntariado",
      text: "¿Realmente quiere eliminar la Voluntariado?",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      closeOnConfirm: false,
      closeOnCancel: true,
    },
    function (isConfirm) {
      if (isConfirm) {
        let request = window.XMLHttpRequest
          ? new XMLHttpRequest()
          : new ActiveXObject("Microsoft.XMLHTTP");
        let ajaxUrl = base_url + "/Voluntariados/delVoluntariado";
        let strData = "idvoluntariado=" + idVoluntariado;
        request.open("POST", ajaxUrl, true);
        request.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );
        request.send(strData);
        request.onreadystatechange = function () {
          if (request.readyState == 4 && request.status == 200) {
            let objData = JSON.parse(request.responseText);
            if (objData.status) {
              swal("Eliminar!", objData.msg, "success");
              tableTaller.api().ajax.reload();
            } else {
              swal("Atención!", objData.msg, "error");
            }
          }
        };
      }
    }
  );
}

function fntEditInfo(element, id) {
  rowTable = element.parentNode.parentNode.parentNode;
  document.querySelector('#titleModal').innerHTML = "Actualizar Voluntariado";
  document.querySelector('.modal-header').classList.replace("headerRegister", "headerUpdate");
  document.querySelector('#btnActionForm').classList.replace("btn-primary", "btn-info");
  document.querySelector('#btnText').innerHTML = "Actualizar";
  let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  let ajaxUrl = base_url + '/Voluntariados/getVoluntariado/' + id;
  request.open("GET", ajaxUrl, true);
  //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send();
  request.onreadystatechange = function () {

      if (request.readyState == 4 && request.status == 200) {
          let objData = JSON.parse(request.responseText);

          if (objData.status) {
              document.querySelector("#idVoluntariado").value = objData.data.idvoluntariado;
              document.querySelector("#txtNombre").value = objData.data.nombre;
              document.querySelector("#txtDescripcion").value = objData.data.descripcion;
              document.querySelector("#txtFecha").value = objData.data.fechaVoluntariado;
              document.querySelector("#txtHora").value = objData.data.horaVoluntariado;
              document.querySelector("#txtLugar").value = objData.data.lugar;
              document.querySelector("#txtCapacidad").value = objData.data.capacidad;
              document.querySelector("#listStatus").value = objData.data.status;

              if(objData.data.status == 1)
              {
                  document.querySelector("#listStatus").value = 1;
              }else{
                  document.querySelector("#listStatus").value = 2;
              }
            
              $('#listStatus').selectpicker('render');
             
          } else {
              swal("Error", objData.msg, "error");
          }
         
      }
      $('#modalFormVoluntariados').modal("show");
     
  }

  
}


function openModal() {
  rowTable = "";
  document.querySelector("#idVoluntariado").value = "";
  document
    .querySelector(".modal-header")
    .classList.replace("headerUpdate", "headerRegister");
  document
    .querySelector("#btnActionForm")
    .classList.replace("btn-info", "btn-primary");
  document.querySelector("#btnText").innerHTML = "Guardar";
  document.querySelector("#titleModal").innerHTML = "Nueva Voluntariado";
  document.querySelector("#formVoluntariado").reset();
  $("#modalFormVoluntariados").modal("show");
  //  removePhoto();
}
