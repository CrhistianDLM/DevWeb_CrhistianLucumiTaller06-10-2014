$( document ).ready(function(){
 
    //valida el boton para generar las acciones del evento
	$("#btnCalcular").click(function(){
	
	   //obtiene la informacion de la caja de texto de peso
		nCompleto = getNdif();
	   //obtiene la informacion de la caja de texto de estatura
 		opcion  = getCOI();
		
		//inicializa la clasificacion
		nOpciones = getTranspo();

		usuario=getUS();
		//realiza el calculo de la masa corporal
	    
		
		//proceso para enviar datos a php por medio de ajax
		//las variables son capturadas con JSON (  key:value)
        //donde key es la variable definida y debe ser igual a la que reciba el servidor php y value es la variable local)  
		
		$.ajax({
			//construye la ruta donde se encuentra el archivo php
			url: "src/newRegister2.php",
			//define las variables
			data: {
					nombre: nCompleto,
					creoinh: opcion,
					servis: nOpciones,
					usuario: usuario
			},
			type: "POST",
			context: document.body
		}).done(function( data ) {		
			console.log("Datos" , data );
			getValues();
		});

	});

});

//funcion para obtener los datos y mostrarlos en el formulario
function getValues(){
	
	console.log("Ingresar Valores");
	
		$.getJSON( "src/getRegister2.php", function( data ) {
		
		console.log("do request" , data);
		
		$("#BodyTable").html("");
		
		var items = [];
				
		$.each( data, function( key, val ) {
		
		

			$("#BodyTable").append("<tr>\
										<th>" + val.ndifunto + "</th>\
										<th>" + val.crema_o_inhu + "</th>\
										<th>" + val.servicios + "</th>\
										<th>" + val.usuario + "</th>\
									</tr>");
		});
	
	});

}

//obtiene la informacion de la caja de texto peso
function getNdif(){

	peso  = $("#txtNdifunto").val();
	return peso;

}

//obtiene la informacion de la caja de texto estatura
function getCOI(){

	estatura  = $("#txtCOI").val();
	return estatura;

}//fin del metodo getEstatura

//obtiene la informacion de la caja de texto imc
function getTranspo(){
imc = document.getElementsByName("transporte[]");
union="";
	for (i=0;i<imc.length;i++){
		if(imc[i].checked){
		union+=imc[i].value+", ";
		}
		}
	return union=union.substring(0, union.length-2);

}
function getUS(){

	usu = $("#txtUS").val();
	return usu;

}
