// Creamos la tabla
let table_PR = document.getElementById("Tbody-partidos");
let data_PR = partidos.matches;
let type_PR = "PR";

generateTable(table_PR, data_PR, type_PR);

// //Para los filtros

let ButtonALL = document.getElementById("ButtonALL");
let ButtonWIN = document.getElementById("ButtonWIN");
let ButtonLOST = document.getElementById("ButtonLOST");
let ButtonDRAW = document.getElementById("ButtonDRAW");
let ButtonRELOAD = document.getElementById("ButtonreLoad");

ButtonALL.addEventListener("click", function () {
  let option = "TODOS"; //todos los partidos jugados por un equipo
  let nameEQ = document.getElementById("inputEQ");

  table_PR.innerHTML = "";
  let dataFilter = filter_PR(data_PR, nameEQ, option);

  generateTable(table_PR, dataFilter, type_PR);
});

ButtonWIN.addEventListener("click", function () {
  let option = "GANADOS";
  let nameEQ = document.getElementById("inputEQ");

  table_PR.innerHTML = "";
  let dataFilter = filter_PR(data_PR, nameEQ, option);

  generateTable(table_PR, dataFilter, type_PR);
});

ButtonLOST.addEventListener("click", function () {
  let option = "PERDIDOS";
  let nameEQ = document.getElementById("inputEQ");

  table_PR.innerHTML = "";

  let dataFilter = filter_PR(data_PR, nameEQ, option);
  generateTable(table_PR, dataFilter, type_PR);
});

ButtonDRAW.addEventListener("click", function () {
  let option = "EMPATADOS";
  let nameEQ = document.getElementById("inputEQ");

  table_PR.innerHTML = "";

  let dataFilter = filter_PR(data_PR, nameEQ, option);
  generateTable(table_PR, dataFilter, type_PR);
});

ButtonRELOAD.addEventListener("click", function () {
  let nameEQ = document.getElementById("inputEQ");
  table_PR.innerHTML = "";
  nameEQ.value = "";
  generateTable(table_PR, data_PR, type_PR);

});
// SD Eibar
