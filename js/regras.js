function validar(dom, tipo) {

    document.getElementById("kw").focus();
    switch (tipo) {
        case 'num': var regex = /[A-Za-z]/g; break;
        case 'text': var regex = /\d/g; break;
    }
    dom.value = dom.value.replace(regex, "");
}

function calcular() {
    var kw = parseInt(document.getElementById('kw').value, 10);
    var multiplica = 720;
    var divide = 1000;
    var restante = 0.59902;
    resultado = kw * multiplica / divide * restante;
    document.getElementById('resultado').value = resultado.toFixed(2);

  }