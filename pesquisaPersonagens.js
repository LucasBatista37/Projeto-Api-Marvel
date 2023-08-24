var personagens = document.getElementById('personagens');
var pesquisar = document.getElementById('pesquisar');
var botao = document.getElementById('procurar')

var personagens = [
    { nomePersonagem: '3-D Man' },
    { nomePersonagem: 'A-Bomb (HAS)' },
];

function pesquisarPersonagens(termoPesquisa, personagens) {
    return personagens.filter(personagem =>
        personagem.name.toLowerCase().includes(termoPesquisa.toLowerCase())
    );
}

campoPesquisa.addEventListener('input', () => {
var termoPesquisa = campoPesquisa.value;
pesquisarPersonagens(termoPesquisa);
});

exibirPersonagens(personagens);