//Variables
  
var a;
var b;
var c;
var d;
var f;

var operandoa;
var operandob;
var operacion;

var resultado = document.getElementById("resultado");
var reset = document.getElementById("reset");
var division = document.getElementById("division");
var multiplicacion = document.getElementById("multiplicacion");
var resta = document.getElementById("resta");
var suma = document.getElementById("suma");
var verificar = document.getElementById("verificar");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var cero = document.getElementById("cero");
var coma = document.getElementById("coma");
var borradoParcial = document.getElementById("borradoParcial");//Este seria la tecla DEL.

//Eventos

function init() {
uno.onclick = function(e){
  resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e){
  resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
  resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
  resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
  resultado.textContent = resultado.textContent + "5";
}  
seis.onclick = function(e){
  resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
  resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
  resultado.textContent = resultado.textContent + "8";
}  
nueve.onclick = function(e){
  resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function(e){
  resultado.textContent = resultado.textContent + "0";
}
coma.onclick = function(e){
  resultado.textContent = resultado.textContent + ".";
}

//--------------------------------------------------
//Resetear
//--------------------------------------------------

reset.onclick = function(e){
  resetear();
}

//--------------------------------------------------
//Retroceder(Tecla DEL)
//--------------------------------------------------

borradoParcial.onclick = function(e){
  retroceder();
}

//--------------------------------------------------
// Operaciones
//--------------------------------------------------

suma.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "+";
  limpiar1(a);
}
resta.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "-";
  limpiar2(b);
}
multiplicacion.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "*";
  limpiar3(c);
}
division.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "/";
  limpiar4(d);
}
verificar.onclick = function(e){
  operandob = resultado.textContent.substr(operandoa.length + 1);
  resolver();
}
}

function limpiar1(a){
resultado.textContent = operandoa + "+";
}
function limpiar2(b){
resultado.textContent = operandoa + "-";
}
function limpiar3(c){
resultado.textContent = operandoa + "*";
}
function limpiar4(d){
resultado.textContent = operandoa + "/";
}

//------------------------------------------------

function resetear(){
resultado.textContent = "";
operandoa = 0;
operandob = 0;
operacion = "";
}

//------------------------------------------------
//Tecla DEL
//------------------------------------------------

$('html').keyup(function(e){
    if(e.keyCode == 8) {
        var val = document.getElementById('resultado').innerHTML;
        if(val.length > 0){
            val = val.substring(0, val.length - 1);
            document.getElementById('resultado').innerHTML = val;
        }
    }
    });
    
    //------------------------------------------------
    
    function resolver(){
      
      var res = "";
      
      switch(operacion){
        case "+":
          res = parseFloat(operandoa) + parseFloat(operandob);
          break;
        case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
          case "*":
          res = parseFloat(operandoa) * parseFloat(operandob);
          break;
          case "/":
          
          if (operandob == 0){
            res = 0;
            window.alert("ERROR");
          } else {
            res = parseFloat(operandoa) / parseFloat(operandob);
          }
          break;
      }
      resetear();
      resultado.textContent = res;
    }