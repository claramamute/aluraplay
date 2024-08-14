//Função faz uma requisição HTTP para buscar uma lista de vídeos de uma URL específica e retorna esses dados

async function listaVideos(){
    // Aqui, o código faz uma requisição HTTP usando a função fetch para obter dados da URL fornecida.
    const conexao = await fetch("http://localhost:3000/videos")
    const listar = await conexao.json()

    return listar 
}

async function criarVideo(titulo, descricao,url,imagem){
    const conexao = await fetch("http://localhost:3000/videos", 
    {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    const listar = await conexao.json();
    return listar;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

//Exporta um objeto chamado conectaApi, que contém a função listaVideos
export const conectaApi = { 
    listaVideos,
    criarVideo,
    buscaVideo
}