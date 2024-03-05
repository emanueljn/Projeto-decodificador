// Variáveis
const chk = document.getElementById('chk');
const input = document.querySelector(".conteudo__esquerdo__input");



chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})



const botao_cript = document.querySelector(".conteudo__esquerdo__botao__criptografar");
const botao_descript = document.querySelector(".conteudo__esquerdo__botao__descriptografar");

const inputTexto = document.querySelector(".conteudo__esquerdo__input");
const resultado = document.querySelector("#resultado");

const mensagem = document.querySelector(".mensagem");
const texto_informativo = document.querySelector(".conteudo__direito__texto")

// Função que irá codificar o texto recebido pelo input.
function codificar(){
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
};

// Função que irá decodificar o texto recebido pelo input.
function decodificar() {
    var codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    texto = inputTexto.value;

    for(var i = 0; i < codigo.length; i++) {
        if(texto.includes(codigo[i][1])) {
            texto = texto.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return texto;
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

    /*document.querySelector(".conteudo__direito__texto").style.display="none";
    document.querySelector(".mensagem").style.display="none";
    document.getElementById("resultado").style.display="block";
    document.getElementById("resultado").innerHTML = texto;*/
};




// Função que copia o resultado da encripitação ou desencripitação.
function copiar() {
    navigator.clipboard.writeText(texto).then(() => {
        alert("Copiado!");
    })
}