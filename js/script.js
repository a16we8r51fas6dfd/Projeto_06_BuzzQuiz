const criacaoQuizElemento = document.querySelector(".criacao-quiz")
const criacaoPerguntasElemento = document.querySelector(".criacao-perguntas")
let informacoesBasicasQuiz = {}


function quizz(dados){


}

obterQuizzes();
function obterQuizzes(){
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');

    promessa.then(console.log("deuboa"))
    promessa.catch(console.log("deuruim"))
}

function criarQuizz(){
    console.log('teste');
}

function prosseguirPerguntas() {
    const infoTitulo = document.querySelector(".info-titulo").value
    const infoURL = document.querySelector(".info-url").value
    const infoPerguntas = document.querySelector(".info-qtd-perguntas").value
    const infoNiveis = document.querySelector(".info-qtd-niveis").value


    if ((19 > infoTitulo.length && infoTitulo.length < 65) || infoPerguntas < 3 || infoNiveis < 2) {
        alert("respondeu o formulario errado doidão, lanse a braba novamente")
    } else {
        criacaoQuizElemento.classList.add("escondido")
        criacaoPerguntasElemento.classList.remove("escondido")
    }
}

function prosseguirNiveis() {
    console.log("eae bobao")
}