// Variáveis

const chk = document.getElementById('chk');
const input = document.querySelector(".conteudo__esquerdo__input");

const botao_cript = document.querySelector(".conteudo__esquerdo__botao__criptografar");
const botao_descript = document.querySelector(".conteudo__esquerdo__botao__descriptografar");

const inputTexto = document.querySelector(".conteudo__esquerdo__input");
const resultado = document.querySelector("#resultado");

const mensagem = document.querySelector(".mensagem");
const texto_informativo = document.querySelector(".conteudo__direito__texto")

// Função que irá codificar o texto recebido pelo input.
function codificar(){
    try {
    caracteres = [];
    caracteres = inputTexto.value.split("");

    caracteres.forEach(function(item, i) {
        if(item == "a") {
            caracteres[i] = "ai";

        }else if(item == "e") {
            caracteres[i] = "enter";

        }else if(item == "i") {
            caracteres[i] = "imes";

        }else if(item == "o") {
            caracteres[i] = "ober";

        } else if(item == "u") {
            caracteres[i] = "ufat";
        }
        texto = caracteres.join(""); 
        return texto;
    }) 
    if(caracteres == "") throw alert("Digite um texto!");
}   catch(erro){
    console.log(`Aconteceu um erro: ${erro}.`)
}
}

// Função que irá decodificar o texto recebido pelo input.
function decodificar() {
    var codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    texto = inputTexto.value;

    for(var i = 0; i < codigo.length; i++) {
        if(texto.includes(codigo[i][1])) {
            texto = texto.replaceAll(codigo[i][1], codigo[i][0]);
        }
    } return texto;
};

// Chama as funções codificar e exibirResultado, ao ser precionado o botão: Criptografar.
botao_cript.addEventListener("click", () => {
    codificar();
    exibirResultado();
});

// Chama as funções decodificar e exibirResultado, ao ser precionado o botão: Descriptografar.
botao_descript.addEventListener("click", () => {
    decodificar();
    exibirResultado();
});

// Função que irá ocultar a div que cotem a imagem e os dois parágrafos do lado direito da página.
function exibirResultado() {
    mensagem.style.backgroundImage = "none";
    mensagem.innerHTML = texto;
    texto_informativo.style.display = "none";

};

// Função que copia o resultado da encripitação ou desencripitação.
function copiar() {
    navigator.clipboard.writeText(texto).then(() => {
        alert("Copiado!");
    })
}

// Script para o modo escuro
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

// Script para o tratamento dos caracteres especiais e letras maiúsculas. Informando ao usuário que não são aceitos esses caracteres.
input.addEventListener("keypress", function(e) {// Verifica o que está sendo digitado no input.

    // Se o que está sendo digitado no input for diferente de "a ao z" de "0 a 9", não será considerado. E mostrará um alerta "Digite um texto válido! Sem caracteres especiais ou letras maiúsculas."
    if(!checkChar(e)) {
        e.preventDefault();
        alert("Digite um texto válido. Sem caracteres especiais ou letras maiúsculas.")
    }
});

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);

    const pattern = '[a-z0-9]'; // Setando os caracteres que serão aceitos, de "a ao z" e "0 a 9".

    if(char.match(pattern)) {
        return true;
    }
}