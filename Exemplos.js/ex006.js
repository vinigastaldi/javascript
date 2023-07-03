let amigo = {nome:'Gu', idade:11, sexo:'M', 
envelhecer(i=0) {
    console.log('Envelheceu!')
    this.idade += i
}}
amigo.envelhecer()
console.log(`O ${amigo.nome} tem ${amigo.idade} anos`)

