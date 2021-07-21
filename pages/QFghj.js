async function level5(){
    var level = 'love has been found'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        window.location.href = '/GPQds'
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
                        <h3 class='bdSubtitle'>Nivel 5</h3>
                        <p>Parece que encontramos um erro: Error 603 - ...</p>
                        <p>Dica: procura o erro e acaba a frase</p>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level5} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}