let livros = [];
const endponitDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endponitDaAPI);
    livros = await res.json();
    console.table(livros);
    exibirOsLivrosNaTela(livros);
};

const ElementoParaInserirLivros = document.getElementById("livros");

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        ElementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });
};