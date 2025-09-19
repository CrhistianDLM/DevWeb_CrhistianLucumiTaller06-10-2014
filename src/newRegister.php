<?php

	//Código para incluir las librerias
	include_once("conexion.php");

	//Conexión con el servidor
	$link = ConectarseServidor();

	//Conexión con la base de datos
	ConectarseBaseDatos($link);

	$datee = getdate();
	date_default_timezone_set('America/Bogota');
	$hora = date("g - H - a");
	$fecha = date("Y") . "-" . date("m") . "-" . date("d");

	//obtiene la informacion de las variables inmersas en el calculo del indice de masa corporal
	$numero     		= $_POST["txtNumero"];
	$letra 		= $_POST["txtLetra"];
	$inverso      		= $_POST["txtInverso"];
	$ninverso      		= $_POST["txtNInverso"];
	$ti	= $_POST["txtTI"];

	//construye cadena con sentencia sql
	$query = "INSERT INTO dwnumeros (numero, letra, inverso, ninverso, ti, created_at) VALUES ('$numero', '$letra','$inverso','$ninverso', '$ti', '$fecha')";

	/*Ejecución de la inserción*/
	$respuesta = consultas($link, $query);
	/*Función para desconectarse de la base de datos*/
	


	desconectarse($link); //cierra la conexion

	?>