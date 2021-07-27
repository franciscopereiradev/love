async function level4(){
    var level = '8431'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        window.location.href = '/QFghj'
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
                        <h1 class='bdTitle'>Parabéns Mozão ❤8</h1>
                        <h2></h2>
                    </div>
                    <div class='levels'>
                        <h3 class='bdSubtitle'>Nivel 4</h3>
                        <p class='inputText'>Coloca aqui a senha 31</p>
                        <input class='inputKey'></input>
                        <button onClick={level4} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}