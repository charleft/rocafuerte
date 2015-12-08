// ******** Scroll ********//
$(document).ready(function() {
	var sid = $("#Slider");
	var pal = $("#A").height();
	sid.height(pal);
 	$(".button-collapse").sideNav();
 	$('.parallax').parallax();
 	$('.slider').slider({full_width: true});
 	$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $('.modal-trigger').leanModal();
});

// ******** Paginador ********//
//Guardar el contenedor principal
var c = $('#Slider');
// c.wrapInner('<div class="slider-margin" />');
//Guardar los contenidos del Slider
var s = c.find('.contenido');
//Guardar el número de contenidos
var n = s.length;
//Guardar el "slider-inner"
var ci = $('.slider-inner');
//Definir el ancho del contenedor interno "slider-inner"
ci.css('width', 100*n+'%');
s.css('width', 100/n+'%');

var next = $('#next');
var prev = $('#prev');

var i = 0;
function mover(){
	if(i===0){
		ci.css('left',0);
	} else if (i>0){
		ci.css('left' , '-' +100*i+'%');
	}
	
}
next.on('click',function(){
	if (i<n-1){
		i++;
		mover();
	}
});

prev.on('click', function(){
	if (i>0){
		i--;
		mover();
	}
});

var uno = $('#uno');
var dos = $('#dos');
var tres = $('#tres');
var cuatro = $('#cuatro');
var faltura = $("#A").height();
var sid = $("#Slider");
uno.on('click',function(){
	var altura = $("#A").height();
	sid.height(altura);
	ci.css({left:0,height:altura});
	//ci.css('left',0);
	$('#uno').addClass('blue')
			.addClass('active');
	$('#dos').removeClass('blue active');
	$('#tres').removeClass('blue active');
	$('#cuatro').removeClass('blue active');
});

dos.on('click',function(){
	var altura = $("#B").height();
	sid.height(altura);
	ci.css({left:'-'+100+'%',height:altura});
	//ci.css('left','-'+100+'%');
	$('#dos').addClass('blue')
			.addClass('active');
	$('#uno').removeClass('blue active');
	$('#tres').removeClass('blue active');
	$('#cuatro').removeClass('blue active');
});

tres.on('click',function(){
	var altura = $("#C").height();
	sid.height(altura);
	ci.css({left:'-'+200+'%',height:altura});
	//ci.css('left','-'+200+'%');
	$('#tres').addClass('blue')
			.addClass('active');
	$('#uno').removeClass('blue active');
	$('#dos').removeClass('blue active');
	$('#cuatro').removeClass('blue active');
});
cuatro.on('click',function(){
	if($("#Evaluacion")) {
		var altura = $("#Evaluacion").height();
	} else {
		var altura = $("#D").height();
	}
	sid.height(altura);
	ci.css({left:'-'+300+'%',height:altura});
	//ci.css('left','-'+300+'%');
	$('#cuatro').addClass('blue')
			.addClass('active');
	$('#uno').removeClass('blue active');
	$('#dos').removeClass('blue active');
	$('#tres').removeClass('blue active');
});

//eventos de teclado
//der 39 izq 37
//abajo 40 arriba 38
$(document).on('keydown',function(e){
	console.log(e.which);
	if((e.which)==39){
		next.trigger('click');
	} else if ((e.which)==37){
		prev.trigger('click');
	}
});

// ******** Evalución ********//
// var r1;
var acu;
var r1 = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;
var r5 = 0;
var text = 0;

$('#op1, #op2, #op3').on('click',function(){
	var clickedID = this.id;

	if (clickedID === "op2") {
		r1 = 1;
	} else{
		r1 = 0;
	};
})

$('#op4, #op5, #op6').on('click',function(){
	var clickedID = this.id;

	if (clickedID === "op4") {
		r2 = 1;
	} else{
		r2 = 0;
	};
})

$('#op7, #op8, #op9').on('click',function(){
	var clickedID = this.id;

	if (clickedID === "op9") {
		r3 = 1;
	} else{
		r3 = 0;
	};
})

$('#op10, #op11, #op12').on('click',function(){
	var clickedID = this.id;

	if (clickedID === "op10") {
		r4 = 1;
	} else{
		r4 = 0;
	};
})

$('#op13, #op14, #op15').on('click',function(){
	var clickedID = this.id;

	if (clickedID === "op14") {
		r5 = 1;
	} else{
		r5 = 0;
	};
})

function evaluar(){
	//alert(acu);
	acu = (r1+r2+r3+r4+r5);
	$("input:radio").attr("checked", false);
	if (acu >= 4) {
		tex = "FELICIDADES";
	} else{
		//alert("mal");
		tex = "vuelve a intertar";
	}
	$('#Resultado').html('<h6 class="blue-text text-darken-3">TU RESULTADO ES</h6><h1 class="orange-text">'+ acu +'/5</h1><h5 class="blue-text text-darken-3">' + tex + '</h5>');
}

function cargaSendMail(){

$("#c_enviar").attr("disabled", true);

$(".c_error").remove();

var filter=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
var s_name = $('#c_name').val();
var s_email = $('#c_mail').val();
var s_msg = $('#c_msg').val();

if (filter.test(s_email)){
sendMail = "true";
} else{
$('#c_mail').after("");
//aplicamos color de borde si el se encontro algun error en el envio
$('#contactform').css("border-color","#e74c3c");
sendMail = "false";
}
if (s_name.length == 0 ){
$('#c_name').after( "" );
var sendMail = "false";
}
if (s_msg.length == 0 ){
$('#c_msg').after( "" );
var sendMail = "false";
}

if(sendMail == "true"){

var datos = {

"nombre" : $('#c_name').val(),

"email" : $('#c_mail').val(),

"mensaje" : $('#c_msg').val()

};
Materialize.toast('Gracias por escribirnos, estamos en contacto.', 4000);
$.ajax({

data: datos,
// hacemos referencia al archivo contacto.php
url: 'php/contacto.php',

type: 'post',

beforeSend: function () {
//aplicamos color de borde si el envio es exitoso
$('#contactform').css("border-color","#25A25A");

$("#c_enviar").val("Enviando…");

},

success: function (response) {

$('form')[0].reset();
$("#c_enviar").val("Enviar");
$("#c_information p").html(response);
$("#c_information").fadeIn('slow');
$("#c_enviar").removeAttr("disabled");

}

});

} else{
$("#c_enviar").removeAttr("disabled");
}

}
function borrar(){
    document.getElementById("c_name").value = "";
    document.getElementById("c_mail").value = "";
    document.getElementById("c_msg").value = "";
}