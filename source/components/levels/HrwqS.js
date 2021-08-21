async function level12(){
    var level = '781456'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        alert('Recebeste um presente: \n -Mais Kinders hihihi!')
        window.location.href = '/HrtyD'
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
                        <h3 class='bdSubtitle'>Nivel 12</h3>
                        <p class='blank'>--... ---.. .---- </p>
                        <p>Talvez não o vejas mas ele está aqui!</p>
                        <p class='blank'>....- ..... -....</p>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level12} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}