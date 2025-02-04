 <!DOCTYPE html>
<html>
    <head>
        <title>Calculo de Indice Masa Corporal</title>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
        <script type="text/JavaScript" src="js/jQuery.js"></script>
        <script type="text/JavaScript" src="js/forms2.js"></script> 
		<script type="text/JavaScript" src="js/Reporte.js"></script> 
    </head>
    <body data-twttr-rendered="true">
		<div class="container">

			<div class="row">
			    <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
					<form role="form">
						<input type="hidden" id="hidden" name="new"  value="new">
						<h2>Funeraria "los Inolvidables"</h2>
                        <br>
                        <h3>Servicios</h3>
						<hr class="colorgraph">
						<div class="row">
							<div class="col-xs-12 col-sm-6 col-md-6">
								<div class="form-group">
			                        <input type="text" name="txtNdifunto" id="txtNdifunto" class="form-control input-lg" placeholder="nombre del difunto" tabindex="1">
								</div>
							</div>
							<div class="col-xs-12 col-sm-6 col-md-6">
								<div class="form-group">
									
                                     <select name="txtCOI" id="txtCOI" class="form-control input-lg" tabindex="2"> 
       <option value="Cremacion">Cremacion</option> 
       <option value="inhumacion">inhumacion</option> 
     </select><br>
								</div>
							</div>
						</div>
						
						
					<div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
							<div class="form-group">
			                  <br>      
                              <center>Preparacion <input type="checkbox" name="transporte[]"  value=       "Preparacion"class="form-control input-lg">
                              
							   Iglesia<input type="checkbox" name="transporte[]" value="Iglesia" class="form-control input-lg" checked>
								</center>	
                            </div>
                            </div>

                    <div class="col-xs-12 col-sm-6 col-md-6">
							<div class="form-group">

<center>Ataud</center><input type="checkbox" name="transporte[]" value="Ataud"class="form-control input-lg">
  <br>
<center>Embalsamiento   </center><input type="checkbox" name="transporte[]" value="Embalsamiento" class="form-control input-lg">
								</div>
						</div>
                        </div>

						<div class="row">
								<div class="form-group">
									<input type="text" name="txtUS" id="txtUS" class="form-control input-lg" placeholder="Usuario" tabindex="5">
								</div>
							</div>
						<hr class="colorgraph">
						<div class="row">
							<div class="col-xs-12 col-md-6"><div class="btn btn-primary btn-block btn-lg" tabindex="7" id="btnCalcular">Calcular</div></div>
                            <div class="col-xs-12 col-md-6"><a class="btn btn-primary btn-block btn-lg" tabindex="8" href="index.php">Ir a Difunto</a></div>
							<img src="img/pdf.gif" onClick="generarPDF2();">
                            <img src="img/pdf.gif" onClick="generarPDF3();">

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
	    				Nombres Completos
	    			</th>
	    			<th>
	    				Fecha de Nacimiento
	    			</th>
	    			<th>
	    				Fecha de Disfuncion
	    			</th>
                   
                    <th>
                        Usuario
                    </th>
	    		</tr>	
	    	</thead>
	    	<tbody id="BodyTable">

	    	</tbody>
	    </table>
    </div>
	</div>
</html>