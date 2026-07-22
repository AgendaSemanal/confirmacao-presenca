const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbydaiqrE6s8hY0RB-vK5-KJU0gy3905yox6Alhfi6nthaCB5jOOJGm6pAfYbOfBQOM/exec";

const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");
const telefone = document.getElementById("telefone");


// ===============================
// Máscara de telefone
// ===============================

telefone.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    if (valor.length > 11) {
        valor = valor.substring(0, 11);
    }

    if (valor.length > 10) {

        valor = valor.replace(
            /^(\d{2})(\d{5})(\d{4}).*/,
            "($1) $2-$3"
        );

    } else if (valor.length > 6) {

        valor = valor.replace(
            /^(\d{2})(\d{4})(\d+).*/,
            "($1) $2-$3"
        );

    } else if (valor.length > 2) {

        valor = valor.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
        );

    } else if (valor.length > 0) {

        valor = valor.replace(
            /^(\d+)/,
            "($1"
        );

    }

    this.value = valor;

});


// ===============================
// Envio do formulário
// ===============================

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    mensagem.innerHTML = "Enviando confirmação...";

    const dados = new FormData();

    dados.append("nome", document.getElementById("nome").value);

    dados.append("telefone", document.getElementById("telefone").value);

    dados.append("convidados", document.getElementById("convidados").value);

    fetch(URL_SCRIPT, {

        method: "POST",

        body: dados

    })

    .then(res => res.text())

    .then(() => {

        mensagem.innerHTML = "✅ Presença confirmada!";

        formulario.reset();

    })

    .catch(err => {

        console.log(err);

        mensagem.innerHTML = "❌ Erro ao confirmar.";

    });

});
