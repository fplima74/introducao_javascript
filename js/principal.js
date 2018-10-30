/**				
 * 
 * 
 */

var titulo = document.querySelector(".titulo");
titulo.textContent = ("Aparecida Nutricionista");

var paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);

var tdPeso = document.querySelector(".info-peso");
console.log(tdPeso);

var peso = tdPeso.textContent;
console.log(peso);

var tdAltura = document.querySelector(".info-altura");
console.log(tdAltura);

var altura = tdAltura.textContent;
console.log(altura);

var imc = peso / (altura * altura);
console.log(imc);

var tdImc = document.querySelector(".info-imc");
console.log(tdImc);

tdImc.textContent = imc;
console.log(tdImc);