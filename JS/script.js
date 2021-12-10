var listaTarefa = [];
var novaTarefa = {};

function savedItens() {
    let listaTarefaAtt = localStorage.getItem("listaTarefa");
    listaTarefaAtt = JSON.parse(listaTarefaAtt);
    let lista = document.querySelector("#item-container");
    for (let i in listaTarefaAtt) {
        lista.innerHTML += `<div class="item">
                            <input type="checkbox"> ${listaTarefaAtt[i].descricao}
                            </div>`;
    }                        
}

function criaTarefa(descricao) {
    this.descricao = descricao;
  }

  function add() {
      let tarefa = document.querySelector("#tarefa");
      if(tarefa.value == ''){
          alert("Não deixe o campo em branco")
      }else{
        let lista = document.querySelector("#item-container")
        lista.innerHTML += `<div class="item">
                            <input type="checkbox">${tarefa.value}
                            </div>`;
        novaTarefa = new criaTarefa(tarefa.value);
        listaTarefa.push(novaTarefa);  
        tarefa.value = "";
        tarefa.focus();                  
      }
  }

  function deletar() {
    listaTarefa = [];
    let listaItem = document.querySelector("#item-container")
    listaItem.parentNode.removeChild(listaItem);
    localStorage.clear();
    let divLista = document.querySelector('#lista');
    let divNova = document.createElement("div");
    divNova.innerHTML = "";                   
    divLista.appendChild(divNova);
    divNova.setAttribute('id', 'item-container');
}

function save() {
    listaTarefa = JSON.stringify(listaTarefa);
    localStorage.setItem("listaTarefa", listaTarefa);
}