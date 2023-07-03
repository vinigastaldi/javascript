function verificar() {
    var img = document.getElementById('imagem')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique o ano informado e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
            if (idade > 120) {
                alert('[ERRO] Verifique o ano informado e tente novamente!')
            }
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 10) {
                img.src = 'criança.homem.jpg'
            } else if (idade > 10 && idade <= 25) {
                img.src = 'jovem.homem.jpg'
            } else if (idade > 25  && idade <= 50) {
                img.src = 'adulto.homem.jpg'
            } else {
                img.src = 'idoso.homem.jpg'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <= 10) {
                img.src = 'criança.mulher.jpg'
            } else if (idade > 10 && idade <= 25) {
                img.src = 'jovem.mulher.jpg'
            } else if (idade > 25  && idade <= 50) {
                img.src = 'adulto.mulher.jpg'
            } else {
                img.src = 'idoso.mulher.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `É um(a) ${genero} de ${idade} anos.`
    }
}