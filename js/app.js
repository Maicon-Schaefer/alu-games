function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector(".dashboard__item__name").textContent;

    if (imagem.classList.contains('dashboard__item__img--rented')){
        if (confirm(`Você deseja devolver ${nomeJogo}?`) === false) {
            return;
        }
        imagem.classList.remove('dashboard__item__img--rented')
        botao.textContent = 'Alugar'
        botao.classList.remove('dashboard__item__button--return')
    } else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.textContent = 'Devolver'
        botao.classList.add('dashboard__item__button--return')
    }
    contarJogosAlugados();
}
function contarJogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Você possui ${jogosAlugados} jogos alugados.`);
}

detectarPalindromo("esse");

function detectarPalindromo(palavra) {
    let separandoLetras = palavra.split("");
    let palavraInvertida = separandoLetras.reverse("");
    palavraInvertida = palavraInvertida.join("");

    if (palavra == palavraInvertida) {
        console.log(`A palavra "${palavra}" é um palíndromo.`)
    } else {
        console.log(`A palavra "${palavra}" não é um palíndromo.`)
    }
}

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c];
    numerosOrdenados.sort(function(x, y) {return x - y });
    console.log(`Números ordenados: ${numerosOrdenados}`);
}

ordenarNumeros(6,2,2);

