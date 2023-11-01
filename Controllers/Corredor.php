<?php
require_once("Models/TCliente.php");
require_once("Models/LoginModel.php");

class Corredor extends Controllers
{
    use TCliente;
    public $login;

    public function __construct()
    {
        parent::__construct();
        session_start();
        $this->login = new LoginModel();
    }

    public function Corredor()
    {
        $data['page_tag'] = defined('NOMBRE_EMPRESA') ? NOMBRE_EMPRESA : "Nombre de la Empresa"; // Verifica si la constante está definida
        $data['page_title'] = defined('NOMBRE_EMPRESA') ? NOMBRE_EMPRESA : "Nombre de la Empresa"; // Verifica si la constante está definida
        $data['page_name'] = "Ptemplate";
        //$data['productos'] = $this->getProductosT();
        $pagina = 1;

        $this->views->getView($this, "Ptemplate", $data);
    }

    public function voluntario()
    {
        // Configura el encabezado para indicar que se envía una respuesta JSON
       // header('Content-Type: application/json');
        //$arrResponse = array('status' => false, 'msg' => "No es posible enviar la inscribcion."); // Mensaje de error predeterminado
        if ($_POST) {
			
			$identificacion_volunteer = ucwords(strtolower(strClean($_POST['identificacion_volunteer'])));
            $frist_name_volunteer = strtolower(strClean($_POST['frist_name_volunteer']));
            $last_name_volunteer = strtolower(strClean($_POST['last_name_volunteer']));
            $email = strtolower(strClean($_POST['email']));
            $address_volunteer = strtolower(strClean($_POST['address_volunteer']));
            $age_volunteer = ucwords(strtolower(strClean($_POST['age_volunteer'])));
            $mensaje = strClean($_POST['mensaje']);
            $ocupation_volunteer = strtolower(strClean($_POST['ocupation_volunteer']));
            $phone_number_volunteer = strtolower(strClean($_POST['phone_number_volunteer']));
				
                $request_voluntario = $this->setVoluntarioT($identificacion_volunteer, $frist_name_volunteer, $last_name_volunteer, $email, $address_volunteer, $age_volunteer, $mensaje, $ocupation_volunteer, $phone_number_volunteer);

			

				if ($request_voluntario > 0) {
					
						if ($request_voluntario == "exist") {
							$arrResponse = array('status' => false, 'msg' => '¡Atención! el email o la identificación ya existe, ingrese otro.');

						} else {

							$arrResponse = array('status' => true, 'msg' => 'Su inscripción para ser voluntario fue enviada correctamente.');

							//$nombre = $strNombre.' '.$strApellido;
							//$url_recovery = base_url();
							//$dataUsuario = array('nombre' => $nombre,
							//				 'email' => $strEmail,
							//				 'asunto' => 'Bienvenido voluntario - '.NOMBRE_REMITENTE,
							//				 'url_recovery' => $url_recovery);

							//	 sendEmail($dataUsuario,'email_bienvenida');
						}
					
				} else {
					$arrResponse = array("status" => false, "msg" => 'No fue posible en envío de se inscripción para ser voluntario.');
				}


			
			echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
		}
		die();
    }
}
?>
