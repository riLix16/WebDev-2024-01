// Buscar o elemento input da página
let filterInput = document.getElementById("filterInput");
// Adicionar um evento a esse elemento
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  // Buscar o valor digitado no elemento imput
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  // Buscar as lista de nomes
  let ul = document.getElementById("names");
  // Buscar os elementos <li> da lista não ordenada <ul>
  let li = ul.querySelectorAll("li.list-group-item");
  // Laços para percorrer os elementos da lista
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    console.log(a);
    // Verifica se o item da lista começa com o valor
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
