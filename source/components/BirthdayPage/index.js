function start(){
    // return(window.location.href = '/level1')
    alert('Temporariamente Indisponível')
  }

function BirthdayPage() {
    return(
        <div class='container'>
            <div class='circle1'></div>
            <div class='circle2'></div>
            <div class='glassBD'>
                <div class='header'>
                    <h1 class='bdTitle'>Parabéns Mozão ❤</h1>
                </div>
                <div class='rules'>
                    <h3 class='bdSubtitle'>Regras</h3>
                    <p>1- Codigos em formato de datas devem ser apresentados da seguinte forma (dd/mm) Ex: 1 de janeiro - 0101!</p>
                    <p>2- Codigos em formato de frases devem ser apresentados em letra minuscula e com espaços entre palavras!</p>
                    <p>3- Codigos em formato de numeros têm 4 ou 6 digitos!</p>
                    <p>4- Não faças batona mesmo que estejas com dificuldade em algum nivel, pede antes ajuda, ao melhor namorado do mundo hihihi!</p>
                    <p>5- Diverte-te!!! :)</p>
                    <button onClick={start} class='keyCheck'>Começar</button>
                </div>
            </div>      
        </div>
    )
}

export default BirthdayPage