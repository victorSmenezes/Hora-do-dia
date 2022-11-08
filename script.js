function carregar(){
    var msg = document.getElementById('msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora São ${hora} horas e ${min} minutos.`

    if(hora >= 0 && hora < 12){ //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#829369'
    }else if (hora >= 12 && hora <= 18){ //BOA TARDE 
        img.src = 'tarde.png'
        document.body.style.background = "#ffae4b"
    }else { //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#383048'
    }

    if(min == 0){
        msg.innerHTML = `Agora São ${hora} horas.`
    }
}