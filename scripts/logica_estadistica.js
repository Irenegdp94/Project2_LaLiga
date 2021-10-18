let table_ES = document.getElementById("Tbody-estadistica");
let type_ES = "ES";
let array_obj_team = [];

async function get_info_statistics() {
  let rankingUrl =
    "https://api.football-data.org/v2/competitions/2014/matches?season=2021";

  let info_statistics = await fetch(rankingUrl, {
    method: "GET",
    headers: {
      "X-Auth-Token": "928dd4e062654c76833a1d9ebc7eb435",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let apistatistics = data.matches;
      return apistatistics;
    })
    .catch(function (error) {
      console.log(error);
    });
  return info_statistics;
}

async function init() {
  
  let data_PR = await get_info_statistics();
  
  for (let i = 0; i < data_PR.length; i++) {
    let name_eq_HOME = data_PR[i].homeTeam.name;
    let id_eq_HOME = data_PR[i].homeTeam.id;
    let name_eq_AWAY = data_PR[i].awayTeam.name;
    let id_eq_AWAY = data_PR[i].awayTeam.id;
    let goals_eq_HOME = data_PR[i].score.fullTime.homeTeam;
    let goals_eq_AWAY = data_PR[i].score.fullTime.awayTeam;
    let stay_HOME = false;
    let stay_AWAY = false;
    for (let j = 0; j < array_obj_team.length; j++) {
      if (array_obj_team[j].name == name_eq_HOME) {
        stay_HOME = true;
        array_obj_team[j].goals += goals_eq_HOME;
        if(goals_eq_HOME != null){
          array_obj_team[j].matches += 1;
        }
        array_obj_team[j].mean = (
          array_obj_team[j].goals / array_obj_team[j].matches
        ).toFixed(2);
      }

      if (array_obj_team[j].name == name_eq_AWAY) {
        stay_AWAY = true;
        array_obj_team[j].goals += goals_eq_AWAY;
        if(goals_eq_AWAY != null){
          array_obj_team[j].matches += 1;
        }
        array_obj_team[j].mean = (
          array_obj_team[j].goals / array_obj_team[j].matches
        ).toFixed(2);
      }
    }

    if (stay_HOME == false) {
      let a
      if (goals_eq_HOME != null){
        a = { name: name_eq_HOME, goals: goals_eq_HOME, matches: 1, mean: 0, id: id_eq_HOME };
      }else{
        a = { name: name_eq_HOME, goals: goals_eq_HOME, matches: 0, mean: 0, id: id_eq_HOME };
      }
      
      array_obj_team.push(a);
    }

    if (stay_AWAY == false) {
      let b
      if (goals_eq_AWAY != null){
        b = { name: name_eq_AWAY, goals: goals_eq_AWAY, matches: 1, mean: 0, id: id_eq_AWAY };
      }else{
        b = { name: name_eq_AWAY, goals: goals_eq_AWAY, matches: 0, mean: 0, id: id_eq_AWAY };
      }
      
      array_obj_team.push(b);
    }
  }
  array_ordenado = array_obj_team.sort(function (a, b) {
    return b.mean - a.mean;
  });
  array_ordenado_cortado = array_ordenado.splice(0, 5);

  generateTable(table_ES, array_ordenado_cortado, type_ES);
  waiting.innerHTML = "";
}

init()