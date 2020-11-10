//Dados, trilha e modo noturno abaixo
function rolagem(numDado) {
    $(`#valorD${numDado}`).css('display','block')
    $(`#valorD${numDado}`).text(Math.floor(Math.random() * numDado + 1))
    $(`#dadoD${numDado}`).css('cursor','pointer')
}

function limpaDado(numDado) {
    if($(`#dadoD${numDado}`).css('cursor') == 'pointer') {
        $(`#valorD${numDado}`).css('display','none')
        $(`#dadoD${numDado}`).css('cursor','auto')
    }
}

var trilhaAmbiente = [
    "!play https://youtu.be/AKkl1z-yIts",
    "!play https://youtu.be/aK4JSwhdcdE",
    "!play https://youtu.be/xFjpTF4-PgI"
]

var trilhaTaverna = [
    "!play https://youtu.be/dd10InDdvJE",
    "!play https://youtu.be/3p8jLMz0lu8",
    "!play https://youtu.be/Yf1nWoxQQSY",
    "!play https://youtu.be/Oeo2VCCtUZQ"
]

var trilhaCidade = [
    "!play https://youtu.be/NeOg8iCFfTA",
    "!play https://youtu.be/Da9S9yjZZP4",
    "!play https://youtu.be/x2UulCWGess",
    "!play https://youtu.be/eCMO-LpKsU8",
    "!play https://youtu.be/ZiHtOVw8zsA"
]

var trilhaChuva = [
    "!play https://youtu.be/iEMiBRXygbQ",
    "!play https://youtu.be/Jde-TFha0ko"
]

var trilhaTempestade = [
    "!play https://youtu.be/Uj0DuD92TIk"
]

var trilhaDungeon = [
    "!play https://youtu.be/K1JvqHnSHfc",
    "!play https://youtu.be/kxqJuc1HHbg"
]

var trilhaBatalha = [
    "!play https://youtu.be/lAGm9MTyRJ8",
    "!play https://youtu.be/-7fbkELXxWg",
    "!play https://youtu.be/vDL6741wq7s",
    "!play https://youtu.be/V5Watai4qPM",
    "!play https://youtu.be/r2vRdOq_JUs"
]

function trilha(tipoTrilha) {
    var resultado = ''
    var numTrilhas = tipoTrilha.length
    var gerarNumero = Math.floor(Math.random() * numTrilhas + 1)
    resultado = tipoTrilha[gerarNumero - 1]

    var textarea = document.createElement('textarea')
    textarea.value = resultado
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
}

function copiado(numeroTrilha) {
    if(numeroTrilha == 1) {
        $(`#trilha-${numeroTrilha}`).addClass("copiado-trilha-1")
        setTimeout(function() {
        $(`#trilha-${numeroTrilha}`).removeClass("copiado-trilha-1")
        }, 2000)
    } else {
        $(`#trilha-${numeroTrilha}`).addClass("copiado")
        setTimeout(function() {
        $(`#trilha-${numeroTrilha}`).removeClass("copiado")
        }, 2000)
    }
}

function modoClaro() {
    localStorage.setItem("modoNoturno", "nao")
    document.documentElement.style.setProperty("--corPrincipal", "#e2e2e2")
    document.documentElement.style.setProperty("--corSecundaria", "#e9e9e9")
    $("h2").css("color","black")
    $("#titulo-logo").css('filter', 'invert(0%)')
    $("#descricao1").css('filter', 'invert(0%)')
    $("#descricao2").css('filter', 'invert(0%)')
    $("#imagem-logo").css('filter', 'invert(0%)')
    $("p#dicaTocha").text("Apague a luz!")
    $("#tocha").attr("src", "img/tochaApagada.png")
    $("body").addClass("bodyClaro")
    $("#info-trilha1").css('color','black')
    $("caption").css('color','black')
    $(".tabela-lateral").css('background','#b2bfd4')
    $(".tabela-lateral").find("tr").not(".primeiraLinha").css('color','black')
    $(".primeiraLinha").css('color','#b01919')
    $("#rodape a").css('color','black')
    $(".footer-icon").css('filter', 'invert(100%')
    $("#rodape p").css('color', 'black')
}

