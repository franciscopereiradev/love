async function level15(){
    var level = 'carolina'
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
                        <p>Tu és a razão do meu viver, tu és o meu tudo, qual é o nome do amor da minha vida?</p>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level15} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}