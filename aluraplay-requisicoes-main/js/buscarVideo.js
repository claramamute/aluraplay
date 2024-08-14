import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";


async function buscaVideo(e){
    e.preventDefault();
    const pesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(pesquisa); //ESpera  a promisse em json


    const lista = document.querySelector("[data-lista]")

    lista.innerHTML = '';

    busca.forEach(e => lista.appendChild(constroiCard(e.titulo, e.descricao, e.url, e.imagem)));
}

const botaoPesquisa = document.querySelector("[data-botao]");

botaoPesquisa.addEventListener('click', evento => buscaVideo(evento));