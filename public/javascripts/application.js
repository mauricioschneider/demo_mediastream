var doc=document.location.href;
$(document).ready(function(){
  $(".menu_centro2").animate({
    "top":"-=100px"
  },3000);
  $(".menu_centro3").animate({
    "top":"+=100px"
  },3000);
  setTimeout(function(){
      $(".menu_centro").animate({opacity:"-=0.5"});
},3000);

    
$("#yield").hide();  
$("#salir").click(function(){
                    $("#yield").hide("fold");
                });
$("#cerrar").click(function(){
                    $("#panel_lateral").hide("fold");
                });
 $(".agregar").click(function(){
                    if(doc.toString()=='http://localhost:3000/home/inicio' || doc.toString()=='http://localhost:3000/home/inicio?a=1' || doc.toString()=='http://localhost:3000/'){
                    
desfundar();         
}
else{document.location.href='http://localhost:3000/home/inicio?a=1'}
                });
 $(".reciclar").click(function(){
                    if(doc.toString()=='http://localhost:3000/home/mapa' || doc.toString()=='http://localhost:3000/home/mapa?a=2' ){
                    desfundar();
                    }
else{document.location.href='http://localhost:3000/home/mapa?a=2'}
                });


                $("#panel_lateral").hide();
                $("#consejos").click(function(){
                    $("#panel_lateral").show("fold");
			$(".consejo").show();
                });
                $("#contacto").click(function(){
                    $("#panel_lateral").show("fold");
                    $(".consejo").hide();
                    $(".advice").html("Si quieres participar con nosotros contactanos. Si tienes una empresa de reciclaje puedes contactarnos para promocionarte.<br/> Si quieres añadir tu empresa al mapa contactanos, ya que tenemos un icono especial para empresas.");
                });
                $("#quienes").click(function(){
                    $("#panel_lateral").show("fold");
			$(".consejo").hide();
                    $(".advice").html("Nosotros somos gente que cree que hay mucho por hacer en este mundo, nos hemos olvidado que este es nuestro unico planeta y debemos cuidarlo.<br/>Contribuye a salvarlo.");
                });
		
            });

function desfundar()
{
     $("#yield").show("fold");
     setTimeout(function(){
     geoloc();initialize();
},1000);
}

function obtener(obj){
$.get("/home/inicio", { region:obj} );
}
function denunciar(rat)
{
$.get("/direccions", { rat:rat} );
$("#denuncia").hide();
}
function validateForm()
{
var calle=document.forms["new_direccion" ]["direccion_calle"].value;
var numero=document.forms["new_direccion"]["direccion_numero_calle"].value
var comentario=document.forms["new_direccion"]["direccion_comentario"].value

if (calle==null || calle=="")
  {document.getElementById("direccion_calle").style.border = "solid red 2px";
 alert("Los campos en rojo tienen valores invalidos, o estan vacios");
  return false;
  }
if (comentario==null || comentario=="")
  {document.getElementById("direccion_comentario").style.border = "solid red 2px";
 alert("Este campo no debe estar en blanco");
  return false;
  }
if (numero==null || numero=="" || numero<1 || isNaN(numero))
  {document.getElementById("direccion_numero_calle").style.border = "solid red 2px";
 alert("Debe indicar el numero de la calle");
  return false;
  }
}
