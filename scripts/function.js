// Genera las filas de la tabla
function generateTable(table, data, type) {
    
    //console.log(type)
    // console.log(table)
    //console.log(data)
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
   
    if (type == "CL") {
        array_type = [
          data[i].position,
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
      } else if (type == 'PR') {

        array_type = [
            data[i].homeTeam.name,
            //`${data[i].score.fullTime.homeTeam} - ${data[i].score.fullTime.awayTeam}`,
            `<img src="https://crests.football-data.org/<${data[i].homeTeam.id}>.svg"/> ${data[i].score.fullTime.homeTeam} - ${data[i].score.fullTime.awayTeam}`,
            data[i].awayTeam.name
            
        ];

      }

    for (let j = 0; j < array_type.length; j++) {
      let cell = document.createElement("td");
      cell.innerText = array_type[j];
      row.appendChild(cell);
    }

    table.appendChild(row);

  }
}


//<img src="https://crests.football-data.org/<${data[i].homeTeam.id}>.svg"/>

//"https://crests.football-data.org/<id>.svg" cambiar id por el id de cada equipo