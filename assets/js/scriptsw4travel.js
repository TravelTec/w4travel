jQuery(document).ready(function(){ 
	var url_atual = window.location;
	if(url_atual.search == "?page=w4travel"){
		jQuery("h2").attr("style", "margin: 0");
		jQuery(".form-table th").attr("style", "padding: 0;width: 300px;font-weight: 400;position: absolute;margin-left: 26px;margin-top:6px;height: 30px;");
		jQuery(".form-table td").attr("style", "padding: 0;position: relative;");

		jQuery(".classe-html-tr").attr("style", "height:30px"); 

		jQuery(".submit").attr("style", "position:absolute;z-index:9999");

	  	if(jQuery("#licenseIugu").val() == "0"){
	  		jQuery(".classe-html-tr").remove();
	  		jQuery("h3").remove();
	  		jQuery(".afiliadoBooking").remove();
	  		jQuery(".form-table").attr("style", "margin: 0");
	  		jQuery("#importData").remove();

	  		jQuery(".button").attr("onclick", "checkLicenseIugu()");
	  	}else{
	  		jQuery("h4").remove();
	  		jQuery(".textLicense").remove();
	  	}
	}
});

function changeValueCheckboxContent(){
	var valueCheckboxContent = 0;
	if(jQuery("#valueCheckGetContent").is(':checked') == true){
		valueCheckboxContent = 1;
		jQuery("#valueCheckGetContent").attr("checked", "checked");
		jQuery("#valueCheckGetContent").prop("checked");
	}else{
		jQuery("#valueCheckGetContent").removeAttr("checked");
	}
	jQuery("#valueCheckGetContent").val(valueCheckboxContent);
}

function changeValueAfiliadoBooking(){
	var valueAfiliadoBooking = 0;
	if(jQuery("#valueAfiliadoBooking").is(':checked') == true){
		valueAfiliadoBooking = 1;
		jQuery("#valueAfiliadoBooking").attr("checked", "checked");
		jQuery("#valueAfiliadoBooking").prop("checked");

		jQuery(".afiliadoBooking").show();
		jQuery(".afiliadoBooking").attr("style", "margin: 8px auto;");
		jQuery("#valueAfiliadoBooking").attr("style", "margin-top: 8px;");
	}else{
		jQuery("#valueAfiliadoBooking").removeAttr("checked");
		jQuery("#valueAfiliadoBooking").removeAttr("style");
		jQuery(".afiliadoBooking").hide();
		jQuery("#setValueAfiliadoBooking").val('');
	}
	jQuery("#valueAfiliadoBooking").val(valueAfiliadoBooking); 
}

function changeValueAfiliadoPromoPassagens(){
	var valueAfiliadoPromoPassagens = 0;
	if(jQuery("#valueAfiliadoPromoPassagens").is(':checked') == true){
		valueAfiliadoPromoPassagens = 1;
		jQuery("#valueAfiliadoPromoPassagens").attr("checked", "checked");
		jQuery("#valueAfiliadoPromoPassagens").prop("checked");

		jQuery(".afiliadoPromoPassagens").show();
		jQuery(".afiliadoPromoPassagens").attr("style", "margin: 8px auto;");
		jQuery("#valueAfiliadoPromoPassagens").attr("style", "margin-top: 8px;");
	}else{
		jQuery("#valueAfiliadoPromoPassagens").removeAttr("checked");
		jQuery("#valueAfiliadoPromoPassagens").removeAttr("style");
		jQuery(".afiliadoPromoPassagens").hide();
		jQuery("#setValueAfiliadoPromoPassagens").val('');
	}
	jQuery("#valueAfiliadoPromoPassagens").val(valueAfiliadoPromoPassagens);
}

function changeValueAfiliadoPromoSeguroViagem(){
	var valueAfiliadoPromoSeguroViagem = 0;
	if(jQuery("#valueAfiliadoPromoSeguroViagem").is(':checked') == true){
		valueAfiliadoPromoSeguroViagem = 1;
		jQuery("#valueAfiliadoPromoSeguroViagem").attr("checked", "checked");
		jQuery("#valueAfiliadoPromoSeguroViagem").prop("checked");

		jQuery(".afiliadoPromoSeguroViagem").show();
		jQuery(".afiliadoPromoSeguroViagem").attr("style", "margin: 8px auto;");
		jQuery("#valueAfiliadoPromoSeguroViagem").attr("style", "margin-top: 8px;");
	}else{
		jQuery("#valueAfiliadoPromoSeguroViagem").removeAttr("checked");
		jQuery("#valueAfiliadoPromoSeguroViagem").removeAttr("style");
		jQuery(".afiliadoPromoSeguroViagem").hide();
		jQuery("#setValueAfiliadoPromoSeguroViagem").val('');
	}
	jQuery("#valueAfiliadoPromoSeguroViagem").val(valueAfiliadoPromoSeguroViagem);
}

