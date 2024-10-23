const formularioProfessor = document.getElementById("formularioProfessor")
const divCodigo = document.getElementById("divCodigo")
const resposta = document.getElementById("resposta")

function mostrarFormulario() {
    const codigoPessoal = document.getElementById("codigoPessoal").value // Acesse o valor dentro da função

    const codigoPessoalRegex = /^s?\d{2}$/
   // const codigoAdesaoRegex = /^196$/
    
    if ( codigoPessoalRegex.test(codigoPessoal)) { // Comparar como string
        resposta.textContent = "Carregando..."

        setTimeout(() => {
            divCodigo.style.display = "none" // Oculta a div do código
            formularioProfessor.style.display = "block" // Exibe o formulário
        }, 5000)
        
    } else {
        resposta.textContent = "CÓDIGO INVÁLIDO!!!!!!"
    }
}
