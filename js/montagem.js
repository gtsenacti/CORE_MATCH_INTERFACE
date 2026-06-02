const dados = JSON.parse(
    localStorage.getItem("resultadoIA")
);

if(dados){

    document.getElementById(
        "compatibilidade"
    ).innerHTML =
    dados.compativel
        ? "✅ Compatível"
        : "❌ Não Compatível";

    document.getElementById(
        "motivo"
    ).innerHTML =
    dados.motivo;

    document.getElementById(
        "fonte"
    ).innerHTML =
    "Fonte recomendada: "
    + dados.fonteRecomendada;

    document.getElementById(
        "sugestao"
    ).innerHTML =
    dados.sugestao;

}