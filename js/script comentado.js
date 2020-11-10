//Dados, trilha e modo noturno abaixo
function rolagem(numDado) {
    //ao ativar, torna o número dentro do dado visível, e o modifica gerando um numero aleatorio (dependendo do dado).
    $(`#valorD${numDado}`).css('display','block')
    $(`#valorD${numDado}`).text(Math.floor(Math.random() * numDado + 1))
    $(`#dadoD${numDado}`).css('cursor','pointer')
}

function limpaDado(numDado) {
    //esconde o numero dentro do dado.
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
    //dependendo do valor do parametro (que deve ser igual a uma das variáveis TRILHA), é selecionado aleatoriamente um dos links dentro da variavel da trilha correspondente, que após isso será copiada para a area de transferência (clipboard).
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
    // quando ativada esta funcao, ela modifica o texto interno do botao através de uma classe, no CSS.
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
    //modifica a cor de alguns elementos para o modo claro.
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
    //modifica a cor de alguns elementos para o modo escuro. se ativada, adiciona um valor ao local storage.
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
    //se o valor "modo noturno" no local storage for igual a "sim", o modo claro é ativado, e o valor na localStorage modificado. caso contrário, é ativado o modo escuro, e o valor no localStorage modificado também.
    if(localStorage.modoNoturno == "sim") {
        modoClaro()
        localStorage.setItem("modoNoturno", "nao")
    } else if(localStorage.modoNoturno == "nao") {
        modoEscuro()
    }
}

$(document).ready( function() {
    //identifica qual foi o último modo (claro ou escuro) que o usuário escolheu, e aplica durante o carregamento da página.
    if(localStorage.modoNoturno == "nao") {
        modoClaro()
    } else {
        modoEscuro()
    }
})
//Dados, trilha e modo noturno acima

//Cartas abaixo
var arrayCartas = [1,2,3,4,5,6,7,8]
//mostra quais cartas ainda podem ser exibidas.

function salvaInput(idInput) {
    localStorage.setItem(`${idInput.id}`, idInput.value)
}
//todos os inputs no index, quando ativam essa função, criam um valor no Local Storage com o id do input, e o valor digitado nele.

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
        //a repeticao começa com valor 1, que representa a primeira carta, e vai até o valor 8, que representa a última carta
        for(let i = 0; i < objetoCarta.length; i++) {
            //para cada teste feito pelo switch, o input da carta de valor numCarta recebe o valor referente à ele que está guardado no local storage
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
    //ao final, é repetido todo o processo, mas dessa vez para a próxima carta, e assim por diante até a carta 8
}

function adicionaCarta() {
    //esta funcao copia o modelo da carta de numero igual ao primeiro valor do arrayCartas, insere na flex-box após o último elemento, e muda a propriedade desta carta para que se torne visível.
    let primeiraCarta = arrayCartas[0]
    $(`#carta-jogador${primeiraCarta}`).clone().insertAfter($("#flexbox-cartas").children().last()).addClass("cartaVisivel")
    $(".cartaVisivel").css('display','flex')
    //como esta carta está agora visível, é retirado o valor desta carta de arrayCartas, pois esta carta não pode ser exibida novamente.
    arrayCartas.shift()
    //agora esta carta é o último elemento da flex-box. mas o correto é que o botão de adicionar que seja o último elemento, então é chamada a funcao botaoMais(), que remove o botao e o reinsere após o último elemento da flex-box, que é a carta que adicionamos.
    botaoMais()
}

function botaoMais() {
    $(".botaoVisivel").remove()
    $("#botaoMais").clone().insertAfter($("#flexbox-cartas").children().last()).addClass("botaoVisivel")
    $(".botaoVisivel").css('display','block')
}

function salvaEdita(numCarta) {
    //testa se o botao está no modo "salvar" ou "editar", mudando o texto do botao e suas propriedades css de acordo com o resultado. além disso, o resultado é salvo no localStorage.
    //se uma carta é salva, é criado um valor no localStorage sinalizando isso.
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
    //é testada, para cada carta, se essas cartas possuem um valor no localStorage sinalizando que elas devem ser mostradas, e se o botão deve aparecer como "salvar" ou "editar".
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
        
        //se a carta 1, por exemplo possuir um valor mostrarCarta1 no localStorage igual a sim, é removido o elemento 1 da arrayCartas, e é inserida a carta 1 após o último elemento da flex-box.
        if(storageIntoFunction2 == "sim") {
            arrayCartas.splice(indexIntoFunction, 1)
            $(`#carta-jogador${numCarta}`).clone().insertAfter($("#flexbox-cartas").children().last()).addClass("cartaVisivel")
            $(".cartaVisivel").css('display','flex')
            botaoMais()
        }
    }
})

function apagaTudo() {
    //primeiro é confirmado com o usuário se este deseja mesmo excluir todas as cartas. caso positivo, é feita a diferenca entre arrayCartasVisiveis e arrayCartas, onde o resultado são todas as cartas que estão visíveis. Estas cartas, então, são excluidas, e o botão "salvar" é resetado.
    let arrayTodasAsCartas = [1,2,3,4,5,6,7,8]
    let resposta = confirm("Tem certeza que deseja excluir TODAS as cartas?")

    if(resposta == true) {
        let interseccao = arrayTodasAsCartas.filter(x => !arrayCartas.includes(x))
        for (let i = 0; i < interseccao.length; i++) {
            let elementoInterseccao = interseccao[i]
            switch(elementoInterseccao) {
                case 1: excluiCartaLixeira(1); salvaEdita(1)
                    break
                case 2: excluiCartaLixeira(2); salvaEdita(2)
                    break
                case 3: excluiCartaLixeira(3); salvaEdita(3)
                    break
                case 4: excluiCartaLixeira(4); salvaEdita(4)
                    break
                case 5: excluiCartaLixeira(5); salvaEdita(5)
                    break
                case 6: excluiCartaLixeira(6); salvaEdita(6)
                    break
                case 7: excluiCartaLixeira(7); salvaEdita(7)
                    break
                case 8: excluiCartaLixeira(8); salvaEdita(8)
                    break
            }
        }
    }
}

function excluiCarta(numCarta) {
    //primeiro pede para o usuário confirmar se deseja mesmo excluir a carta. caso positivo, a carta é removida e juntamente com todos os valores dos inputs dessa carta, que estão salvos na localStorage. o arrayCartas recebe o número referente a esta carta, pois agora ela pode ser exibida novamente.
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
    //primeiro limpa todos os inputs da carta, e depois remove todos os valores do localStorage referentes à cada input.
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
