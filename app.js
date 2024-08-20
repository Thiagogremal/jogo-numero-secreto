/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto';*/

/*let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha entre um numero entre 1 e 10';*/

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function verificarChute(){

    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto)
    {
        let palavraTentativa = tentativas> 1?'tentativas':'tentativa';
        exibirTextoNaTela('h1','Acertou');
        let mensagemTentativas = `Voce acertou com ${tentativas} ${palavraTentativa}` 
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else {
        
        if(chute < numeroSecreto)
        {
        exibirTextoNaTela('h1','Errou');
        exibirTextoNaTela('p','O numero secreto é maior.');
        }

        else 
        {
    
            exibirTextoNaTela('h1','Errou');
            exibirTextoNaTela('p','O numero secreto é menor.');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function gerarNumeroAleatorio(){

    let numeroEscolhido =  parseInt((Math.random()*numeroLimite)+1);
    let quantidadeNumeroEscolhidos = listaDeNumerosSorteados.length;

    if(quantidadeNumeroEscolhidos == numeroLimite){

        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }

    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }


}

function reiniciarJogo(){

    numeroSecreto =  gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
    exibirMensagemInicial();
}

function exibirMensagemInicial(){

    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha entre um numero entre 1 e 10');

}
