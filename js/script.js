const criacaoQuizElemento = document.querySelector(".criacao-quiz")
const criacaoPerguntasElemento = document.querySelector(".criacao-perguntas")
const perguntasElemento = document.querySelector(".perguntas")
let informacoesBasicasQuiz = {}
const infoPerguntas = document.querySelector(".info-qtd-perguntas").value
const URLValidacao = /^(ftp|http|https):\/\/[^ "]+$/
const homeElemento = document.querySelector(".home")


function quizz(dados){


}

obterQuizzes();
function obterQuizzes(){
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');

    promessa.then(console.log("deuboa"))
    promessa.catch(console.log("deuruim"))
}

function criarQuizz(){
    homeElemento.classList.add("escondido")
    criacaoQuizElemento.classList.remove("escondido")
}

function prosseguirPerguntas() {
    const infoTitulo = document.querySelector(".info-titulo").value
    const infoURL = document.querySelector(".info-url").value
    const infoNiveis = document.querySelector(".info-qtd-niveis").value

    if ((19 > infoTitulo.length && infoTitulo.length < 65) || infoPerguntas < 3 || infoNiveis < 2 || URLValidacao.test(infoURL) !== true) {
        alert("respondeu o formulario errado doidão, lanse a braba novamente")
    } else {
        criacaoQuizElemento.classList.add("escondido")
        criacaoPerguntasElemento.classList.remove("escondido")
    }

    informacoesBasicasQuiz = {
        title: infoTitulo,
        image: infoURL,
        questions: []
    }

    for(let i = 1; i <= infoPerguntas; i++) {
        perguntasElemento.innerHTML += `
            <div class="pergunta${i} pergunta">
                <h3>Pergunta ${i}</h3>
                <input class="pergunta${i}-titulo" type="text" placeholder="Texto da pergunta">
                <input class="pergunta${i}-cor" type="text" placeholder="Cor de fundo da pergunta">
        
                <h3>Resposta correta</h3>
                <input class="pergunta${i}-texto" type="text" placeholder="Resposta correta">
                <input class="pergunta${i}-imagem" type="text" placeholder="URL da imagem">
        
                <h3>Respostas incorretas</h3>
                <input class="pergunta${i}-texto2" type="text" placeholder="Resposta incorreta 1">
                <input class="pergunta${i}-imagem2" type="text" placeholder="URL da imagem">
        
                <input class="pergunta${i}-texto3" type="text" placeholder="Resposta incorreta 2">
                <input class="pergunta${i}-imagem3" type="text" placeholder="URL da imagem">
        
                <input class="pergunta${i}-texto4" type="text" placeholder="Resposta incorreta 3">
                <input class="pergunta${i}-imagem4" type="text" placeholder="URL da imagem">
            </div>`
    }

    console.log(informacoesBasicasQuiz)
}

function prosseguirNiveis() {
    for (let i = 1; i <= infoPerguntas; i++) {
        const perguntaTitulo = document.querySelector(`.pergunta${i}-titulo`).value
        const perguntaCor = document.querySelector(`.pergunta${i}-cor`).value
        const perguntaTexto = document.querySelector(`.pergunta${i}-texto`).value
        const perguntaImagem = document.querySelector(`.pergunta${i}-imagem`).value
        const perguntaTexto2 = document.querySelector(`.pergunta${i}-texto2`).value
        const perguntaImagem2 = document.querySelector(`.pergunta${i}-imagem2`).value
        const perguntaTexto3 = document.querySelector(`.pergunta${i}-texto3`).value
        const perguntaImagem3 = document.querySelector(`.pergunta${i}-imagem3`).value
        const perguntaTexto4 = document.querySelector(`.pergunta${i}-texto4`).value
        const perguntaImagem4 = document.querySelector(`.pergunta${i}-imagem4`).value
        const corValidacao = /^[#][0-9A-F]{7}$/i

        if (perguntaTitulo.length < 20) {
            alert("Texto da pergunta deve ter no mínimo 20 caracteres")
        } else if (corValidacao.test(perguntaCor) === false) {
            alert("cor hexadeximal inválida")
        } else if (perguntaTexto === "") {
            alert("texto resposta correta não pode estar vazio")
        } else if (URLValidacao.test(perguntaImagem) === false) {
            alert("url da imagem inválida")
        } else if (perguntaTexto2 === "") {
            alert("texto resposta errada 1 não pode estar vazio")
        } else if (URLValidacao.test(perguntaImagem2) === false) {
            alert("url da imagem 2 inválida")
        } else if (URLValidacao.test(perguntaImagem3) === false && perguntaTexto3 !== "") {
            alert("url da imagem 3 inválida")
        } else if (URLValidacao.test(perguntaImagem4) === false && perguntaTexto4 !== "") {
            alert("url da imagem 4 inválida")
        } 
        
        console.log(informacoesBasicasQuiz)



    }

}