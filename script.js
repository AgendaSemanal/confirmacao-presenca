// ==========================================
// URL DO GOOGLE APPS SCRIPT
// (Será substituída depois)
// ==========================================

const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbydaiqrE6s8hY0RB-vK5-KJU0gy3905yox6Alhfi6nthaCB5jOOJGm6pAfYbOfBQOM/exec";


// ==========================================
// FORMULÁRIO
// ==========================================

const formulario = document.getElementById("formulario");

const mensagem = document.getElementById("mensagem");


// ==========================================
// ENVIO
// ==========================================

formulario.addEventListener("submit", async function(e){

    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    const convidados = document.getElementById("convidados").value.trim();

    if(nome===""){

        alert("Informe seu nome.");

        return;

    }

    mensagem.innerHTML = "Enviando confirmação...";

    try{

        const resposta = await fetch(URL_SCRIPT,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                nome:nome,

                convidados:convidados

            })

        });

        const resultado = await resposta.json();

        if(resultado.status==="sucesso"){

            mensagem.innerHTML="✅ Presença confirmada com sucesso!";

            formulario.reset();

        }else{

            mensagem.innerHTML="❌ Ocorreu um erro. Tente novamente.";

        }

    }

    catch(erro){

        console.error(erro);

        mensagem.innerHTML="❌ Não foi possível enviar sua confirmação.";

    }

});
