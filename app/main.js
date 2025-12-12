const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const elementoParaInserirLivros = document.getElementById('livros');
let livros = [];
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const resposta = await fetch(endpointDaAPI);
    livros = await resposta.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}