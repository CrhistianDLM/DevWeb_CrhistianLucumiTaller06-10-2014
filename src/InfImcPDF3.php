<?php
 
	//Código para incluir las librerias
	 include_once("conexion.php");
	 include('MyFPDF.php');

	 //Conexión con el servidor
	  $link=ConectarseServidor();

	 //Conexión con la base de datos
	  ConectarseBaseDatos($link);

	 //realiza consulta a la base de datos
	 $sql = "select * from dwbitacora"; 
     
     $result=mysql_query($sql,$link);

	   
	   //inclusión de rutinas para crear informes PDF
	   $pdf=new MyFPDF();
	   $pdf->AddPage('P');
	   $pdf->SetFont('Arial','B',11);
	   $pdf->Cell(0,8,"Bitacora",0,0,'C',0);
	   $pdf->Cell(0,20,"",0,1,'',0);

		//titulos de las columnas
		$pdf->SetTextColor(0,0,0); //rgb	
		 $pdf->Cell(20,4,'Fecha',1,0,'C');	
	$pdf->Cell(26,4,'Hora',1,0,'C');	
	$pdf->Cell(26,4,'Usuario',1,0,'C');	
			$pdf->Cell(24,4,'Que Registro',1,0,'C');	

	$pdf->Cell(0,4,'Descripcion',1,1,'L');		

		$pdf->SetFont('Arial','',10);

		//impresion de datos obtenidos desde la BD
		 while($row = mysql_fetch_array($result)){
			  $pdf->Cell(20,4,$row["fecha"],1,0,'C');
			  $pdf->Cell(26,4,$row["hora"],1,0,'C');
			  $pdf->Cell(26,4,$row["usuario"],1,0,'C');
			  			  $pdf->Cell(24,4,$row["que_registro"],1,0,'C');

			  $pdf->Cell(0,4,$row["decripcion"],1,0,'L');

		  }//fin del while	
		
		 //libera memoria
		mysql_free_result ($result);

		//genera el PDF en el Navegador
		$pdf->Output();  
		//genera el PDF en un archivo
	    //$pdf->Output("d:\ReporteIMC.pdf");  			 
?>