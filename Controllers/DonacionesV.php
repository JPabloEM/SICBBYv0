<?php 

	class DonacionesV extends Controllers{
       
		public function __construct()
		{
			parent::__construct();
			session_start();
			//getPermisos(MDPAGINAS);
		}

		public function donacionesV()
		{
			$pageContent = getPageRout('donacionesV');
			if(empty($pageContent)){
				header("Location: ".base_url());
			}else{
				$data['page_tag'] = NOMBRE_EMPESA;
				$data['page_title'] = NOMBRE_EMPESA." - ".$pageContent['titulo'];
				$data['page_name'] = $pageContent['titulo'];
				$data['page'] = $pageContent;
                // $data['donacionesV'] = $this->getdonacionesV();
				$this->views->getView($this,"donacionesV",$data); 
			}

		}

		

	}
 ?>
