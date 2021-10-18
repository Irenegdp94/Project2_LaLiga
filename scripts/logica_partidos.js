//obtener datos API
//para partidos
async function get_info_matches() {
  let rankingUrl =
    "https://api.football-data.org/v2/competitions/2014/matches?season=2021";

  let info_matches = await fetch(rankingUrl, {
    method: "GET",
    headers: {
      "X-Auth-Token": "2c85c586dcdc43038f880b718622e214",
    },
  })
    .then(function (response) {
      return response.json(); //convierte json para q lo entienda js
    })

    .then(function (data) {
      let apiMatches = data.matches;
      return apiMatches;
    })
    .catch(function (error) {
      console.log(error);
    });
  return info_matches;
}

async function init() {
  
  let data_PR = await get_info_matches();
  generateTable(table_PR, data_PR, type_PR);
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
  waiting.innerHTML = "";
}
/////////////////////////////////////////////////////////////

// variables para la tabla
let table_PR = document.getElementById("Tbody-partidos");
let type_PR = "PR";
let waiting = document.getElementById("waiting");

// variables para los filtros
let ButtonALL = document.getElementById("ButtonALL");
let ButtonWIN = document.getElementById("ButtonWIN");
let ButtonLOST = document.getElementById("ButtonLOST");
let ButtonDRAW = document.getElementById("ButtonDRAW");
let ButtonRELOAD = document.getElementById("ButtonreLoad");

init();
