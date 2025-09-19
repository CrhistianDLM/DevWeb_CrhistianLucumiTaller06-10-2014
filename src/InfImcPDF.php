<?php
 
	//C�digo para incluir las librerias
	 include_once("conexion.php");
	 include('MyFPDF.php');

	 //Conexi�n con el servidor
	  $link=ConectarseServidor();

	 //Conexi�n con la base de datos
	  ConectarseBaseDatos($link);

	 //realiza consulta a la base de datos
	 $sql = "select * from dwnumeros"; 
     
     $result=consultas($link, $sql);

	   
	   //inclusi�n de rutinas para crear informes PDF
	   $pdf=new MyFPDF();
	   $pdf->AddPage('P');
	   $pdf->SetFont('Arial','B',11);
	   $pdf->Cell(0,8,"Numeros",0,0,'C',0);
	   $pdf->Cell(0,20,"",0,1,'',0);

		//titulos de las columnas
		$pdf->SetTextColor(0,0,0); //rgb	
		
		$pdf->Cell(20,5,mb_convert_encoding('Número', 'ISO-8859-1', 'UTF-8'),1,0,'C');	
		$pdf->Cell(55,5,'Letras',1,0,'C');	
		$pdf->Cell(55,5,'Texto invertido',1,0,'C');	
		//$pdf->Cell(35,5,'Numero invertido',1,0,'C');	
		$pdf->Cell(20,5,mb_convert_encoding('Invertido', 'ISO-8859-1', 'UTF-8'),1,0,'C');	

		$pdf->Cell(0,5,'Texto en ingles',1,1,'C');	
		$pdf->SetFont('Arial','',10);

		//impresion de datos obtenidos desde la BD
		 while($row = mysqli_fetch_array($result)){
			  $pdf->Cell(20,4,$row["numero"],1,0,'C');
			  $pdf->Cell(55,4,$row["letra"],1,0,'C');
			  $pdf->Cell(55,4,$row["inverso"],1,0,'C');
			  $pdf->Cell(20,4,$row["ninverso"],1,0,'C');
			  $pdf->Cell(0,4,$row["ti"],1,1,'C');
		  }//fin del while	
		
		 //libera memoria
		mysqli_free_result ($result);

		//genera el PDF en el Navegador
		$pdf->Output();  
		//genera el PDF en un archivo
	    //$pdf->Output("d:\ReporteIMC.pdf");  			 
?>