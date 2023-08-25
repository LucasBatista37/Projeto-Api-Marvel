var personagens = document.getElementById('personagens');
var pesquisar = document.getElementById('pesquisar');
var botao = document.getElementById('procurar');

var personagens = [
    { nomePersonagem: '3-D Man' },
    { nomePersonagem: 'A-Bomb (HAS)' },
    { nomePersonagem: 'A.I.M.' },
    { nomePersonagem: 'Aaron Stack' },
    { nomePersonagem: 'Abomination (Emil Blonsky)' },
    { nomePersonagem: 'Abomination (Ultimate)' },
    { nomePersonagem: 'Absorbing Man' },
    { nomePersonagem: 'Abyss' },
    { nomePersonagem: 'Abyss (Age of Apocalypse)' },
    { nomePersonagem: 'Adam Destine' },
    { nomePersonagem: 'Adam Warlock' },
    { nomePersonagem: 'Aegis (Trey Rollins)' },
    { nomePersonagem: 'Aero (Aero)' },
    { nomePersonagem: 'Agatha Harkness' },
    { nomePersonagem: 'Agent Brand' },
    { nomePersonagem: 'Agent X (Nijo)' },
    { nomePersonagem: 'Agent Zero' },
    { nomePersonagem: 'Agents of Atlas' },
    { nomePersonagem: 'Aginar' },
    { nomePersonagem: 'Air-Walker (Gabriel Lan)' },
];

botao.addEventListener('click', function() {
    const nomePesquisado = inputPesquisar.value.toLowerCase();
    const personagensFiltrados = personagens.filter(personagem => 
        personagem.nomePersonagem.toLowerCase().includes(nomePesquisado)
    );
    
    atualizarListaPersonagens(personagensFiltrados);
});


function atualizarListaPersonagens(personagensFiltrados) {
    const divPersonagem = document.getElementById('personagens');
    divPersonagem.innerHTML = ''; 

    personagensFiltrados.forEach(personagem => {
        const nomePersonagem = personagem.nomePersonagem;
        createDivPersonagem(nomePersonagem, divPersonagem);
    });
}