function modoEscuro() {
    localStorage.setItem("modoNoturno", "sim")
    document.documentElement.style.setProperty("--corPrincipal", "#111111")
    document.documentElement.style.setProperty("--corSecundaria", "#0a0a0a")
    $("h2").css("color","white")
    $("#titulo-logo").css('filter', 'invert(100%)')
    $("#descricao1").css('filter', 'invert(100%)')
    $("#descricao2").css('filter', 'invert(100%)')
    $("#imagem-logo").css('filter', 'invert(100%)')
    $("p#dicaTocha").text("Acenda a luz!")
    $("#tocha").attr("src", "img/tocha.gif")
    $("body").removeAttr("class")
    $("#info-trilha1").css('color','white')
    $("caption").css('color','white')
    $(".tabela-lateral").css('background','#2a2a38')
    $(".tabela-lateral").find("tr").not(".primeiraLinha").css('color','white')
    $(".primeiraLinha").css('color','#7e7edf')
    $("#rodape a").css('color','white')
    $(".footer-icon").css('filter', 'invert(0%')
    $("#rodape p").css('color', 'white')
}

function modoNoturno() {
    if(localStorage.modoNoturno == "sim") {
        modoClaro()
    } else {
        modoEscuro()
    }
}

$(document).ready( function() {
    if(localStorage.modoNoturno == "sim") {
        modoEscuro()
    } else {
        modoClaro()
    }
})
//Dados, trilha e modo noturno acima

//Cartas abaixo
var arrayCartas = [1,2,3,4,5,6,7,8]
function salvaInput(idInput) {
    localStorage.setItem(`${idInput.id}`, idInput.value)
}

function carregaDados() {
    let objetoCarta = [
        "nomeJogador",
        "nomePersonagem",
        "pontosXp",
        "ca",
        "iniciativa",
        "vida",
        "força",
        "destreza",
        "constituicao",
        "inteligencia",
        "sabedoria",
        "carisma"
    ]

    for(let numCarta = 1; numCarta < 9; numCarta++) {
        let storageIntoString = "localStorage"
        for(let i = 0; i < objetoCarta.length; i++) {
            let storageIntoFunction = eval(`${storageIntoString}.${objetoCarta[i]}${numCarta}`)
            
            switch(i) {
                case 0: $(`#nomeJogador${numCarta}`).val(storageIntoFunction)
                    break
                case 1: $(`#nomePersonagem${numCarta}`).val(storageIntoFunction)
                    break
                case 2: $(`#pontosXp${numCarta}`).val(storageIntoFunction)
                    break
                case 3: $(`#ca${numCarta}`).val(storageIntoFunction)
                    break
                case 4: $(`#iniciativa${numCarta}`).val(storageIntoFunction)
                    break
                case 5: $(`#vida${numCarta}`).val(storageIntoFunction)
                    break
                case 6: $(`#força${numCarta}`).val(storageIntoFunction)
                    break
                case 7: $(`#destreza${numCarta}`).val(storageIntoFunction)
                    break
                case 8: $(`#constituicao${numCarta}`).val(storageIntoFunction)
                    break
                case 9: $(`#inteligencia${numCarta}`).val(storageIntoFunction)
                    break
                case 10: $(`#sabedoria${numCarta}`).val(storageIntoFunction)
                    break
                case 11: $(`#carisma${numCarta}`).val(storageIntoFunction)
                    break
            }
        }

        if(eval(`${storageIntoString}.infoClasse${numCarta}`)) {
            $(`#infoClasse${numCarta}`).val(eval(`${storageIntoString}.infoClasse${numCarta}`))
        }

        if(eval(`${storageIntoString}.infoRaça${numCarta}`)) {
            $(`#infoRaça${numCarta}`).val(eval(`${storageIntoString}.infoRaça${numCarta}`))
        }

        if(eval(`${storageIntoString}.tendencia${numCarta}`)) {
            $(`#tendencia${numCarta}`).val(eval(`${storageIntoString}.tendencia${numCarta}`))
        }
    }
}

function adicionaCarta() {
    let primeiraCarta = arrayCartas[0]
    $(`#carta-jogador${primeiraCarta}`).clone().insertAfter($("#flexbox-cartas").children().last()).addClass("cartaVisivel")
    $(".cartaVisivel").css('display','flex')
    arrayCartas.shift()
    botaoMais()
}

function botaoMais() {
    $(".botaoVisivel").remove()
    $("#botaoMais").clone().insertAfter($("#flexbox-cartas").children().last()).addClass("botaoVisivel")
    $(".botaoVisivel").css('display','block')
}

