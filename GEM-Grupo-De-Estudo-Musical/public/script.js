const divBoaVindas = document.getElementById("divBoaVindas") //armazenando os IDs
const divEscolherNaipe = document.getElementById("divEscolherNaipe") //armazenando os IDs
const divEscolhaInstrumentos = document.getElementById("divEscolhaInstrumentos") //armazenando os IDs
const divAlunoProfessor = document.getElementById("divAlunoProfessor") //armazenando os IDs
const instrumentosContainer = document.getElementById("instrumentosContainer") //armazenando os IDs

function iniciarRegistro() {
    divBoaVindas.style.display = "none"
    divEscolherNaipe.style.display = "block"
}

// Função para mostrar os instrumentos de acordo com o naipe escolhido
function mostrarInstrumentos(naipe) {
    divEscolherNaipe.style.display = "none"
    divEscolhaInstrumentos.style.display = "block"

    // Limpa o container antes de adicionar novos links
    instrumentosContainer.innerHTML = ""

    if (naipe === 'cordas') { //caso o usuario escolha cordas
        instrumentosContainer.innerHTML = `
           <button onclick="cordas('VIOLINO')">🎻 VIOLINO</button>
           <button onclick="cordas('VIOLA')">🎻 VIOLA</button>
           <button onclick="cordas('CELLO')">🎻 CELLO</button>
        `
    } else if (naipe === 'madeiras') { //caso o usuario escolha madeiras
        instrumentosContainer.innerHTML = `
            <a href="FLAUTA/registroAlunos_Flauta/index.html">Flauta</a><br><br>
            <a href="CLARINETE/registroAlunos_Clarinete/index.html">Clarinete</a><br><br>
            <a href="OBOE/registroAlunos_Oboe/index.html">Oboé</a><br><br>
        `
    } else if (naipe === 'metais') {  //caso o usuario escolha metais
        instrumentosContainer.innerHTML = `
            <a href="TROMBONE/registroAlunos_Trombone/index.html">Trombone</a><br><br>
            <a href="TROMPA/registroAlunos_Trompa/index.html">Trompa</a><br><br>
            <a href="TUBA/registroAlunos_Tuba/index.html">Tuba</a><br><br>
        `
    }
}

function cordas(cordaInstrumento) {
    if (cordaInstrumento === "VIOLINO") {
          divEscolhaInstrumentos.style.display = "none"
          divAlunoProfessor.style.display = "block"
          

    } else if (cordaInstrumento === "Registrar professor") {
        window.location.href = "ProfessorViolino/index.html"
    }
}


// Função para fechar o modal e voltar à escolha do naipe
function fecharEscolhaInstrumento() {
    divEscolhaInstrumentos.style.display = "none"
    divEscolherNaipe.style.display = "block"
}

//fechar o modal(escolha do professor ou aluno)
function fecharEscolhaAlunoProfessor() {
    divAlunoProfessor.style.display = "none"
    divEscolhaInstrumentos.style.display = "Block"
}

function escolhaInstrumento() {
    divEscolhaInstrumentos.style.display = "none"
    divAlunoProfessor.style.display = "block"
}
