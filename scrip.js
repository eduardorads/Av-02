// Perguntas do quiz
const perguntas = [
    {
        pergunta: "O que significa IA?",
        respostas: ["Inteligência Artificial", "Informação Automatizada", "Interação Automática"],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é um exemplo de IA no cotidiano?",
        respostas: ["Plantar árvores", "Assistente virtual", "Andar de bicicleta"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual linguagem é popular para desenvolvimento de IA?",
        respostas: ["JavaScript", "Python", "HTML"],
        respostaCorreta: 1
    }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

function mostrarPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    document.getElementById('pergunta').textContent = perguntaAtual.pergunta;

    const opcoes = document.getElementById('opcoes');
    opcoes.innerHTML = '';
    perguntaAtual.respostas.forEach((resposta, indice) => {
        const button = document.createElement('button');
        button.textContent = resposta;
        button.onclick = () => verificarResposta(indice);
        opcoes.appendChild(button);
    });
}

function verificarResposta(indice) {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    if (indice === perguntaAtual.respostaCorreta) {
        alert("Correto!");
        pontuacao++;
    } else {
        alert("Errado! A resposta correta era: " + perguntaAtual.respostas[perguntaAtual.respostaCorreta]);
    }
    proximaPergunta();
}

function proximaPergunta() {
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        document.getElementById('resultado').textContent = "Você acertou " + pontuacao + " de " + perguntas.length + " perguntas!";
        document.getElementById('quiz').style.display = 'none';
    }
}

// Inicializa o quiz
mostrarPergunta();


aaaaaaaaaaaaaaaaaaaaaaaaa