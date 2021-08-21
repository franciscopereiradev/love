async function level2(){
    var level2 = '0603'
    var input = document.querySelector('input.inputKey')

    if(level2 == input.value){
        window.location.href = '/FSQP'
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
                        <h2>AMO-TE MAIS DO QUE TUDO E TODOS!</h2>
                    </div>
                    <div class='levels'>
                        <h3 class='bdSubtitle'>Nivel 2</h3>
                        <p>Em que dia começamos a namorar?</p>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level2} class='keyCheck'>Verificar</button>
                    </div>
                    {/* <div class='inputKeyBG'>
                        
                    </div> */}
                </div>
            </div>
        </div>
    )
}