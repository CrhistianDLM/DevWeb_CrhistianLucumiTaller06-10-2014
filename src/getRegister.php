 <?php

	//Código para incluir las librerias
	 include_once("conexion.php");


	 //Conexión con el servidor
	  $link=ConectarseServidor();

	 //Conexión con la base de datos
	  ConectarseBaseDatos($link);

	 //realiza consulta a la base de datos
	 $sql = "select * from dwnumeros"; 
     
     $result=consultas($link,$sql);
	 
		while($row = mysqli_fetch_array($result)){
			$datos   = array('nombre' => $row['numero'] , 'f_naci' => $row['letra'] , 'f_disf' => $row['inverso'], 'familiar' => $row['ninverso'], 'usuario' => $row['ti']);
		    $rows[]     = $datos;
		}

	/*Función para desconectarse de la base de datos*/
	desconectarse($link);//cierra la conexion

    echo json_encode($rows);
 	
?>