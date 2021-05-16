		/*****************************************************/
		/*****************************************************/
		/*SCRIPT PARA ABRIR UNA VENTANA DE ADVERTENCIA INFORMANDO DE QUE SI SIGUE NAVEGANDO ACEPTA NUESTRAS CONDICIONES DE USO DE COOKIES*/

		/*si el usuario ha visitado la página recientemente no se abrirá*/
		/*se utilizan cookies para controlar la visita del usuario*/

		/*es necesario el script principal de jquery el de jquery.cookie.js */
		/*****************************************************/
		/*****************************************************/


			//asigno a una variable que me invento el valor de la posible cookie.
			var controlAvisoCookie = $.cookie("visitadoCookie");
			

			if (controlAvisoCookie==undefined) {
			// si la cookie no existe la variable toma valor undefined y entonces genero la cookie y abro la ventana.

			// 1. GENERAR LA COOKIE
			//----------------------------
				// si quiero indicar la caducidad en un tiempo concreto genero una variable que contenga un valor de fecha actual + un número de segundos:

				var expDate = new Date();
				expDate.setTime(expDate.getTime() + (1000*10)); // así sería la fecha actual + 10 segundos.


			   $.cookie("visitadoCookie","" ,{path: '/', expires: expDate}); // en este caso el valor de la cookie es "" pero se puede indicar cualquier otra cosa.

			    
			   /*OTRAS OPCIONES DE CREACIÓN DE LA COOKIE*/

			   // $.cookie("visitadoCookie", "" ,{expires: 2}); // expira en 2 días.
		 
		       // $.cookie("visitadoCookie", "", { path: '/nombre-carpeta', expires: expDate}); // solo existe en la carpeta nombre-carpeta

		       //$.cookie("visitadoCookie", "" ,{path: '/'}); // existe en todos los directorios y caduca al cerrar el navegador

		       //$.cookie("visitadoCookie", ""); // existe en el el directorio donde se ha creado, en subdirectorios del mismo y caduca al cerrar el navegador

			
			// 2. LANZAR MENSAJE INFORMATIVO DE COOKIES
			//--------------------------------------
 				// Si la cookie no existe abro la ventana.
 				// también podría ejecutar cualquier otra cosa que me interese.


		       	function mostrarAceptarCookies(){
		       		$('#content-popup-cookies').slideToggle(500);
		       	}

		       	function ocultarAceptarCookies(){
		       		 $('#content-popup-cookies').slideToggle(500);
		       	}

		        // asigno al botón de cerrar el evento y la función necesaria
		       	$('#close-cookies').on('click', function(evento){
		       		 ocultarAceptarCookies();
		       		 evento.preventDefault();	 	 
		       	});
		        
		       	/*la ventana se abre unos segundos después de entrar*/
		        var abrirVentanaCookies= setTimeout(mostrarAceptarCookies,2000); // en este caso 1 segundo de demora	

	}


	