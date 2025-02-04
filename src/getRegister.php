 <?php

	//Código para incluir las librerias
	 include_once("conexion.php");


	 //Conexión con el servidor
	  $link=ConectarseServidor();

	 //Conexión con la base de datos
	  ConectarseBaseDatos($link);

	 //realiza consulta a la base de datos
	 $sql = "select * from dwdifunto"; 
     
     $result=mysql_query($sql,$link);
	 
		while($row = mysql_fetch_array($result)){
			$datos   = array('nombre' => $row['nombre'] , 'f_naci' => $row['f_naci'] , 'f_disf' => $row['f_disf'], 'familiar' => $row['familiar'], 'usuario' => $row['usuario']);
		    $rows[]     = $datos;
		}

	/*Función para desconectarse de la base de datos*/
	desconectarse($link);//cierra la conexion

    echo json_encode($rows);
 	
?>