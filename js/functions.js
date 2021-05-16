//SCRIP OCULTAR PANTALLA DE CARGA
$(window).on('load', iniciarPagina);

			function iniciarPagina(){
				$('.overlay').fadeOut(1000, function(){
					$('.contenedor').fadeIn(1000);
				});
			}


//SCRIPT PARA PANTALLA MODAL
/*DETECTAR EVENTOS DE CLICK EN BOTONES Y APLICAR FX AL PRODUCIRSE EL EVENTO*/
$('.botonModal').on('click',mostrarModal);
$('.cerrarModal').on('click',cerrarModal);

/*DETECTAR PULSACIÓN DE TECLA*/
$(document).on('keydown',comprobarTecla);

/*FX PARA MOSTRAR LA VENTANA MODAL*/
function mostrarModal(){
	$('.fondoModal').fadeIn(500,function(){
		$('.contenidoModal').fadeIn(500);
	})
}
/*FX PARA CERRAR VENTANA MODAL*/
function cerrarModal(){
	$('.fondoModal, .contenidoModal').fadeOut(200);
}
/*FX PARA DETECTAR QUE PULSAMOS ESC Y EJECUTAR LA FX*/
function comprobarTecla(e){
	console.log(e.keyCode);
	if(e.keyCode==27){cerrarModal();
	}
}