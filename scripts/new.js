async function get_info_new() {
  let rankingUrl =
  //  "https://newsapi.org/v2/top-headlines?country=us&apiKey=6813ff3fdb8e42d79555561c78d96f7b&category=sports";
  //  "https://newsapi.org/v2/top-headlines/sources?apiKey=6813ff3fdb8e42d79555561c78d96f7b";
  
  "https://newsapi.org/v2/everything?domains=marca.com&apiKey=6813ff3fdb8e42d79555561c78d96f7b";

  let info_new = await fetch(rankingUrl, {
    method: "GET",
    //   headers: {
    //     "X-Api-Key": "6813ff3fdb8e42d79555561c78d96f7b",
    //   },
  })
    .then(function (response) {
      return response.json(); //convierte json para q lo entienda js
    })

    .then(function (data) {
      let apiNew = data.articles;
      return apiNew;
    })
    .catch(function (error) {
      console.log(error);
    });
  return info_new;
}

async function init() {
  let data_NEW = await get_info_new();
  //let table_NEW = document.getElementById("Tbody-new")
  console.log(data_NEW);
  //waiting.innerHTML = "";

  for (let i = 0; i < data_NEW.length; i++) {
    let div_main = document.getElementById("new"); // llamada"
    let div_container = document.createElement("div"); //crear contenedor para cada noticia
    div_container.setAttribute("class","div_container");

    let div_img = document.createElement("div");//contenedor para la imagen
    div_img.setAttribute("class","div_img");
    div_img.innerHTML = `<img src="${data_NEW[i].urlToImage}" class="image-new"/>`

    let h1 = document.createElement("h1");
    h1.innerHTML = data_NEW[i].title;

    let p = document.createElement("p");
    p.innerHTML = data_NEW[i].content

    let button_read = document.createElement("button")
    button_read.setAttribute("class","button_")
    button_read.innerHTML = `<a class="enlace" href=${data_NEW[i].url}>Seguir leyendo --> </a>`

 
    div_container.appendChild(div_img);
    div_container.appendChild(h1);
    div_container.appendChild(p);
    div_container.appendChild(button_read)

    div_main.appendChild(div_container);
    waiting.innerHTML = "";
  }

}

init();
