async function get_info() {
  let rankingUrl =
    "https://api.football-data.org/v2/competitions/2014/standings?season=2021";

 let info = await fetch(rankingUrl, {
    method: "GET",
    headers: {
      "X-Auth-Token": "928dd4e062654c76833a1d9ebc7eb435",
    },
  })
    .then(function (response) {
      return response.json()
      
    })
//esta es la de competicion
    .then(function (data) {
        let apiMatches = data.matches
        return apiMatches
        
      })
    .catch(function (error) {
      console.log(error);
    });
return info
}

async function init() {
  info_ = await get_info();
  console.log(info_);
}

init();
