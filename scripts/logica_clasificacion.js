// Creamos la tabla
let table_CL = document.getElementById("Tbody-clasificacion");
let data_CL = clasificacion.standings[0].table;
let type_CL = 'CL';

// console.log(table_CL)
generateTable(table_CL,data_CL,type_CL);
