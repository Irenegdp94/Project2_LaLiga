// equipo con mas media de goles
//numero de goles que ha marcado
//numero de partidos que ha jugado
// media = nº goles / nº partidos

//por cada equipo crear un objeto en el array

let table_ES = document.getElementById("Tbody-estadistica");
let type_ES = "ES";


let data_PR = partidos.matches;
console.log(data_PR.length);
let array_obj_team = [];

for (let i = 0; i < data_PR.length; i++) {

  let name_eq_HOME = data_PR[i].homeTeam.name;
  let name_eq_AWAY = data_PR[i].awayTeam.name;
  let goals_eq_HOME = data_PR[i].score.fullTime.homeTeam;
  let goals_eq_AWAY = data_PR[i].score.fullTime.awayTeam;
  let stay_HOME = false
  let stay_AWAY = false
  console.log("i=", i);
  console.log("longitud", array_obj_team.length);
  console.log(stay_AWAY)
  for (let j = 0; j < array_obj_team.length; j++) {
    console.log("j=", j);
    if (array_obj_team[j].name == name_eq_HOME) {
      console.log("Existe equipo HOME");
      stay_HOME = true;
      array_obj_team[j].goals += goals_eq_HOME;
      array_obj_team[j].matches += 1;
      array_obj_team[j].mean = (array_obj_team[j].goals / array_obj_team[j].matches).toFixed(2);
    }

    if (array_obj_team[j].name == name_eq_AWAY) {
      console.log("Existe equipo AWAY");
      stay_AWAY = true;
      array_obj_team[j].goals += goals_eq_AWAY;
      array_obj_team[j].matches += 1;
      array_obj_team[j].mean = (array_obj_team[j].goals / array_obj_team[j].matches).toFixed(2);
    }
  }

  if(stay_HOME == false){
    console.log("entra en stay_home = false")
    let a = {name: name_eq_HOME, goals: goals_eq_HOME, matches: 0, mean:0};
    array_obj_team.push(a)
  }

  if(stay_AWAY == false){
    console.log("entra en stay_away = false")
    let b = {name: name_eq_AWAY, goals: goals_eq_AWAY,matches: 0, mean:0};
    array_obj_team.push(b)
  }
  console.log(array_obj_team)
}

//console.log(array_obj_team)

array_ordenado = array_obj_team.sort(function (a,b){return(b.mean - a.mean)})

// console.log(array_ordenado)

array_ordenado_cortado = array_ordenado.splice(0,5)
generateTable(table_ES, array_ordenado_cortado, type_ES)