function salvaEdita(numCarta) {
    if($(`#salvaCarta${numCarta}`).text() == "Salvar") {
        $(`#carta-jogador${numCarta}`).find("input, select").css('pointer-events','none')
        $(`#salvaCarta${numCarta}`).text("Editar")
        $(`#limpaCarta${numCarta}`).css('pointer-events','none')
        $(`#limpaCarta${numCarta}`).css('background','grey')
        localStorage.setItem(`testeBotaoSalvar${numCarta}`, "salvar")
        localStorage.setItem(`mostrarCarta${numCarta}`, "sim")
    } else if($(`#salvaCarta${numCarta}`).text() == "Editar") {
        $(`#carta-jogador${numCarta}`).find("input, select").css('pointer-events','auto')
        $(`#salvaCarta${numCarta}`).text("Salvar")
        $(`#limpaCarta${numCarta}`).css('pointer-events','auto')
        $(`#limpaCarta${numCarta}`).css('background','#c7c7c7')
        localStorage.setItem(`testeBotaoSalvar${numCarta}`, "editar")
    }
}

function resetSalvaEdita(numCarta) {
    $(`#carta-jogador${numCarta}`).find("input, select").css('pointer-events','auto')
    $(`#salvaCarta${numCarta}`).text("Salvar")
    $(`#limpaCarta${numCarta}`).css('pointer-events','auto')
    $(`#limpaCarta${numCarta}`).css('background','#c7c7c7')
    localStorage.setItem(`testeBotaoSalvar${numCarta}`, "editar")
}

$(document).ready( function() {
    for (let numCarta = 1; numCarta < 9; numCarta++) {  
        let storageIntoString = "localStorage"
        let storageIntoFunction1 = eval(`${storageIntoString}.testeBotaoSalvar${numCarta}`)

        if (storageIntoFunction1 == "salvar") {
            $(`#carta-jogador${numCarta}`).find("input, select").css('pointer-events','none')
            $(`#salvaCarta${numCarta}`).text("Editar")
            $(`#limpaCarta${numCarta}`).css('pointer-events','none')
            $(`#limpaCarta${numCarta}`).css('background','grey')
        } else if(storageIntoFunction1 == "editar") {
            $(`#carta-jogador${numCarta}`).find("input, select").css('pointer-events','auto')
            $(`#salvaCarta${numCarta}`).text("Salvar")
            $(`#limpaCarta${numCarta}`).css('pointer-events','auto')
            $(`#limpaCarta${numCarta}`).css('background','#c7c7c7')
        }

        let storageIntoFunction2 = eval(`${storageIntoString}.mostrarCarta${numCarta}`)
        let indexIntoString = "arrayCartas.indexOf("
        let indexIntoFunction = eval(`${indexIntoString}${numCarta})`)
        
        if(storageIntoFunction2 == "sim") {
            arrayCartas.splice(indexIntoFunction, 1)
            $(`#carta-jogador${numCarta}`).clone().insertAfter($("#flexbox-cartas").children().last()).addClass("cartaVisivel")
            $(".cartaVisivel").css('display','flex')
            botaoMais()
        }
    }
})

function excluiCartaLixeira(numCarta) {
    arrayCartas.push(numCarta)
    $(`#carta-jogador${numCarta}.cartaVisivel`).remove()
    localStorage.removeItem(`nomeJogador${numCarta}`)
    localStorage.removeItem(`nomePersonagem${numCarta}`)
    localStorage.removeItem(`infoClasse${numCarta}`)
    localStorage.removeItem(`infoRaça${numCarta}`)
    localStorage.removeItem(`tendencia${numCarta}`)
    localStorage.removeItem(`pontosXp${numCarta}`)
    localStorage.removeItem(`ca${numCarta}`)
    localStorage.removeItem(`iniciativa${numCarta}`)
    localStorage.removeItem(`vida${numCarta}`)
    localStorage.removeItem(`força${numCarta}`)
    localStorage.removeItem(`destreza${numCarta}`)
    localStorage.removeItem(`constituicao${numCarta}`)
    localStorage.removeItem(`inteligencia${numCarta}`)
    localStorage.removeItem(`sabedoria${numCarta}`)
    localStorage.removeItem(`carisma${numCarta}`)

    localStorage.removeItem(`mostrarCarta${numCarta}`)
    localStorage.setItem(`testeBotaoSalvar${numCarta}`, "editar")
}

function apagaTudo() {
    let arrayTodasAsCartas = [1,2,3,4,5,6,7,8]
    let resposta = confirm("Tem certeza que deseja excluir TODAS as cartas?")

    if(resposta == true) {
        let interseccao = arrayTodasAsCartas.filter(x => !arrayCartas.includes(x))
        for (let i = 0; i < interseccao.length; i++) {
            let elementoInterseccao = interseccao[i]
            switch(elementoInterseccao) {
                case 1: excluiCartaLixeira(1); resetSalvaEdita(1)
                    break
                case 2: excluiCartaLixeira(2); resetSalvaEdita(2)
                    break
                case 3: excluiCartaLixeira(3); resetSalvaEdita(3)
                    break
                case 4: excluiCartaLixeira(4); resetSalvaEdita(4)
                    break
                case 5: excluiCartaLixeira(5); resetSalvaEdita(5)
                    break
                case 6: excluiCartaLixeira(6); resetSalvaEdita(6)
                    break
                case 7: excluiCartaLixeira(7); resetSalvaEdita(7)
                    break
                case 8: excluiCartaLixeira(8); resetSalvaEdita(8)
                    break
            }
        }
    }
}

