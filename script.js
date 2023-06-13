let cor = "black";
let click = true;

function criaTela(tamanho) {
    let tela = document.querySelector(".container");
    let quadrados = tela.querySelectorAll("div");
    quadrados.forEach((div) => div.remove());
    tela.style.gridTemplateColumns = `repeat(${tamanho}, 1fr)`;
    tela.style.gridTemplateRows = `repeat(${tamanho}, 1fr)`;

    let quantidade = tamanho * tamanho
    for (let i = 0; i < quantidade; i++) {
        let quadrado = document.createElement("div");
        quadrado.addEventListener('mouseover', corQuadrado);
        tela.insertAdjacentElement("beforeend", quadrado);
    }
}

criaTela(16);

function mudaTamanho(input) {
    if (input >= 2 && input <= 100) {
        criaTela(input);
    } else {
        console.log("Muitos quadrados");
    }
}

function corQuadrado() {
   if (click) {
    if (cor === 'aleatorio') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = cor;
    }
   }
}

function trocaCor(escolha) {
    cor = escolha;
}

function limpaQuadro() {
    let tela = document.querySelector(".container");
    let quadrados = tela.querySelectorAll("div");
    quadrados.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector("body").addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            document.querySelector('.modo').textContent = 'Desenhando!'
        } else {
            document.querySelector('.modo').textContent = 'Não está desenhando'
        }
    }
});