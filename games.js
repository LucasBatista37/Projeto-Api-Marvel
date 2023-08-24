fetch('http://gateway.marvel.com/v1/public/series?ts=1691088785&apikey=c703b4efeca0fba44b3282021d892176&hash=66a6c830908eb3e61680b91f278e4667')
.then(response => response.json())
.then(jsonParsed => {
    const divPersonagem = document.getElementById('personagens');

    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + "." + element.thumbnail.extension;
        const nomePersonagem = element.name;
        createDivPersonagem(srcImage, nomePersonagem, divPersonagem);
    });
    
    function createDivPersonagem(srcImage, nomePersonagem, divToAppend){
        const divPai = document.createElement('div');
        const divFilho = document.createElement('div');
        const textName = document.createElement('text'); 
        const img = document.createElement('img');

        textName.textContent = nomePersonagem;
        img.src = srcImage;

        divFilho.appendChild(img);
        divFilho.appendChild(textName);
        divPai.appendChild(divFilho);
        divToAppend.appendChild(divPai);

        divPai.classList.add("personagem");
    }
    console.log(jsonParsed);
});