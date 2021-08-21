async function level7(){
    var level = '4407'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        window.location.href = '/FqaAS'
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
                        <h1 class='bdTitle'>P4r4béns M0zão ❤</h1>
                        <h2></h2>
                    </div>
                    <div class='levels'>
                        <h3 class='bdSubtitle'>Nivel 7</h3>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level7} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}