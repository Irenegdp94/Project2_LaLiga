// Genera las filas de la tabla
function generateTable(table, data, type) {
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");

    if (type == "CL") {
      array_type = [
        data[i].position,
        //`<img src="https://crests.football-data.org/${data[i].team.id}.svg" class="escudo" alt="escudo"/>${data[i].team.name}`,
        data[i].team.name,
        data[i].playedGames,
        data[i].won,
        data[i].draw,
        data[i].lost,
        data[i].goalsAgainst,
        data[i].goalsFor,
        data[i].goalDifference,
        data[i].points,
      ];
    } else if (type == "PR") {
      array_type = [
        data[i].homeTeam.name,
        //`<img src="https://crests.football-data.org/${data[i].homeTeam.id}.svg" class="escudo" alt="Logo"/> ${data[i].score.fullTime.homeTeam} - ${data[i].score.fullTime.awayTeam} <img src="https://crests.football-data.org/${data[i].awayTeam.id}.svg" class="escudo" alt="escudo"/>`,
        `${data[i].score.fullTime.homeTeam} - ${data[i].score.fullTime.awayTeam}`,
        data[i].awayTeam.name,
      ];
    } else if (type == "ES") {
      array_type = [i + 1, data[i].name, data[i].mean];
    }

    for (let j = 0; j < array_type.length; j++) {
      let cell = document.createElement("td");
      cell.innerHTML = array_type[j];
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}

function filter_PR(data, nameEQ, value) {
  let filter_data_ALL = [];
  let filter_data_DRAW = [];
  let filter_data_WINNER = [];
  let filter_data_LOST = [];

  if (value == "TODOS") {
    for (let i = 0; i < data.length; i++) {
      if (
        nameEQ.value == data[i].homeTeam.name ||
        nameEQ.value == data[i].awayTeam.name
      ) {
        filter_data_ALL.push(data[i]); //todos los partidos de un equipo
      }
    }
    return filter_data_ALL;
  } else if (value == "EMPATADOS") {
    for (let i = 0; i < data.length; i++) {
      let result_match = data[i].score.winner;
      if (
        (result_match == "DRAW" && nameEQ.value == data[i].homeTeam.name) ||
        (result_match == "DRAW" && nameEQ.value == data[i].awayTeam.name)
      ) {
        filter_data_DRAW.push(data[i]); //todos los partidos de un equipo
      }
    }
    return filter_data_DRAW;
  } else if (value == "GANADOS") {
    for (let i = 0; i < data.length; i++) {
      let result_match = data[i].score.winner;
      if (
        (result_match == "HOME_TEAM" &&
          nameEQ.value == data[i].homeTeam.name) ||
        (result_match == "AWAY_TEAM" && nameEQ.value == data[i].awayTeam.name)
      ) {
        filter_data_WINNER.push(data[i]); //partidos ganados de un equipo}
      }
    }
    return filter_data_WINNER;
  } else if (value == "PERDIDOS") {
    for (let i = 0; i < data.length; i++) {
      let result_match = data[i].score.winner;
      if (
        (result_match == "HOME_TEAM" &&
          nameEQ.value == data[i].awayTeam.name) ||
        (result_match == "AWAY_TEAM" && nameEQ.value == data[i].homeTeam.name)
      ) {
        filter_data_LOST.push(data[i]); //partidos perdidos de un equipo
      }
    }
    return filter_data_LOST;
  }
}

let rankingUrl =
  "https://api.football-data.org/v2/competitions/2014/standings?season=2021";

let info = fetch(rankingUrl, {
  method: "GET",
  headers: {
    "X-Auth-Token": "928dd4e062654c76833a1d9ebc7eb435",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    return data;
  })
  .catch(function (error) {
    console.log(error);
  });
