var caracteristicas = [];

function carregarCaracteristicas() {
    let caracteristicas_container = document.querySelector("#caracteristicasContainer");
    caracteristicas_container.innerHTML = "";
    caracteristicas.forEach((caracteristica) => {
        let nome = caracteristica.nome;
        let descricao = caracteristica.descricao;
        let id = caracteristica.id;
        let caracteristica_container = `<div class="caracteristica">
                                      <input onchange="alterarNome(this)" data-id="${id}" class="nome" type="text" value="${nome}">
                                      <input onchange="alterarDescricao(this)" data-id="${id}" class="descricao" type="text" value="${descricao}">
                                      <div class="action">
                                          <a href="#" class="remover">❌</a>
                                      </div>
                                  </div>`;
        caracteristicas_container.innerHTML += caracteristica_container;
    });
    removerCaracteristicas();
}

function alterarNome(e) {
    caracteristicas.forEach((element, index) => {
        if(element.id == e.dataset.id){
            caracteristicas[index].nome = e.value;
        }
    });
}

function alterarDescricao(e) {
    caracteristicas.forEach((element, index) => {
        if(element.id == e.dataset.id){
            caracteristicas[index].descricao = e.value;
        }
    });
}

function adicionarCaracteristicas() {
    caracteristicas.push({
        id: Date.now(),
        nome: "",
        descricao: ""
    });
    carregarCaracteristicas();
}

function removerCaracteristicas() {
    document.querySelectorAll("#caracteristicasContainer .remover")
        .forEach((e, i) => {
            e.addEventListener("click", () => {
                caracteristicas.splice(i, 1);
                carregarCaracteristicas();
            });
        });
}

document.querySelector("#btnAdicionarCaracteristicas").addEventListener("click", adicionarCaracteristicas);
carregarCaracteristicas();
