<?php
 
	//Código para incluir las librerias
	 include_once("conexion.php");
	 include('MyFPDF.php');

	 //Conexión con el servidor
	  $link=ConectarseServidor();

	 //Conexión con la base de datos
	  ConectarseBaseDatos($link);

	 //realiza consulta a la base de datos
	 $sql = "select * from dwservicios"; 
     
     $result=mysql_query($sql,$link);

	   
	   //inclusión de rutinas para crear informes PDF
	   $pdf=new MyFPDF();
	   $pdf->AddPage('P');
	   $pdf->SetFont('Arial','B',11);
	   $pdf->Cell(0,8,"Servicios",0,0,'C',0);
	   $pdf->Cell(0,20,"",0,1,'',0);

		//titulos de las columnas
		$pdf->SetTextColor(0,0,0); //rgb	
		$pdf->Cell(30,5,'nombre',1,0,'C');	
		$pdf->Cell(35,5,'Crema o Insu',1,0,'C');	

		$pdf->Cell(35,5,'Usuario',1,0,'C');
				$pdf->Cell(0,5,'Servicios',1,1,'C');	
	
		$pdf->SetFont('Arial','',10);

		//impresion de datos obtenidos desde la BD
		 while($row = mysql_fetch_array($result)){
			  $pdf->Cell(30,4,$row["ndifunto"],1,0,'C');
			  $pdf->Cell(35,4,$row["crema_o_inhu"],1,0,'C');
			  $pdf->Cell(35,4,$row["usuario"],1,0,'C');
			  $pdf->Cell(0,4,$row["servicios"],1,1,'C');

		  }//fin del while	
		
		 //libera memoria
		mysql_free_result ($result);

		//genera el PDF en el Navegador
		$pdf->Output();  
		//genera el PDF en un archivo
	    //$pdf->Output("d:\ReporteIMC.pdf");  			 
?>