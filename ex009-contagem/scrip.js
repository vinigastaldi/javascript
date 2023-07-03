function contar() {
    var inc = document.getElementById('N_inicio')
    var fim = document.getElementById('N_fim')
    var pular = document.getElementById('pulo')
    var res = document.getElementById('res')
    if (inc.value.length == 0 || fim.value.length == 0 || pular.value.length == 0) {
        res.innerHTML = 'Impossivel contar. Faltam dados!'
            
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inc.value)
        var f = Number(fim.value)
        var p = Number(pular.value)
        if (p <= 0) {
            res.innerHTML = 'O passo não pode ser menor que (1)'
        } else if (i < f) {
            for (var c = i; c <= f; c += p){
            res.innerHTML += `${c} / `
            }
        } else {
            for (var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} / `
            }
            
        }
    }
}