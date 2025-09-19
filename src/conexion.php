<?php
	function ConectarseServidor()
	{
		if (!($link=mysqli_connect("localhost","devepweb","hA1I_!iX!QKl3v5/", null, 8889)))
		{
			echo "Error conectando a la base de datos.";
			exit();
		}
		//echo "Conexi�n con la base de datos conseguida.<br>";
		return $link;
	}

	function ConectarseBaseDatos($link)
	{
		if (!mysqli_select_db($link, "datosnumeros"))
		{
			echo "Error seleccionando la base de datos.";
			exit();
		}
		//echo "Selecci�n con la base de datos conseguida.<br>";
	}

	function desconectarse($link)
	{
		if(!mysqli_close($link))
		{
			echo "FALLO CERRANDO LA CONEXION";
			exit();
		}; //cierra la conexion
		//echo "se cerro la base de datos";
	}

	function consultas($link, $consulta)
	{
		$respuesta=mysqli_query($link, $consulta) or die(mysqli_error($link));
		return $respuesta;
	}
	
	
?>