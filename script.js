function insert(num) {
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function clean() {
    document.getElementById('resultado').innerHTML = ""
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML
    if (resultado.includes('%')) {
        var partes = resultado.split('%')
        var num = eval(partes[0])
        document.getElementById('resultado').innerHTML = (num / 100) * (partes[1] ? eval(partes[1]) : 1)
    } else {
        try {
            document.getElementById('resultado').innerHTML = eval(resultado)
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Erro"
        }
    }
}

function porcento() {
    var resultado = document.getElementById('resultado').innerHTML
    if (resultado) {
        var num = eval(resultado)
        document.getElementById('resultado').innerHTML = num / 100
    }
}

function raiz() {
    var resultado = document.getElementById('resultado').innerHTML
    if (resultado) {
        var num = eval(resultado)
        document.getElementById('resultado').innerHTML = Math.sqrt(num)
    }
}
