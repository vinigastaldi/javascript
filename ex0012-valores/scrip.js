let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n))!= -1){
        return true
    } else {
        return false
    }
}
function add(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
    alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function analisar(){
    if (valores.length == 0){
        alert('Adicione números para poder analisar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){            
            soma += valores[pos]           
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Números adicionados: <strong>${tot}</strong></p>`
        res.innerHTML += `<p>Maior número: <strong>${maior}</strong></p>`
        res.innerHTML += `<p>Menor número: <strong>${menor}</strong></p>`
        res.innerHTML += `<p>Soma dos números: <strong>${soma}</strong></p>`
        res.innerHTML += `<p>Media dos valores: <strong>${media.toFixed(1)}</strong></p>`
        
    }    
}

function limpa(){
    lista.innerHTML = ''
    res.innerHTML = ''
    valores = []
}