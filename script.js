$(document).ready(function () {
    $(".card-dado").toggle()
    $("#abre").on('click', function(){
        $(".card-dado").toggle()
    })
});


const rolarD4 = () => rolarDado(4)
const rolarD6 = () => rolarDado(6)
const rolarD8 = () => rolarDado(8)
const rolarD10 = () => rolarDado(10)
const rolarD12 = () => rolarDado(12)
const rolarD20 = () => rolarDado(20)
const rolarD100 = () => rolarDado(100)

function rolarDado(dado) {
    return console.log(Math.ceil(Math.random() * dado))
}

function showDice() {
    
}


// https://dev.to/wasthishelpful/how-to-roll-a-dice-in-javascript-51j0