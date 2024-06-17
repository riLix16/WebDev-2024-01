function getImages() {
    let url_api = document.getElementById("url_api").innerText.trim();
    console.log(url_api);
    fetch(url_api, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById("imagens-container").innerHTML = "";
        data.forEach((cat) => {
          let imagem = `
            <div class="col-12 col-md-6 col-lg-4 mb-3">
              <div class="card">
                <img class="card-img-top" src="${cat.url}" alt="Gato">
              </div>
            </div>
          `;
          document.getElementById("imagens-container").innerHTML += imagem;
        });
      });
  }
  