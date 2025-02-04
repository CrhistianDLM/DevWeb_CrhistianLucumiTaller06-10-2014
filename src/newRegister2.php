<?php

       //Código para incluir las librerias
	   include_once("conexion.php");

	   //Conexión con el servidor
	   $link=ConectarseServidor();

	   //Conexión con la base de datos
	    ConectarseBaseDatos($link);

	  	
		//obtiene la informacion de las variables inmersas en el calculo del indice de masa corporal
		$nombre     		= $_POST["nombre"];
		$creoinh 		= $_POST["creoinh"];
		$servis      		= $_POST["servis"];
		$usuario	= $_POST["usuario"];
		
		//construye cadena con sentencia sql
		$query = "INSERT INTO dwservicios (ndifunto, crema_o_inhu, servicios, usuario) VALUES ('$nombre', '$creoinh','$servis', '$usuario')";
		
        /*Ejecución de la inserción*/
	     $respuesta=consultas($query);
    	/*Función para desconectarse de la base de datos*/
		$datee=getdate();
date_default_timezone_set('America/Bogota');
$hora=date("g - H - a");
$fecha= date("Y")."-".date("m")."-".date("d");


$decripti="El Usuario ". $usuario. " ha guardado los servicios del difunto ". $nombre. " en la fecha ". $fecha;
$consultas="insert into dwbitacora values('$fecha', '$hora','$usuario', '$decripti', 'servicios')";
	$respuestas=consultas($consultas);

	    desconectarse($link);//cierra la conexion
 	
?>