function changeValueAfiliadoViatorPasseios(){
	var valueAfiliadoViatorPasseios = 0;
	if(jQuery("#valueAfiliadoViatorPasseios").is(':checked') == true){
		valueAfiliadoViatorPasseios = 1;
		jQuery("#valueAfiliadoViatorPasseios").attr("checked", "checked");
		jQuery("#valueAfiliadoViatorPasseios").prop("checked");

		jQuery(".afiliadoViatorPasseios").show();
		jQuery(".afiliadoViatorPasseios").attr("style", "margin: 8px auto;");
		jQuery("#valueAfiliadoViatorPasseios").attr("style", "margin-top: 8px;");
	}else{
		jQuery("#valueAfiliadoViatorPasseios").removeAttr("checked");
		jQuery("#valueAfiliadoViatorPasseios").removeAttr("style");
		jQuery(".afiliadoViatorPasseios").hide();
		jQuery("#setValueAfiliadoViatorPasseios").val('');
	}
	jQuery("#valueAfiliadoViatorPasseios").val(valueAfiliadoViatorPasseios);
}

function checkLicenseIugu(){
	var eventhandler = function(e) {
   		e.preventDefault();      
	} 
	jQuery("form").bind('submit', eventhandler);

	var license = jQuery("#setValueLicense").val();

    if(license == "" || license.length < 10){

    	swal({
            title: "Licen??a inv??lida.",
	        text: 'Por favor, preencha o campo com o valor da sua licen??a.',
            icon: "warning",
        }); 

	}else{

	    swal({
	        title: "Verificando licen??a...",
	        text: 'Por favor, aguarde. A p??gina ser?? recarregada assim que a verificarmos a sua licen??a.',
	        buttons: false,
	        closeOnClickOutside: false, 
	        icon: "success",
	    }); 

		var license = jQuery("#setValueLicense").val();
		var urlOrigin = window.location.origin; //com https
		var urlHost = window.location.host //sem https
		jQuery.ajax({
	        type: "POST",
	        url: wp_ajax.ajaxurl,
	        data: { license:license, urlOrigin:urlOrigin, urlHost:urlHost, action: "checkLicenseIugu" },
	        success: function( data ) {
	        	var retorno = data.slice(0,-1);
				var resposta = JSON.parse(retorno); 
	            if(resposta["status"] == 0 || resposta["status"] == 2){ 
	            	swal({
	                	title: "Erro ao validar licen??a",
	                  	text: resposta["message"],
	                  	icon: "error" 
	                }).then((value) => {
                        window.location.reload();
                    });
	            }else{ 
	            	swal({
	                	title: "Sucesso!",
	                  	text: resposta["message"],
	                  	icon: "success" 
	                }).then((value) => {
	                	swal.close();  

	                	jQuery(".button").removeAttr("onclick");  
			          	jQuery("form").unbind('submit', eventhandler);
			          	jQuery(".button").click(); 
	        		});
	            }
	        }
	    });

	} 
}

function importContentTours(){
	jQuery("#importData").attr("disabled", "disabled");
    jQuery("#importData").prop("disabled", true);
	jQuery("#importData").html('<img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height:10px;margin-right:3px;"> Importando... Aguarde.');

	jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "import_content" },
        success: function( data ) {
        	var retorno = data.slice(0,-1);
			var resposta = JSON.parse(retorno);
            if(retorno["status"] == 1){
            	jQuery("#importData").html('Importar todo o conte??do');
            	jQuery("#importData").removeAttr("disabled");
            	swal({
                	title: "Erro ao importar.",
                  	text: "N??o foi poss??vel cadastrar os posts. Tente novamente.",
                  	icon: "error" 
                });
            }else{
            	jQuery("#importData").html('Conte??do importado!');
            	swal({
                	title: "Sucesso!",
                  	text: "Conte??do importado com sucesso. Aproveite!",
                  	icon: "success" 
                }).then((value) => {
            		window.location.reload();
        		});
            }
        }
    });
}