async function level17(){
    var level = '2907'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        window.location.href = '/'
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
                        <h3 class='bdSubtitle'>Nivel 17</h3>
                        <p>Boa amor conseguis-te chegar ao final!</p>
                        <p>. -- / --.- ..- . / -.. .. .- / .- / .-.. . --- .- / -. .- ... -.-. . ..-</p>
                        <p>Resolve este nivel apenas quando estiveres comigo!</p>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level17} class='keyCheck'>Voltar ao inicio</button>
                    </div>
                </div>
            </div>
        </div>
    )
}