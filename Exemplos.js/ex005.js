function fatorial(n){
    let fat = 1
    for (let f = n; f > 1; f--){
        fat *= f
    }
    return fat
}
console.log(fatorial(5))