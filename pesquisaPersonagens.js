var personagens = document.getElementById('personagens');
var pesquisar = document.getElementById('pesquisar');

var personagens = [
    { name: '3-D Man' },
    { name: 'A-Bomb (HAS)' },
];

function pesquisarPersonagens(termoPesquisa, personagens) {
    return personagens.filter(personagem =>
        personagem.name.toLowerCase().includes(termoPesquisa.toLowerCase())
    );
}

exibirPersonagens(personagensFiltrados);

campoPesquisa.addEventListener('input', () => {
const termoPesquisa = campoPesquisa.value;
pesquisarPersonagens(termoPesquisa);
});

exibirPersonagens(personagens);