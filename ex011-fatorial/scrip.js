function clicar() {
    var num = document.getElementById('num')
    var n = Number(num.value)
    var res = document.getElementById('res')
    var nmr = 1
    res.innerHTML = ''
        if (n < 0) {
            res.innerHTML = ''
            alert('[ERRO] Coloque apenas numeros inteiros!')
        } else if (n == 1){
            res.innerHTML = '1! = 1'
        } else if (n == 0) {
            res.innerHTML = '0! = 1'
        } else {
            for(var f = n; f > 1; f--) {
                nmr *= f //mesma coisa q nmr = nmr * f
                res.innerHTML = `${n}! = ${nmr} <br>`
            }
        }    
}
//1*1 1*2 2*3 6*4 24