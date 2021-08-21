async function level11(){
    var level = '1769'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        window.location.href = '/HrwqS'
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
                        <h3 class='bdSubtitle'>Nivel 11</h3>
                        <a href='https://i.imgur.com/4CUuVpl.jpg' target='_blank'><p>Clica aqui!</p></a>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level11} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}