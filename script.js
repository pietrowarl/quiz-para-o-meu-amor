let perguntas = [
    "Onde nos falamos pela primeira vez?",
    "Qual o dia que ficamos pela primeira vez?",
    "Qual o dia nos vimos pela primeira vez depois do recesso?",
    "Qual o dia que eu fui pela primeira vez na sua casa?",
    "Qual a noite mais incrível de nossas vidas?",
    "Qual a nossa foto que eu me acho parecido com um bebê?",
    "Qual o nosso jogo favorito que nos uniu pra sempre?"
];

let respostasCorretas = [
    "No ginásio",
    "Dia 20 de setembro",
    "Dia 9 de outubro",
    "Dia 17 de novembro",
    "A noite de virada de ano",
    "A foto que você está sem barba",
    "O minecraft"
];

let indice = 0;

// Espalhar corações em todas as páginas
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 15; i++) {
        let coracao = document.createElement("img");
        coracao.src = "imagens/coracao.png";
        coracao.classList.add("coracao-espalhado");
        // Para os corações
let topPos = (Math.random() * 80) + "vh";
let leftPos = (Math.random() * 95) + "vw";

// Evita que os corações fiquem sobre a área da imagem
do {
    topPos = Math.random() * 80;
    leftPos = Math.random() * 95;
} while (
    (topPos > 30 && topPos < 55) ||  // Evita a área central vertical da imagem
    (leftPos > 20 && leftPos < 80)   // Evita a área onde a imagem pode aparecer
);

// Evitar o centro da tela (onde a imagem aparece)
let topCoracao, leftCoracao;

do {
  topCoracao = (Math.random() * 70);
  leftCoracao = (Math.random() * 90);
} while ((topCoracao > 20 && topCoracao < 60) && (leftCoracao > 20 && leftCoracao < 80));

coracao.style.top = topCoracao + "vh";
coracao.style.left = leftCoracao + "vw";
// Adicionar um delay para evitar que fiquem muito próximos
setTimeout(() => {
    document.body.appendChild(coracao);
}, Math.random() * 500);
    }
});

function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    if (resposta.trim().toLowerCase() === respostasCorretas[indice].toLowerCase()) {
        alert("Correto!");
        mostrarImagem();
        document.getElementById("continuar").style.display = "block";
    } else {
        alert("Tente novamente.");
    }
}

function mostrarImagem() {
    let imagem = document.getElementById("imagem");
    imagem.src = "imagens/img" + (indice + 1) + ".jpg";
    imagem.style.display = "block";
    imagem.classList.add("centralizar");
    document.getElementById("pergunta").style.display = "none";
    document.getElementById("resposta").style.display = "none";
    document.querySelector("button").style.display = "none";
    
}

function proximaPergunta() {
    indice++;
    if (indice < perguntas.length) {
        document.getElementById("pergunta").innerText = "Pergunta " + (indice + 1) + ": " + perguntas[indice];
        document.getElementById("pergunta").style.display = "block";
        document.getElementById("resposta").style.display = "block";
        document.getElementById("enviar").style.display = "block";
        document.getElementById("continuar").style.display = "none";
        document.getElementById("imagem").style.display = "none";
        document.getElementById("resposta").value = "";
        document.getElementById("decoracao").innerHTML = "";
        adicionarDecoracao();

    } else if (indice === perguntas.length) {  
    console.log("Quiz finalizado! Exibindo mensagem final."); // Depuração no console

    let perguntaElement = document.getElementById("pergunta");
    if (perguntaElement) {
        perguntaElement.style.display = "block"; // Garante que a mensagem apareça
        perguntaElement.innerText = "Parabéns, meu amor, você conseguiu concluir o quiz e conquistou completamente e eternamente o meu coração! Obrigado por tudo, minha princesa! Eu te amo demais, e isso nunca vai mudar.";
perguntaElement.classList.add("mensagem-final"); // Adiciona a classe CSS para centralizar e estilizar

        // Ocultar elementos desnecessários
        document.getElementById("resposta").style.display = "none";
        document.getElementById("enviar").style.display = "none";
        document.getElementById("continuar").style.display = "none";
        document.getElementById("imagem").style.display = "none";

        // Centralizar e estilizar a mensagem final
        perguntaElement.style.textAlign = "center";
        perguntaElement.style.fontSize = "22px";
        perguntaElement.style.color = "#ff69b4"; // Um rosa bonito
    } else {
        console.error("Elemento 'pergunta' não encontrado.");
    }
}

    

}

function adicionarDecoracao() {
    let decoracao = document.getElementById("decoracao");
if (decoracao) {
    decoracao.innerHTML = "";
} else {
    console.error("Elemento 'decoracao' não encontrado!");
}

    for (let i = 0; i < 15; i++) {
        let coracao = document.createElement("img");
        coracao.src = "imagens/coracao.png";
        coracao.classList.add("coracao-espalhado");
        // Ajusta para não aparecerem no meio da imagem
        do {
            var topPos = Math.random() * 80;
            var leftPos = Math.random() * 95;
        } while (
            (topPos > 30 && topPos < 55) ||  // Evita a área central da tela
            (leftPos > 20 && leftPos < 80)   // Evita sobrepor perguntas
        );
        
        coracao.style.top = topPos + "vh";
        coracao.style.left = leftPos + "vw";        
                
        decoracao.appendChild(coracao);
    }
}
