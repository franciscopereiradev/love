async function start(){
    return(window.location.href = '/level1')
}

export default function Birthday(){


    return(
        <div class='pageLanding'>
            <div class='main'>
                <div class='circle1'></div>
                <div class='circle2'></div>
                <div class='glassBD'>
                    <div class='header'>
                        <h1 class='bdTitle'>Parabéns Mozão ❤</h1>
                        <p class='textinho'>Olá amor, quero que saibas que és o amor da minha vida e que é contigo que eu quero passar o resto da minha vida! Amo cada momento, cada minuto, cada segundo que passo contigo.<br></br>
                            Desde já MUITOS PARABÉNS MOMO, já são 17, agora temos outra vez a mesma idade hihihi! <br></br> Nunca pensei em alguma vez amar alguem como te amo a ti, és a pessoa mais importante na minha vida e quero te comigo
                            para SEMPRE! Espero que tenhas um dia incrivel perto de quem mais gostas e de quem mais amas, beijão momo!! <br></br>
                            Estou e sempre estarei aqui para ti meu amor! ❤❤❤<br></br>
                            Agora vamos ao jogoooo!! :D

                        </p>
                    </div>
                    <div class='rules'>
                        <h3 class='bdSubtitle'>Regras</h3>
                        <p>1- Codigos em formato de datas devem ser apresentados da seguinte forma (dd/mm) Ex: 1 de janeiro - 0101!</p>
                        <p>2- Codigos em formato de frases devem ser apresentados em letra minuscula e com espaços entre palavras!</p>
                        <p>3- Codigos em formato de numeros têm 4 ou 6 digitos!</p>
                        <p>4- Não faças batona mesmo que estejas com dificuldade em algum nivel, pede antes ajuda, os amigos deixam os jogos mais divertidos!</p>
                        <p>5- Diverte-te!!! :)</p>
                        <button onClick={start} class='keyCheck'>Começar</button>
                    </div>
                    <footer>
                        <a class='homeHL' href='./'>
                            <p>Home</p>
                        </a>
                        <a class='birthdayHL' class='pageCorrent' href='./birthday'>
                            <p>❤</p>
                        </a>
                    </footer>
                    <div class='countdown' >
                        <p id='demo'></p>
                        <p>When everything started!</p>
                     </div>
                </div>
            </div>
        </div>
    )
}