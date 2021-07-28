async function level10(){
    var level = 'dez'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        window.location.href = '/Gqae'
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
                        <h3 class='bdSubtitle'>Nivel 10</h3>
                        <a class='keyCheck' href='https://youtu.be/Vd35zKHoLMI' target='_black'>Presente 🎁</a>
                        <p>Dica: em que nivel estamos?</p> 
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level10} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}