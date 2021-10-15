//datos api para clasificacion
async function get_info_standings() {
  let rankingUrl =
    "https://api.football-data.org/v2/competitions/2014/standings?season=2021";

  let info = await fetch(rankingUrl, {
    method: "GET",
    headers: {
      "X-Auth-Token": "928dd4e062654c76833a1d9ebc7eb435",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let apiStandings = data.standings[0].table;
      return apiStandings;
    })
    .catch(function (error) {
      console.log(error);
    });
  return info;
}

async function init() {
  let data_CL = await get_info_standings();
  generateTable(table_CL, data_CL, type_CL);
}

// Creamos la tabla
let table_CL = document.getElementById("Tbody-clasificacion");
let type_CL = "CL";
init();
