window.onload = function() {
    const imagens = document.querySelectorAll(".sneakesImage");
    let indiceImagemAtual = 0;

    function mudarImagem() {
        // Remove a classe 'actived' da imagem atual
        imagens[indiceImagemAtual].classList.remove('actived');

        // Calcula o índice da próxima imagem
        indiceImagemAtual = (indiceImagemAtual + 1) % imagens.length;

        // Adiciona a classe 'actived' à nova imagem
        imagens[indiceImagemAtual].classList.add('actived');
    }

    setInterval(mudarImagem, 10000);  // Troca a imagem a cada 10 segundos
};
