async function level9(){
    var level = 'eu amo te'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        window.location.href = '/PGddkk'
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
                        <h3 class='bdSubtitle'>Nivel 9</h3>
                        <p>. ..- / .- -- --- / - .</p>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level9} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}