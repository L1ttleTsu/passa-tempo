function mudarTemaHeader() {
    let bg = document.querySelector("header")
    let strong = document.querySelectorAll("strong")
    let headerFooter = document.querySelector("div#container2")
    if (bg.style.backgroundImage === 'url("imagens/background.jpg")') {
        bg.style.backgroundImage = 'url("imagens/background-orange.jpg")'
        for(let i = 0; i <= strong.length; i++) {
            strong[i].style.color = '#ABAFFF'
        } 
        headerFooter.style.backgroundColor = 'rgba(255, 230, 128, 0.02)'
    }
    else {
        bg.style.backgroundImage = 'url("imagens/background.jpg")'
        for (let i = 0; i <= strong.length; i++) {
            strong[i].style.color = '#FFE367'
        } 
        headerFooter.style.backgroundColor = 'rgba(92, 95, 145, 0.5)'
    }
    
}