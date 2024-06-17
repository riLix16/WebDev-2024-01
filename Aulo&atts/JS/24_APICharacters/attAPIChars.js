let select_opt = document.getElementById("opt");
let label = document.getElementById("label");
let button = document.getElementById("button");
let info = document.getElementById("info");
let outros = document.getElementById("outros");
let title_card = document.getElementById("title_card");
const api = "https://dattebayo-api.onrender.com";

document.getElementById("info").addEventListener("change", function (e) {
    let valor = info.value;
    let url_api = api;
    let str_opt = "";
    url_api += `${clans}`;
    if (valor != "") {
      fetch(url_api, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((dados) => {
          dados.results.forEach((elemento) => {
            str_opt += `
          <option value=${elemento.name}</option> 
          `;
          });
          // Insere as informações no elemento HTML com id dados
          select_opt.innerHTML = str_opt;
          label.innerHTML = `<em>Dados de ${valor}: </em>`;
          label.style.display = "inline";
          select_opt.style.display = "inline";
          button.disabled = false;
        });
    }
  });
  const getData = () => {
    cleanData();
    let valor = info.value;
    let url_api = api;
    url_api += `${valor}/${select_opt.value}`;
    fetch(url_api, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((dados) => {
        console.log(dados);
        document.getElementById("id").innerText = dados.id;
        document.getElementById("name").innerText = dados.name;
        chooseData(dados);
      });
  };
  const chooseData = (dados) => {
    if (info.value == "clans") {
      outros.innerHTML = `<p><b>clans</b>: ${dados.clans} </p> 
      `;}}