// import img from '../public/level3.jpg'

async function level3(){
    var level = '6714'
    var input = document.querySelector('input.inputKey')

    if(level == input.value){
        alert('Recebeste um presente: \n -Um textinho!')
        window.location.href = '/QrCQ'
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
                        <h3 class='bdSubtitle'>Nivel 3</h3>
                        <a href='https://imgur.com/kJjiYLh.jpg' target='_blank'><p>Clica aqui!</p></a>
                        <p class='inputText'>Coloca aqui a senha</p>
                        <input class='inputKey'></input>
                        <button onClick={level3} class='keyCheck'>Verificar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}