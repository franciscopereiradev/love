async function level14(){
    var level = '1210'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        window.location.href = '/Ikghff'
    } else {
        alert('Passe errada!')
    }
}

export default function Birthday(){


    return(
        <div class='pageLanding'>
            <div class='mainCorrent'>
            <div class='circle1'></div>
            <div class='circle2'></div>
                <div class='glassBD'>
                    <div class='header'>
                        <h1 class='bdTitle'>Parabéns Mozão ❤</h1>
                        <h2></h2>
                    </div>
                    <div class='levels'>
                        <h3 class='bdSubtitle'>Nivel 14</h3>
                        <p>X^2 + X + 1000</p>
                        <p class='blank'>Dica: talvez o numero do nivel seja o X</p>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level14} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}