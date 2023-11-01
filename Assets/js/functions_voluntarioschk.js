let rowTable = "";
let tableVoluntariosSI;
let divLoading = document.querySelector("#divLoading");
document.addEventListener('DOMContentLoaded', function () {

    tableVoluntariosSI = $('#tableVoluntariosSI').dataTable({
        "aProcessing": true,
        "aServerSide": true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
        },
        "ajax": {
            "url": " " + base_url + "/Voluntarioschk/getVoluntariosSI",
            "dataSrc": ""
        },
        "columns": [
            { "data": "id" },
            { "data": "identificacion_volunteer" },
            { "data": "frist_name_volunteer" },
            { "data": "last_name_volunteer" },
            { "data": "email" },
            { "data": "address_volunteer" },
            { "data": "age_volunteer" },
            { "data": "ocupation_volunteer" },
            { "data": "phone_number_volunteer" },
            { "data": "datecreated" },
            { "data": "Estado", 
            "render": function (data, type, row) {
                let estado = row["Estado"];
                let colorClass = "";
                if (estado === "Activo") {
                    colorClass = "estado-activo";
                } else if (estado === "Inactivo") {
                    colorClass = "estado-inactivo";
                } else {
                    colorClass = "estado-pendiente";
                }
                return '<span class="' + colorClass + '">' + estado + '</span>';
            } },
            { "data": "options" }
        ],
        'dom': 'lBfrtip',
        'buttons': [
            {
                "extend": "copyHtml5",
                "text": "<i class='far fa-copy'></i> Copiar",
                "titleAttr": "Copiar",
                "className": "btn btn-secondary"
            }, {
                "extend": "excelHtml5",
                "text": "<i class='fas fa-file-excel'></i> Excel",
                "titleAttr": "EXportar a Excel",
                "className": "btn btn-success"
            }, {
                "extend": "pdfHtml5",
                "text": "<i class='fas fa-file-pdf'></i> PDF",
                "titleAttr": "EXportar a PDF",
                "className": "btn btn-danger"
            }, {
                "extend": "csvHtml5",
                "text": "<i class='fas fa-file-csv'></i> CSV",
                "titleAttr": "EXportar a CSV",
                "className": "btn btn-info"
            }
        ],
        "responsive": "true",
        "bDestroy": true,
        "iDisplayLength": 10,
        "order": [[0, "desc"]]
    });


    if (document.querySelector("#formVoluntario")) {
        let formVoluntario = document.querySelector("#formVoluntario");
        formVoluntario.onsubmit = function (e) {
            e.preventDefault();
            let strIdentificacion = document.querySelector('#txtIdentificacion').value;
            let strNombre = document.querySelector('#txtNombre').value;
            let strApellido = document.querySelector('#txtApellido').value;
            let strEmail = document.querySelector('#txtEmail').value;
            let strDireccion = document.querySelector('#txtDireccion').value;
            let intEdad = document.querySelector('#txtEdad').value;
            let strMensaje = document.querySelector('#txtMensaje').value;
            let strOcupacion = document.querySelector('#txtOcupacion').value;
            let strTelefono = document.querySelector('#txtTelefono').value;
            let strEstado = document.querySelector('#listStatus').value;


            if (strIdentificacion == '' || strApellido == '' || strNombre == '' || strEmail == '' || strTelefono == '' || intEdad == '' || strOcupacion == '' || strMensaje == '' || strDireccion == '' || strEstado == '') {
                swal("Atención", "Todos los campos son obligatorios.", "error");
                return false;
            }

            let elementsValid = document.getElementsByClassName("valid");
            for (let i = 0; i < elementsValid.length; i++) {
                if (elementsValid[i].classList.contains('is-invalid')) {
                    swal("Atención", "Por favor verifique los campos en rojo.", "error");
                    return false;
                }
            }


            let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            let ajaxUrl = base_url + '/Voluntarioschk/setVoluntariochk';
            let formData = new FormData(formVoluntario);
            request.open("POST", ajaxUrl, true);
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.onerror = function () {
                swal("Error", "Hubo un error en la solicitud AJAX", "error");
            };
            // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(formData);
            request.onreadystatechange = function () {
                if (request.readyState == 4 && request.status == 200) {
                    let objData = JSON.parse(request.responseText);
                    if (objData.status) {
                        if (rowTable == "") {
                            tableVoluntariosSI.api().ajax.reload();
                        } else {
                            rowTable.cells[1].textContent = strIdentificacion;
                            rowTable.cells[2].textContent = strNombre;
                            rowTable.cells[3].textContent = strApellido;
                            rowTable.cells[4].textContent = strEmail;
                            rowTable.cells[5].textContent = strDireccion;
                            rowTable.cells[6].textContent = intEdad;
                            rowTable.cells[7].textContent = strOcupacion;
                            rowTable.cells[8].textContent = strTelefono;
                            rowTable.cells[9].textContent = strEstado;
                            rowTable = "";
                            
                        }

                        $('#modalformVoluntario').modal("hide");
                        formVoluntario.reset();
                        swal("Voluntario", objData.msg, "success");
                        setTimeout(function () {
                            location.reload();
                        }, 1200);
                    } else {
                        swal("Error", objData.msg, "error");
                    }
                }
                return false;
            }

        }

    }


}, false);


