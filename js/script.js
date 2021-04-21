alert("Bienvenido a mi calculadora web");
var operandoa;
var operandob;
var operacion;

function datos() {
var resultado=document.getElementsByid("resultado");
var reset=document.getElementsByid("reset");
var suma=document.getElementsByid("suma");
var resta=document.getElementsByid("resta");
var multiplicacion=document.getElementsByid("multiplicacion");
var division=document.getElementsByid("division");
var igual=document.getElementsByid("igual");
var uno=document.getElementsByid("uno");
var dos=document.getElementsByid("dos");
var tres=document.getElementsByid("tres");
var cuatro=document.getElementsByid("cuatro");
var cinco=document.getElementsByid("cinco");
var seis=document.getElementsByid("seis");
var siete=document.getElementsByid("siete");
var ocho=document.getElementsByid("ocho");
var nueve=document.getElementsByid("nueve");
var cero=document.getElementsByid("cero");
}

uno.onclick = function (e){
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (e){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (e){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (e){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (e){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (e){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (e){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (e){
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (e){
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (e){
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}

function limpiar(){
    resultado.textContent = "";
}
function resetear (){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
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
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
  }