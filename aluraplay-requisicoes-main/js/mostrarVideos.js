import { conectaApi } from "./conectaApi.js"; // importou a variável que exportou no outro arquivo conectaApi
// Isso permite que você use a função listaVideos

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao,url,imagem){
    const video = document.createElement('li');
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>`

    return video
}

//Ela utiliza a função conectaApi.listaVideos() para obter uma lista de vídeos. Como a função listaVideos é assíncrona, é necessário aguardar sua conclusão usando await
async function listaVideo(){ //Aguardar as promessas p/ ter acesso ao valor
    const listaAPI = await conectaApi.listaVideos();
    listaAPI.forEach(e => lista.appendChild(constroiCard(e.titulo, e.descricao, e.url, e.imagem)));
}

listaVideo(); //Aparecer na tela 