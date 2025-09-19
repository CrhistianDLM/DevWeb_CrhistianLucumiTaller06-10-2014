$( document ).ready(function(){

    //valida el boton para generar las acciones del evento
    $("#btnTraducir").click(function(){
     text= $("#txtLetra").val();

     traducir(text);

    }
      );
     $("#btnVoz").click(function(){
     text= $("#txtLetra").val();
meSpeak.speak(text);
   //  traducir(text);

    }
      );
	$("#btnConvertir").click(function(){
	
	   //obtiene la informacion de la caja de texto de peso
    	numero = getNC();
		numeroc=parseInt(numero);
		val=NumeroALetras(numeroc);
	   //obtiene la informacion de la caja de texto de estatura
 		getFN(val);
		
		//inicializa la clasificacion
		lInversa = getFD(val.trim());
		
		nInversa=invertirNum();
		//familiar=getFAM();
		//realiza el calculo de la masa corporal
	    
			
		
		//proceso para enviar datos a php por medio de ajax
		//las variables son capturadas con JSON (  key:value)
        //donde key es la variable definida y debe ser igual a la que reciba el servidor php y value es la variable local)  
		
		$.ajax({
			//construye la ruta donde se encuentra el archivo php
			url: "src/newRegister.php",
			//define las variables
			data: {
					nombre: nCompleto,
					nacio: fNacimiento,
					fallecio: fDisfuncion,
					familiar:familiar,
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
	
		$.getJSON( "src/getRegister.php", function( data ) {
		
		console.log("do request" , data);
		
		$("#BodyTable").html("");
		
		var items = [];
				
		$.each( data, function( key, val ) {
		
		

			$("#BodyTable").append("<tr>\
										<th>" + val.nombre + "</th>\
										<th>" + val.f_naci + "</th>\
										<th>" + val.f_disf + "</th>\
										<th>" + val.familiar + "</th>\
										<th>" + val.usuario + "</th>\
									</tr>");
		});
	
	});

}

//obtiene la informacion de la caja de texto peso
function getNC(){

	peso  = $("#txtNumero").val();
	return peso;

}

//obtiene la informacion de la caja de texto estatura
function getFN(n){

	$("#txtLetra").val(n);

}//fin del metodo getEstatura

//obtiene la informacion de la caja de texto imc
function getFD(m){
mi="";
for(var i=m.length-1;i>-1;i--){
	mi+=m[i];
	}
$("#txtInverso").val(mi);

}
function getnI(ni){

$("#txtNInverso").val(ni);

}
function getFAM(m){


	$("#txtTI").val(m);

}
function invertirNum(){
nNor=getNC();
ninv="";
for(var i=nNor.length-1;i>-1;i--){
ninv+=nNor[i];
}
getnI(ninv);
}

//********************************************************************************************************************
//Desde aqui inician funciones de conversion
//Bajado de Internet
//********************************************************************************************************************

function Unidades(num){

  switch(num)
  {
    case 1: return "UNO";
    case 2: return "DOS";
    case 3: return "TRES";
    case 4: return "CUATRO";
    case 5: return "CINCO";
    case 6: return "SEIS";
    case 7: return "SIETE";
    case 8: return "OCHO";
    case 9: return "NUEVE";
  }

  return "";
}

function Decenas(num){

  decena = Math.floor(num/10);
  unidad = num - (decena * 10);

  switch(decena)
  {
    case 1:   
      switch(unidad)
      {
        case 0: return "DIEZ";
        case 1: return "ONCE";
        case 2: return "DOCE";
        case 3: return "TRECE";
        case 4: return "CATORCE";
        case 5: return "QUINCE";
        default: return "DIECI" + Unidades(unidad);
      }
    case 2:
      switch(unidad)
      {
        case 0: return "VEINTE";
        default: return "VEINTI" + Unidades(unidad);
      }
    case 3: return DecenasY("TREINTA", unidad);
    case 4: return DecenasY("CUARENTA", unidad);
    case 5: return DecenasY("CINCUENTA", unidad);
    case 6: return DecenasY("SESENTA", unidad);
    case 7: return DecenasY("SETENTA", unidad);
    case 8: return DecenasY("OCHENTA", unidad);
    case 9: return DecenasY("NOVENTA", unidad);
    case 0: return Unidades(unidad);
  }
}//Unidades()

function DecenasY(strSin, numUnidades){
  if (numUnidades > 0)
    return strSin + (activeLanguage == ESP ? " Y " : "") + Unidades(numUnidades)

  return strSin;
}//DecenasY()

function Centenas(num){

  centenas = Math.floor(num / 100);
  decenas = num - (centenas * 100);

  switch(centenas)
  {
    case 1:
      if (decenas > 0)
        return "CIENTO " + Decenas(decenas);
      return "CIEN";
    case 2: return "DOSCIENTOS " + Decenas(decenas);
    case 3: return "TRESCIENTOS " + Decenas(decenas);
    case 4: return "CUATROCIENTOS " + Decenas(decenas);
    case 5: return "QUINIENTOS " + Decenas(decenas);
    case 6: return "SEISCIENTOS " + Decenas(decenas);
    case 7: return "SETECIENTOS " + Decenas(decenas);
    case 8: return "OCHOCIENTOS " + Decenas(decenas);
    case 9: return "NOVECIENTOS " + Decenas(decenas);
  }

  return Decenas(decenas);
}//Centenas()

function Seccion(num, divisor, strSingular, strPlural){
  cientos = Math.floor(num / divisor)
  resto = num - (cientos * divisor)

  letras = "";

  if (cientos > 0)
    if (cientos > 1)
      letras = Centenas(cientos) + " " + strPlural;
    else
      letras = strSingular;

  if (resto > 0)
    letras += "";

  return letras;
}//Seccion()

function Miles(num){
  divisor = 1000;
  cientos = Math.floor(num / divisor)
  resto = num - (cientos * divisor)

  strMiles = Seccion(num, divisor, "UN MIL", "MIL");
  strCentenas = Centenas(resto);

  if(strMiles == "")
    return strCentenas;

  return strMiles + " " + strCentenas;

  //return Seccion(num, divisor, "UN MIL", "MIL") + " " + Centenas(resto);
}//Miles()

function Millones(num){
  divisor = 1000000;
  cientos = Math.floor(num / divisor)
  resto = num - (cientos * divisor)

  strMillones = Seccion(num, divisor, "UN MILLON", "MILLONES");
  strMiles = Miles(resto);

  if(strMillones == "")
    return strMiles;

  return strMillones + " " + strMiles;

  //return Seccion(num, divisor, "UN MILLON", "MILLONES") + " " + Miles(resto);
}//Millones()

function NumeroALetras(num){
  var data = {
    numero: num,
    enteros: Math.floor(num),
    centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
    letrasCentavos: "",
    letrasMonedaPlural: "",
    letrasMonedaSingular: ""
  };

  if (data.centavos > 0)
    data.letrasCentavos = "CON " + data.centavos + "/100";

  if(data.enteros == 0)
    return "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
  if (data.enteros == 1)
    return Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
  else
    return Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
}//NumeroALetras()



function traducir(palabra) 
{

  /*
   google.load("language", "1"); 
  var text = palabra;    
  google.language.translate(text, "es", "en",resultadoTraduccion);    
  */
  activeLanguage = ENG;
  numero = getNC();
  numeroc=parseInt(numero);
  val=NumeroALetras(numeroc);
  activeLanguage = ESP;
  let divtraduccion = document.getElementById("txtTI");         
  divtraduccion.value = val;
  console.log(val)

}    

function resultadoTraduccion(result) 
{            
  var divtraduccion = document.getElementById("txtTI");            
  if (result.translation) 
    divtraduccion.innerHTML = result.translation;            
}  