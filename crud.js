document.querySelector('#salvar').addEventListener("click", cadastrar)

function cadastrar() {
  const titulo = document.querySelector("#titulo").value
  const descricao = document.querySelector("#descricao").value
  const categoria = document.querySelector("#categoria").value
  const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
  const tarefa = {
    titulo,
    descricao,

    categoria
  }
  console.log(tarefa.descricao)
  if(!validar(tarefa.titulo, document.querySelector("#titulo"))) return
  if(!validar(tarefa.descricao, document.querySelector("#descricao"))) return
  document.querySelector("#card").innerHTML += criaCard(tarefa)
  modal.hide()
}
function validar(valor, campo){
  if(valor === "" ){
    campo.classList.add("is-invalid")
    campo.classList.remove("is-valid")
    return false
  }
  campo.classList.remove("is-invalid")
  campo.classList.add("is-valid")
  return true
  
}
function apagar(botao){
  botao.parentNode.parentNode.parentNode.remove()
}
function criaCard(tarefa) {
  return `
        <div class="col-lg-3 col-md-6 col-12">
          <div class="card">
            <div class="card-header">${tarefa.titulo}</div>
            <div class="card-body">
              <p class="card-text">${tarefa.descricao}</p>
              <p><span class="badge text-bg-danger">${tarefa.categoria}</span></p>
              <a href="#" class="btn btn-success" title="Marcar como Concluida"
                ><i class="bi bi-check-circle"></i>
              </a>
              <a onClick="apagar(this)" href="#" class="btn btn-danger" title="Apagar Tarefa"
                ><i class="bi bi-x-circle"></i>
              </a>
            </div>
          </div>
        </div>
      `
    

}