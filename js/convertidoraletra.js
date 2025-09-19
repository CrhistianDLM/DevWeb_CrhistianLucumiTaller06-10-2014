const ENG = "en";
const ESP = "es";
let activeLanguage = ESP;
$( document ).ready(function(){
 
    //valida el boton para generar las acciones del evento
	$("#btnConvertir").click(function(){
	
	   //obtiene la informacion de la caja de texto de peso
    	numero = getNumero();
	    			   
	    letras = NumeroALetras(numero);
		
		$("#txtLetras").val(letras); 
	  
	
	});

});


//obtiene la informacion de la caja de texto numero
function getNumero(){

	numero  = $("#txtNumero").val();
	return numero;

}
//********************************************************************************************************************
//Desde aqui inician funciones de conversion
//Bajado de Internet
//********************************************************************************************************************

function Unidades(num){

  switch(num)
  {
    case 1: return getText("UNO");
    case 2: return getText("DOS");
    case 3: return getText("TRES");
    case 4: return getText("CUATRO");
    case 5: return getText("CINCO");
    case 6: return getText("SEIS");
    case 7: return getText("SIETE");
    case 8: return getText("OCHO");
    case 9: return getText("NUEVE");
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
        case 0: return getText("DIEZ");
        case 1: return getText("ONCE");
        case 2: return getText("DOCE");
        case 3: return getText("TRECE");
        case 4: return getText("CATORCE");
        case 5: return getText("QUINCE");
        default: return getLanguage() == ESP ? getText("DIECI" + Unidades(unidad)) : getText(Unidades(unidad)+"TEEN");
      }
    case 2:
      switch(unidad)
      {
        case 0: return getText("VEINTE");
        default: return getText("VEINTI") + Unidades(unidad);
      }
    case 3: return DecenasY(getText("TREINTA"), unidad);
    case 4: return DecenasY(getText("CUARENTA"), unidad);
    case 5: return DecenasY(getText("CINCUENTA"), unidad);
    case 6: return DecenasY(getText("SESENTA"), unidad);
    case 7: return DecenasY(getText("SETENTA"), unidad);
    case 8: return DecenasY(getText("OCHENTA"), unidad);
    case 9: return DecenasY(getText("NOVENTA"), unidad);
    case 0: return Unidades(unidad);
  }
}//Unidades()

function DecenasY(strSin, numUnidades){
  if (numUnidades > 0)
    return strSin + (getLanguage() == ESP ? " Y " : "") + Unidades(numUnidades)

  return strSin;
}//DecenasY()

function Centenas(num){

  centenas = Math.floor(num / 100);
  decenas = num - (centenas * 100);

  switch(centenas)
  {
    case 1:
      if (decenas > 0)
        return getLanguage() == ESP ?( "CIENTO"+" " + Decenas(decenas)) : ("ONE HUNDRED "+ Decenas(decenas));
      return getText("CIEN");
    case 2: return getText("DOSCIENTOS")+" " + Decenas(decenas);
    case 3: return getText("TRESCIENTOS")+" " + Decenas(decenas);
    case 4: return getText("CUATROCIENTOS")+" " + Decenas(decenas);
    case 5: return getText("QUINIENTOS")+" " + Decenas(decenas);
    case 6: return getText("SEISCIENTOS")+" " + Decenas(decenas);
    case 7: return getText("SETECIENTOS")+" " + Decenas(decenas);
    case 8: return getText("OCHOCIENTOS")+" " + Decenas(decenas);
    case 9: return getText("NOVECIENTOS")+" " + Decenas(decenas);
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

  strMiles = Seccion(num, divisor, getText("UN MIL"), getText("MIL"));
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

  strMillones = Seccion(num, divisor, getText("UN MILLON"), getText("MILLONES"));
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
    data.letrasCentavos = getText("CON")+" " + data.centavos + "/100";

  if(data.enteros == 0)
    return getText("CERO")+ " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
  if (data.enteros == 1)
    return Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
  else
    return Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
}//NumeroALetras()

function getText(text){
  const espTextList = {
    "CERO": "CERO",    
    "CON": "CON",    
    "UN MILLON": "UN MILLON",    
    "MILLONES": "MILLONES",    
    "UN MIL": "UN MIL",    
    "UNO": "UNO",
    "DOS": "DOS",
    "TRES": "TRES",
    "CUATRO": "CUATRO",
    "CINCO": "CINCO",
    "SEIS": "SEIS",
    "SIETE": "SIETE",
    "OCHO": "OCHO",
    "NUEVE": "NUEVE",
    "DIEZ":"DIEZ",
    "ONCE":"ONCE",
    "DOCE":"DOCE",
    "TRECE":"TRECE",
    "CATORCE":"CATORCE",
    "QUINCE":"QUINCE",
    "VEINTE":"VEINTE",
    "VEINTI":"VEINTI",
    "TREINTA": "TREINTA",
    "CUARENTA": "CUARENTA",
    "CINCUENTA": "CINCUENTA",
    "SESENTA": "SESENTA",
    "SETENTA": "SETENTA",
    "OCHENTA": "OCHENTA",
    "NOVENTA": "NOVENTA",
    "CIEN": "CIEN",
    "DOSCIENTOS": "DOSCIENTOS",
    "TRESCIENTOS": "TRESCIENTOS",
    "CUATROCIENTOS": "CUATROCIENTOS",
    "QUINIENTOS": "QUINIENTOS",
    "SEISCIENTOS": "SEISCIENTOS",
    "SETECIENTOS": "SETECIENTOS",
    "OCHOCIENTOS": "OCHOCIENTOS",
    "NOVECIENTOS": "NOVECIENTOS",
  };
  const engTextList = {
    "CERO": "ZERO",    
    "CON": "WITH",    
    "UN MILLON": "ONE MILLION",    
    "MILLONES": "MILLIONS",    
    "UN MIL": "ONE THOUSAND",   
    "UNO": "ONE",
    "DOS": "TWO",
    "TRES": "THREE",
    "CUATRO": "FOUR",
    "CINCO": "FIVE",
    "SEIS": "SIX",
    "SIETE": "SEVEN",
    "OCHO": "EIGHT",
    "NUEVE":  "NINE",    
    "DIEZ": "TEN",
    "ONCE": "ELEVEN",
    "DOCE": "TWELVE",
    "TRECE": "THIRTEEN",
    "CATORCE": "FOURTEEN",
    "QUINCE": "FIFTEEN",
    "VEINTE":  "TWENTY",
    "VEINTE":  "TWENY",
    "TREINTA": "THIRTY",
    "CUARENTA": "FORTY",
    "CINCUENTA": "FIFTY",
    "SESENTA": "SIXTY",
    "SETENTA": "SEVENTY",
    "OCHENTA": "EIGHTY",
    "NOVENTA": "NINETY",
    "CIEN": "ONE HUNDRED",
    "DOSCIENTOS": "TWO HUNDRED",
    "TRESCIENTOS": "THREE HUNDRED",
    "CUATROCIENTOS": "FOUR HUNDRED",
    "QUINIENTOS": "FIVE HUNDRED",
    "SEISCIENTOS": "SIX HUNDRED",
    "SETECIENTOS": "SEVEN HUNDRED",
    "OCHOCIENTOS": "EIGHT HUNDRED",
    "NOVECIENTOS": "NINE HUNDRE",
  };
  if(getLanguage() == ENG){
    return engTextList[text];
  }
  return espTextList[text];
}

function getLanguage(){
  return activeLanguage;
}