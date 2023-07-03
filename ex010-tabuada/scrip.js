function clicar() {
    var num = document.getElementById('num')
    var n = Number(num.value)
    var res = document.getElementById('res')
    res.innerHTML = ''    
        for(var x = 1; x <= 10; x++){ // contagem de 1 a 10
            res.innerHTML += `${n} x ${x} = ${n*x} <br> ` //<br> faz pular para a proxima linha
    }
}