var mensagem = "";

function mostrarResultado() {
    document.getElementById("conteudo_direito").style.display="none";
    document.getElementById("resultado").style.display="block"; 
}

function criptografia() {
    mensagem = document.getElementById("mensagem").value;
    mensagem = mensagem.replace(/a/g, "ai");

    document.getElementById("resultado").innerHTML=mensagem;
    mostrarResultado();
    
}

function descriptografia() {

}