// Variável global da montagem
let montagem = {
    processador: "",
    placaMae: "",
    memoria: "",
    placaVideo: ""
};

// Função que seleciona o processador
function selecionarProcessador(nome) {
    montagem.processador = nome;
}

// Função que seleciona a placa-mãe
function selecionarPlacaMae(nome) {
    montagem.placaMae = nome;
}

// Função que seleciona a memória
function selecionarMemoria(nome) {
    montagem.memoria = nome;
}

// Função que seleciona a placa vídeo
function selecionarPlacaVideo(nome) {
    montagem.placaVideo = nome;
}

async function verificarCompatibilidade(){

    const resposta =
    await fetch(
        "http://localhost:3000/compatibilidade",
        {
            method:"POST",
            headers:{
                "Content-Type":
                "application/json"
            },
            body:JSON.stringify({

                processador:
                "AMD Ryzen 5 5600GT",

                placaMae:
                "MSI B550M PRO-VDH WIFI",

                memoria:
                "Kingston Fury 16GB DDR4",

                placaVideo:
                "RTX 4060"

            })
        }
    );

    const resultado = await resposta.json();

    localStorage.setItem(
    "resultadoIA",
    JSON.stringify(resultado)
);

window.location.href = "montagem.html";

    console.log(resultado);

}