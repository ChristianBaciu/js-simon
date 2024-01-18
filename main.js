let playHtml = document.getElementById("play")
let stopHtml = document.getElementById("stop")
let resetHtml = document.getElementById("reset")
let tempoHtml = document.getElementById("tempo")

let cronometro;
let secondi = 0

playHtml.addEventListener("click", function(){

    cronometro = setInterval(function() {
        secondi++
        tempoHtml.innerHTML = secondi
    }, 1000);
})

stopHtml.addEventListener("click", function(){

    clearInterval(cronometro)
})

resetHtml.addEventListener("click", function(){

    secondi = 0
    tempoHtml.innerHTML = secondi
})
