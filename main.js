//criando função adicionar

function adicionarTarefa(){
    let li = document.createElement("LI")
    let input = document.formPrincipal.Tarefa.value
    let input_text = document.createTextNode(input)

    li.appendChild(input_text)

    document.querySelector("ul").appendChild(li)
    document.formPrincipal.Tarefa.value = ""

    criarBotaoFechar(li)
}
function criarBotaoFechar(li){
    let rotulo = document.createElement("SPAN")
    let fechar = document.createTextNode("\u00D7")
    
    rotulo.className = "close"
    rotulo.appendChild(fechar)
    li.appendChild(rotulo)

    rotulo.onclick = () => {
        rotulo.parentElement.style.display = "none"
    }
}

document.querySelectorAll('li').forEach(criarBotaoFechar)
document.querySelector('ui').addEventListener('click'), (p) => {
    if(e.target.tagname === "LI")
    e.target.classList.toggle('checked')
}