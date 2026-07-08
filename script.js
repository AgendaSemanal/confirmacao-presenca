const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbydaiqrE6s8hY0RB-vK5-KJU0gy3905yox6Alhfi6nthaCB5jOOJGm6pAfYbOfBQOM/exec";

const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    mensagem.innerHTML="Enviando confirmação...";

    const dados = new FormData();

    dados.append("nome",document.getElementById("nome").value);

    dados.append("convidados",document.getElementById("convidados").value);

    fetch(URL_SCRIPT,{

        method:"POST",

        body:dados

    })

    .then(res=>res.text())

    .then(res=>{

        mensagem.innerHTML="✅ Presença confirmada!";

        formulario.reset();

    })

    .catch(err=>{

        console.log(err);

        mensagem.innerHTML="❌ Erro ao confirmar.";

    });

});
