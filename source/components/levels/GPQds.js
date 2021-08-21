async function level6(){
    var level = '1578'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        alert('Recebeste um presente: \n -Kinders!')
        window.location.href = '/Qhgtd'
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
                        <h3 class='bdSubtitle'>Nivel 6</h3>
                        <a href='https://i.imgur.com/pFVMmnr.jpg' target='_blank'><p>Clica aqui!</p></a>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level6} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}