function fntViewVoluntariochk(idVoluntario) {
    let request = (window.XMLHttpRequest) ?
        new XMLHttpRequest() :
        new ActiveXObject('Microsoft.XMLHTTP');
    let ajaxUrl = base_url + '/Voluntarioschk/getVoluntariochk/' + idVoluntario;
    request.open("GET", ajaxUrl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            let objData = JSON.parse(request.responseText);
            if (objData.status) {
                let objMesaje = objData.data;
                document.querySelector("#celCedula").innerHTML = objMesaje.identificacion_volunteer;
                document.querySelector("#celNombre").innerHTML = objMesaje.frist_name_volunteer;
                document.querySelector("#celApellido").innerHTML = objMesaje.last_name_volunteer;
                document.querySelector("#celEmail").innerHTML = objMesaje.email;
                document.querySelector("#celDireccion").innerHTML = objMesaje.address_volunteer;
                document.querySelector("#celEdad").innerHTML = objMesaje.age_volunteer;
                document.querySelector("#celMensaje").innerHTML = objMesaje.mensaje;
                document.querySelector("#celOcupacion").innerHTML = objMesaje.ocupation_volunteer;
                document.querySelector("#celTefono").innerHTML = objMesaje.phone_number_volunteer;
                document.querySelector("#celEstado").innerHTML = objMesaje.Estado;
                $('#modalViewVoluntario').modal('show');
            } else {
                swal("Error", objData.msg, "error");
            }
        }
    }
}


function fntEditVoluntariochk(element, id) {
    rowTable = element.parentNode.parentNode.parentNode;
    document.querySelector('#titleModal').innerHTML = "Actualizar Voluntario";
    document.querySelector('.modal-header').classList.replace("headerRegister", "headerUpdate");
    document.querySelector('#btnActionForm').classList.replace("btn-primary", "btn-info");
    document.querySelector('#btnText').innerHTML = "Actualizar";
    let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    let ajaxUrl = base_url + '/Voluntarioschk/getVoluntariochk/' + id;
    request.open("GET", ajaxUrl, true);
    //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send();
    request.onreadystatechange = function () {

        if (request.readyState == 4 && request.status == 200) {
            let objData = JSON.parse(request.responseText);

            if (objData.status) {
                document.querySelector("#idv").value = objData.data.id;
                document.querySelector("#txtIdentificacion").value = objData.data.identificacion_volunteer;
                document.querySelector("#txtNombre").value = objData.data.frist_name_volunteer;
                document.querySelector("#txtApellido").value = objData.data.last_name_volunteer;
                document.querySelector("#txtEmail").value = objData.data.email;
                document.querySelector("#txtDireccion").value = objData.data.address_volunteer;
                document.querySelector("#txtEdad").value = objData.data.age_volunteer;
                document.querySelector("#txtMensaje").value = objData.data.mensaje;
                document.querySelector("#txtOcupacion").value = objData.data.ocupation_volunteer;
                document.querySelector("#txtTelefono").value = objData.data.phone_number_volunteer;


                if (objData.data.Estado === 'Activo') {
                    document.querySelector("#listStatus").value = 'Activo';
                } else if (objData.data.Estado === 'Inactivo') {
                    document.querySelector("#listStatus").value = 'Inactivo';
                } else {
                    document.querySelector("#listStatus").value = 'Solicitud';
                }
                $('#listStatus').selectpicker('render');

            } else {
                swal("Error", objData.msg, "error");
            }
        }
        $('#modalformVoluntario').modal('show');
        


    }
    
}


function fntDelVoluntariochk(idVoluntario) {
    swal({
        title: "Eliminar Voluntario",
        text: "¿Realmente quiere eliminar el voluntario?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "No, cancelar!",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {

        if (isConfirm) {
            let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            let ajaxUrl = base_url + '/Voluntarioschk/delVoluntariochk';
            let strData = "idv=" + idVoluntario;
            request.open("POST", ajaxUrl, true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(strData);
            request.onreadystatechange = function () {
                if (request.readyState == 4 && request.status == 200) {
                    let objData = JSON.parse(request.responseText);
                    if (objData.status) {
                        swal("Eliminar!", objData.msg, "success");
                        tableVoluntariosSI.api().ajax.reload();
                    } else {
                        swal("Atención!", objData.msg, "error");
                    }
                }
            }
        }

    });

}

function openModal() {
    rowTable = "";
    document.querySelector('#idv').value = "";
    document.querySelector('.modal-header').classList.replace("headerUpdate", "headerRegister");
    document.querySelector('#btnActionForm').classList.replace("btn-info", "btn-primary");
    document.querySelector('#btnText').innerHTML = "Guardar";
    document.querySelector('#titleModal').innerHTML = "Nuevo Voluntario";
    document.querySelector("#formVoluntario").reset();
    $('#modalformVoluntario').modal('show');
}