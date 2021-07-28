async function level15(){
    var level = '456379'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        window.location.href = '/Lgfds'
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
                        <h3 class='bdSubtitle'>Nivel 15</h3>
                        <p>A mãe da leoa o codigo terá!</p>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level15} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}