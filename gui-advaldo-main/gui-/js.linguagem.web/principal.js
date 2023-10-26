var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll("paciente");

console.log(pacientes);

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValido = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if(alturaEhValido && pesoEhValido){
    var imc = peso / (altura + altura);
    tdImc.textContent = imc;
}
console.log(paciente); //tr
console.log(tdPeso); //td que tem peso
console.log(peso); //obter100

var imc = peso / altura * altura; // 100 / 2.0 * 2.0 = 100 / 4 =>>>> 25 

console.log(imc);