function excluiCarta(numCarta) {
    var resposta = confirm("Tem certeza que deseja excluir esta carta?")

    if (resposta == true) {
        arrayCartas.push(numCarta)
        $(`#carta-jogador${numCarta}.cartaVisivel`).remove()
        localStorage.removeItem(`nomeJogador${numCarta}`)
        localStorage.removeItem(`nomePersonagem${numCarta}`)
        localStorage.removeItem(`infoClasse${numCarta}`)
        localStorage.removeItem(`infoRaça${numCarta}`)
        localStorage.removeItem(`tendencia${numCarta}`)
        localStorage.removeItem(`pontosXp${numCarta}`)
        localStorage.removeItem(`ca${numCarta}`)
        localStorage.removeItem(`iniciativa${numCarta}`)
        localStorage.removeItem(`vida${numCarta}`)
        localStorage.removeItem(`força${numCarta}`)
        localStorage.removeItem(`destreza${numCarta}`)
        localStorage.removeItem(`constituicao${numCarta}`)
        localStorage.removeItem(`inteligencia${numCarta}`)
        localStorage.removeItem(`sabedoria${numCarta}`)
        localStorage.removeItem(`carisma${numCarta}`)

        localStorage.removeItem(`mostrarCarta${numCarta}`)
        localStorage.setItem(`testeBotaoSalvar${numCarta}`, "editar")
    }
}

function limpa(numCarta) {
    $(`#nomeJCarta${numCarta}`).trigger("reset")
    $(`#nomePCarta${numCarta}`).trigger("reset")
    $(`#infoPCarta${numCarta}`).trigger("reset")
    $(`#HabPCarta${numCarta}`).trigger("reset")

    localStorage.removeItem(`nomeJogador${numCarta}`)
    localStorage.removeItem(`nomePersonagem${numCarta}`)
    localStorage.removeItem(`infoClasse${numCarta}`)
    localStorage.removeItem(`infoRaça${numCarta}`)
    localStorage.removeItem(`tendencia${numCarta}`)
    localStorage.removeItem(`pontosXp${numCarta}`)
    localStorage.removeItem(`ca${numCarta}`)
    localStorage.removeItem(`iniciativa${numCarta}`)
    localStorage.removeItem(`vida${numCarta}`)
    localStorage.removeItem(`força${numCarta}`)
    localStorage.removeItem(`destreza${numCarta}`)
    localStorage.removeItem(`constituicao${numCarta}`)
    localStorage.removeItem(`inteligencia${numCarta}`)
    localStorage.removeItem(`sabedoria${numCarta}`)
    localStorage.removeItem(`carisma${numCarta}`)
}
//Cartas acima

//Lateral abaixo
function salvaAnotacao() {
    var caixaAnotacoes = $('textarea[name="anotacoes"]').val()
    localStorage.setItem("anotacoes", caixaAnotacoes)
}

if(localStorage.anotacoes) {
    $('textarea[name="anotacoes"]').val(localStorage.anotacoes)
}

function limparAnotacao() {
    $('textarea[name="anotacoes"]').val("")
    localStorage.removeItem("anotacoes")
}

function geraClima() {
    let climas = [
        "Sol escaldante",
        "Tempo claro",
        "Sol forte com clima seco",
        "Nublado",
        "Nublado com nuvens carregadas",
        "Chuva",
        "Chuva leve",
        "Tempestade/Nevasca"
    ]

    let geraNumero = Math.floor(Math.random() * climas.length)
    $("#geraClima").text(climas[geraNumero])
    $("#geraClima").removeAttr("class")

    switch(geraNumero) {
        case 0: $("#geraClima").addClass("climaSolEscaldante")
            break
        case 1: $("#geraClima").addClass("climaTempoClaro")
            break
        case 2: $("#geraClima").addClass("climaSolForte")
            break
        case 3: $("#geraClima").addClass("climaNublado")
            break
        case 4: $("#geraClima").addClass("climaNubladoCarregadas")
            break
        case 5: $("#geraClima").addClass("climaChuva")
            break
        case 6: $("#geraClima").addClass("climaChuvaLeve")
            break
        case 7: $("#geraClima").addClass("climaTempestade")
            break
    }
}
//Lateral acima