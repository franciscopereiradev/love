async function level13(){
    var level = '144220'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        window.location.href = '/Igfflk'
    } else {
        alert('Passe errada!')
    }
}

export default function Birthday(){


    return(
        <div class='pageLanding'>
            <div class='main'>
            <div class='circle1'></div>
            <div class='circle2'></div>
                <div class='glassBD'>
                    <div class='header'>
                        <h1 class='bdTitle'>Parabéns Mozão ❤</h1>
                        <h2></h2>
                    </div>
                    <div class='levels'>
                        <h3 class='bdSubtitle'>Nivel 13</h3>
                        <p>Quantos dias temos e quantos faltam para 1 ano de namoro?</p>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level13} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}