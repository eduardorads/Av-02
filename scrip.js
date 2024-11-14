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
    
    // Atualizar a contagem de perguntas restantes
    document.getElementById('contador').textContent = `${indicePerguntaAtual + 1} de ${perguntas.length}`;
    
    const opcoes = document.getElementById('opcoes');
    opcoes.innerHTML = ''; // Limpar as opções anteriores
    perguntaAtual.respostas.forEach((resposta, indice) => {
        const button = document.createElement('button');
        button.textContent = resposta;
        button.classList.add('opcao'); // Classe para opções (pode adicionar estilos mais tarde)
        button.onclick = () => verificarResposta(indice, button);
        opcoes.appendChild(button);
    });
}

function verificarResposta(indice, button) {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    
    // Desabilitar todos os botões após a resposta ser escolhida
    const botoes = document.querySelectorAll('#opcoes button');
    botoes.forEach(b => b.disabled = true);
    
    // Mostrar feedback visual
    if (indice === perguntaAtual.respostaCorreta) {
        button.classList.add('correto');
        pontuacao++;
    } else {
        button.classList.add('errado');
        const respostaCorreta = document.querySelectorAll('#opcoes button')[perguntaAtual.respostaCorreta];
        respostaCorreta.classList.add('correto'); // Destacar a resposta correta
    }
    
    // Esperar um tempo antes de ir para a próxima pergunta
    setTimeout(proximaPergunta, 1000);
}

function proximaPergunta() {
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        document.getElementById('resultado').textContent = "Você acertou " + pontuacao + " de " + perguntas.length + " perguntas!";
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
    }
}

// Inicializa o quiz
mostrarPergunta();
