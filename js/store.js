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

    const resultado =
    await resposta.json();

    console.log(resultado);

}