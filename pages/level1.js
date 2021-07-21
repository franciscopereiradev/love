async function level1(){
    var level1 = '2601'
    var input = document.querySelector('input.inputKey')

    if(level1 == input.value){
        window.location.href = '/BqAdQ'
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
                        <h2>AMO-TE MAIS DO QUE TUDO E TODOS!</h2>
                    </div>
                    <div class='levels'>
                        <h3 class='bdSubtitle'>Nivel 1</h3>
                        <p>Em que dia nos conhecemos?</p>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level1} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}