function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background= ' #e3b240cb'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background= ' #ff9d00bb'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background= ' #44403afa'
    }
}