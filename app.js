let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo);

        atualizarListaAmigos();

        document.getElementById('amigo').value = "";
    } else {
        alert("Por favor, insira um nome.");
    }
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário adicionar pelo menos 2 amigos para sortear.");
        return;
    }

    const amigosSorteados = [...amigos]; 
    const resultado = [];

    for (let i = amigosSorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]];
    }

    for (let i = 0; i < amigosSorteados.length; i++) {
        const amigoSorteado = amigosSorteados[i];
        const amigoRecebedor = amigosSorteados[(i + 1) % amigosSorteados.length]; 
        resultado.push(`${amigoSorteado} sorteou ${amigoRecebedor}`);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ""; 

    resultado.forEach((resultadoItem) => {
        const item = document.createElement('li');
        item.textContent = resultadoItem;
        listaResultado.appendChild(item);
    });
}
