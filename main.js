const oraHtml = document.querySelector('#ora')
const minutiHtml = document.querySelector('#minuti')
const secondiHtml = document.querySelector('#secondi')

// prende l'anno corrente
const anno = new Date().getFullYear()
const tempo = new Date(`January 19 ${anno + 1} 09:30:00`)

// l'ora attuale countdownTime
function countdownTime() {
    const oraAttuale = new Date()
    const diff = tempo - oraAttuale

    // calcoli per le ore, minuti e secondi
    const oras = Math.floor(diff / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diff / 1000 / 60) % 60
    const secondes = Math.floor(diff / 1000) % 60

    oraHtml.innerHTML = oras < 10 ? '0' + oras : oras
    minutiHtml.innerHTML = minutes < 10 ? '0' + minutes : minutes
    secondiHtml.innerHTML = secondes < 10 ? '0' + secondes : secondes
}

// 1 secondo di intervallo per il tempo
setInterval(countdownTime, 1000)

/////////////////////////////////////////////////////

/*
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
    clearInterval(cronometro)
})
*/

/////////////////////////////////////////////////////
