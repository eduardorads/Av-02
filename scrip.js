const perguntas = [
    {
        pergunta: "O que significa IA?",
        respostas: ["Inteligência Artificial", "Interatividade Avançada", "Inteligência Ampliada"],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é uma aplicação comum de IA?",
        respostas: ["Reconhecimento de imagem", "Apontamento de mouse", "Edição de vídeo"],
        respostaCorreta: 0
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function iniciarQuiz() {
    mostrarPergunta(perguntaAtual);
}

function mostrarPergunta(index) {
    const quizContainer = document.getElementById("quiz-container");
    const pergunta = perguntas[index];
    quizContainer.innerHTML = `
        <h3>${pergunta.pergunta}</h3>
        ${pergunta.respostas.map((resposta, i) => `
            <button onclick="verificarResposta(${i})">${resposta}</button>
        `).join('')}
    `;
}

function verificarResposta(respostaUsuario) {
    const pergunta = perguntas[perguntaAtual];
    if (respostaUsuario === pergunta.respostaCorreta) {
        alert("Resposta correta!");
        pontuacao++;
    } else {
        alert("Tente novamente!");
    }

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta(perguntaAtual);
    } else {
        alert(`Quiz finalizado! Sua pontuação: ${pontuacao}`);
        perguntaAtual = 0;
        pontuacao = 0;
    }
}
