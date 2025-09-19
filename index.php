 <!DOCTYPE html>
 <html>

 <head>
 	<title>Convertidor de letras en numeros</title>
 	<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
 	<script type="text/JavaScript" src="js/jQuery.js"></script>
 	<script type="text/JavaScript" src="js/forms.js"></script>
 	<script type="text/JavaScript" src="js/Reporte.js"></script>
 	<script type="text/JavaScript" src="js/convertidoraletra.js"></script>
	<script type="text/javascript" src="http://www.google.com/jsapi">
 		google.load("language", "1");
 	</script>
 	<script type="text/javascript" src="utils/mespeak/mespeak.js" async onload="loadMSpeak()"></script>
 	<script type="text/javascript">
 		//meSpeak.loadConfig("utils/mespeak/mespeak_config.json");
 		function loadMSpeak(){
			loadVoice(getLanguage());

 		function loadVoice(id) {
 			var fname = "voices/" + id + ".json";
 			meSpeak.loadVoice(fname, voiceLoaded);
 		}

 		function voiceLoaded(success, message) {
 			if (success) {
 				alert("Voice loaded: " + message + ".");
 			} else {
 				alert("Failed to load a voice: " + message);
 			}

 		}
		}
 	</script>
 </head>

 <body data-twttr-rendered="true">
 	<div class="container">

 		<div class="row">
 			<div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
 				<form role="form">
 					<input type="hidden" id="hidden" name="new" value="new">
 					<h2>Convertidor de letras en numeros</h2>
 					<br><br>
 					<h3>De Letra a Numero</h3>
 					<hr class="colorgraph">
 					<div class="row">
 						<div class="col-xs-12 col-sm-6 col-md-6">
 							<div class="form-group">
 								<input type="text" name="txtNumero" id="txtNumero" class="form-control input-lg" placeholder="Numero (0-100)" tabindex="1">
 							</div>
 						</div>
 						<div class="col-xs-12 col-sm-6 col-md-6">
 							<div class="form-group">
 								<input type="text" name="txtLetra" id="txtLetra" class="form-control input-lg" placeholder="Letras" tabindex="2">
 							</div>
 						</div>
 					</div>
 					<div class="form-group">
 						<input type="text" name="txtInverso" id="txtInverso" class="form-control input-lg" placeholder="Texto Invertido" tabindex="3">
 					</div>

 					<div class="row">
 						<div class="col-xs-12 col-sm-6 col-md-6">
 							<div class="form-group">
 								<input type="text" name="txtNInverso" id="txtNInverso" class="form-control input-lg" placeholder="Numero Invertido" tabindex="4">
 							</div>
 						</div>
 						<div class="col-xs-12 col-sm-6 col-md-6">
 							<div class="form-group">
 								<input type="text" name="txtTI" id="txtTI" class="form-control input-lg" placeholder="Texto en ingles" tabindex="5">
 							</div>
 						</div>
 					</div>

 					<hr class="colorgraph">
 					<div class="row">
 						<div style="margin-bottom:8px;" class="col-xs-12 col-md-6">
 							<div class="btn btn-primary btn-block btn-lg" tabindex="7" id="btnConvertir">Convertir</div>
 						</div>
 						<div style="margin-bottom:8px;" class="col-xs-12 col-md-6">
 							<div class="btn btn-primary btn-block btn-lg" tabindex="7" id="btnGuardar">Guardar</div>
 						</div>
 						<div class="col-xs-12 col-md-6">
 							<div class="btn btn-primary btn-block btn-lg" tabindex="7" id="btnConsultar">Consultar</div>
 						</div>
 						<div class="col-xs-12 col-md-6">
 							<div class="btn btn-primary btn-block btn-lg" tabindex="8" id="btnTraducir">Traducir</div>
 						</div>
 						<div class="col-xs-12 col-md-6">
 							<div class="btn btn-primary btn-block btn-lg" tabindex="8" id="btnVoz">Voz</div>
 						</div>
 						<div class="col-xs-12 col-md-6"><input type="reset" class="btn btn-primary btn-block btn-lg" tabindex="7" id="btnLimpiar" value="Limpiar" /></div>


 						<img src="img/pdf.gif" onClick="generarPDF();">
 						<img src="img/pdf.gif" onClick="generarPDF3();">
 						<img src="img/audio.png" width="24" onClick="">
 					</div>
 				</form>
 			</div>
 		</div>
 	</div>
 </body>
 <div class="container">
 	<div class="row">
 		<table class="table">
 			<thead>
 				<tr>
 					<th>
 						Numero
 					</th>
 					<th>
 						Letras
 					</th>
 					<th>
 						Texto invertido
 					</th>
 					<th>
 						Texto en ingles
 					</th>
 					<th>
 						Sonido
 					</th>
 				</tr>
 			</thead>
 			<tbody id="BodyTable">

 			</tbody>
 		</table>
 	</div>
 </div>

 </html>