// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {

    let amigos = document.querySelector('#amigo').value;
    let elementoHTML = document.getElementById('listaAmigos');
    if(amigos == ''){
        alert("Por favor, inserte un nombre");
    }else{
        listaAmigos.push(amigos);
        elementoHTML.innerHTML += `<li>${amigos}</li>`;
    };
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    
    let resultadoHTML = document.getElementById('resultado');
    if(listaAmigos.length === 0){
        alert("La lista está vacia, ingrese nombres...");
    }else{
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        resultadoHTML.innerHTML = `<li>Tu amigo secreto es: ${listaAmigos[indiceAleatorio]}</li>`;
    }
}


