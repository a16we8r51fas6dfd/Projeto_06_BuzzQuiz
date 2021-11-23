const criacaoQuizElemento = document.querySelector(".criacao-quiz")
const criacaoPerguntasElemento = document.querySelector(".criacao-perguntas")
const perguntasElemento = document.querySelector(".perguntas")
let informacoesBasicasQuiz = {}
const infoPerguntas = document.querySelector(".info-qtd-perguntas").value
const URLValidacao = /^(ftp|http|https):\/\/[^ "]+$/
const corValidacao = /^#(?:[0-9a-fA-F]{3}){1,2}$/
const homeElemento = document.querySelector(".home")
const homeElementoRespondendo = document.querySelector(".homeRespondendoQuizz")



obterQuizzes();
function obterQuizzes(){
 
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes' );

    promessa.then(renderizarquizzes)
}

function renderizarquizzes(resposta){

    const quizz = resposta.data;
    const quizzes = document.querySelector(".listaQuizzes .containerLista .C1")
    for(let i=0; i<3; i++){
        quizzes.innerHTML += `
        <div onclick="abrirQuizz()" class="quizz">
        <img src="${quizz[i].image}">
             <div class="title">
        ${quizz[i].title}
             </div>
        </div>
        `
    }
    const quizzes2 = document.querySelector(".listaQuizzes .containerLista .C2")
    for(let i=0; i<3; i++){
        quizzes2.innerHTML += `
        <div onclick="abrirQuizz()" class="quizz">
        <img  src="${quizz[i].image}">
        <div class="title">
        ${quizz[i].title}
        </div>
        </div>
        `
    }
}
function abrirQuizz(){
        homeElemento.classList.add("escondido");
        homeElementoRespondendo.classList.remove("escondido");

        const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/2');

        promessa.then(renderizarquizz);
}

function renderizarquizz(resposta){
    const quizz = resposta.data;
   
    const enviarQuizz = document.querySelector(".homeRespondendoQuizz .tituloQuizz");
    enviarQuizz.innerHTML += `
    <div id = "${quizz.id}"class="tituloQuizz"> 
         <p> ${quizz.title}</p> 
          <img src="${quizz.image}">          
    </div>`
    // <img src="${quizz.image}">  
    // document.getElementById("1").style.backgroundImage = "url('`${quizz.image}`')";
    // document.getElementById("1").style.backgroundRepeat = "no-repeat";
    // document.getElementById("1").style.backgroundSize = "cover";

    const pergunta = document.querySelector(".homeRespondendoQuizz .containerRespondendoQuizz")
    for(let i=0; i<8; i++){
        pergunta.innerHTML += `
        <div class="perguntaRespondendoQuizz">
        <p>${quizz.questions[i].title}</p>
        
        </div>`
        const respostas = document.querySelector(".homeRespondendoQuizz .containerRespondendoQuizz")
        respostas.innerHTML += ` 
        <div class="containerRespostas">
        <div onclick="selecionarResposta(this)" class="respostas">
        <img src="${quizz.questions[i].answers[0].image}">
        <p>${quizz.questions[i].answers[0].text}</p>
        </div>
        <div onclick="selecionarResposta(this)" class="respostas">
        <img src="${quizz.questions[i].answers[1].image}">
        <p>${quizz.questions[i].answers[1].text}</p>
        </div>
        <div onclick="selecionarResposta(this)" class="respostas">
        <img src="${quizz.questions[i].answers[2].image}">
        <p>${quizz.questions[i].answers[2].text}</p>
        </div>
        <div onclick="selecionarResposta(this)" class="respostas">
        <img src="${quizz.questions[i].answers[3].image}">
        <p>${quizz.questions[i].answers[3].text}</p>
        </div>
        `   
    }
}

function selecionarResposta(resposta){
    
        resposta.classList.add("selecionado");
    
}

function criarQuizz(){
   
    homeElemento.classList.add("escondido");
    criacaoQuizElemento.classList.remove("escondido"); 


}

function prosseguirPerguntas() {
    const infoTitulo = document.querySelector(".info-titulo").value
    const infoURL = document.querySelector(".info-url").value
    const infoNiveis = document.querySelector(".info-qtd-niveis").value
    const infoPerguntas = document.querySelector(".info-qtd-perguntas").value

    if ((19 > infoTitulo.length && infoTitulo.length < 65) || infoPerguntas < 1 || infoNiveis < 2 || URLValidacao.test(infoURL) !== true) {
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
            <div class="pergunta${i} pergunta recolhido">
                <h3>Pergunta ${i}</h3>
                <input class="pergunta${i}-titulo" type="text" placeholder="Texto da pergunta">
                <input class="pergunta${i}-cor" type="text" placeholder="Cor de fundo da pergunta">
        
                <h3>Resposta correta</h3>
                <input class="pergunta${i}-texto" type="text" placeholder="Resposta correta">
                <input class="pergunta${i}-imagem" type="text" placeholder="URL da imagem">
        
                <h3>Respostas incorretas</h3>
                <input class="pergunta${i}-texto2" type="text" placeholder="Resposta incorreta 1">
                <input class="pergunta${i}-imagem2 espaco" type="text" placeholder="URL da imagem">
        
                <input class="pergunta${i}-texto3" type="text" placeholder="Resposta incorreta 2">
                <input class="pergunta${i}-imagem3 espaco" type="text" placeholder="URL da imagem">
        
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
        } else if (perguntaImagem4 === "" && perguntaTexto4 === ""){
            informacoesBasicasQuiz.questions.push({
                title: perguntaTitulo,
                color: perguntaCor,
                answers: [
                    {
                        text: perguntaTexto,
                        image: perguntaImagem,
                        isCorrectAnswer: true
                    },
                    {
                        text: perguntaTexto2,
                        image: perguntaImagem2,
                        isCorrectAnswer: false
                    },
                    {
                        text: perguntaTexto3,
                        image: perguntaImagem3,
                        isCorrectAnswer: false
                    }
                ]
            })
        } else if (perguntaImagem3 === "" && perguntaTexto3=== "") {
            informacoesBasicasQuiz.questions.push({
                title: perguntaTitulo,
                color: perguntaCor,
                answers: [
                    {
                        text: perguntaTexto,
                        image: perguntaImagem,
                        isCorrectAnswer: true
                    },
                    {
                        text: perguntaTexto2,
                        image: perguntaImagem2,
                        isCorrectAnswer: false
                    }
                ]
            })
        } else {
            informacoesBasicasQuiz.questions.push({
                title: perguntaTitulo,
                color: perguntaCor,
                answers: [
                    {
                        text: perguntaTexto,
                        image: perguntaImagem,
                        isCorrectAnswer: true
                    },
                    {
                        text: perguntaTexto2,
                        image: perguntaImagem2,
                        isCorrectAnswer: false
                    },
                    {
                        text: perguntaTexto3,
                        image: perguntaImagem3,
                        isCorrectAnswer: false
                    },
                    {
                        text: perguntaTexto4,
                        image: perguntaImagem4,
                        isCorrectAnswer: false
                    }
                ]
            })
        }
        
        console.log(informacoesBasicasQuiz)



    }

}