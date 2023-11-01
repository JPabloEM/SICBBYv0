<?php 
     require_once("Models/TCharlaV.php");
	class CharlaV extends Controllers{
        use TCharlaV;
		public function __construct()
		{
			parent::__construct();
			session_start();
			//getPermisos(MDPAGINAS);
		}


		public function charlaV()
		{
			$pageContent = getPageRout('charlaV');
			if(empty($pageContent)){
				header("Location: ".base_url());
			}else{
				$data['page_tag'] = NOMBRE_EMPESA;
				$data['page_title'] = NOMBRE_EMPESA." - ".$pageContent['titulo'];
				$data['page_name'] = $pageContent['titulo'];
				$data['page'] = $pageContent;
				$data['CharlaV'] = $this->getCharlaV();
				$this->views->getView($this,"charlaV",$data); 
			}

		}
	

	}
 ?>
