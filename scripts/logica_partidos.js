// Creamos la tabla
let table_PR = document.getElementById("T-partidos");
let data_PR = partidos.matches;
let type_PR = 'PR';


generateTable(table_PR,data_PR,type_PR)

//Para los filtros
let nameEQ = document.getElementById("inputEQ");