async function changeToMainReward(){
    var mainBD = document.querySelector('div#mainBirthday')
    var mainHome = document.querySelector('div#mainHome')
    var mainReward = document.querySelector('div#mainReward')
    var mainTextinho = document.querySelector('div#textinhoPage')
    var mainAdd = document.querySelector('div#mainAdd')
    var mainAdded = document.querySelector('div#mainAdded')
    var buttonHome = document.querySelector('button#homeBt')
    var buttonBD = document.querySelector('button#birthdayBt')
    var buttonReward = document.querySelector('button#rewardBt')
  
  
    buttonHome.setAttribute('class', 'pageNotCorrent')
    buttonBD.setAttribute('class', 'pageNotCorrent')
    buttonReward.setAttribute('class', 'pageCorrent')
    mainBD.setAttribute('class', 'mainBirthday')
    mainHome.setAttribute('class', 'mainHome')
    mainReward.setAttribute('class', 'mainCorrent')
    mainTextinho.setAttribute('class', 'mainTextinho')
    mainAdd.setAttribute('class', 'mainAdd')
    mainAdded.setAttribute('class', 'mainAdded')
  }

function TextinhoPage(){
    return(
        <div id='textinhoPage' class='textinhoPage'>
            <div class='glassTextinho'>
                <div class='header'>
                    <h1 class='bdTitle'>Parabéns Mozão ❤</h1>
            </div>
                <div class='textinhoMain'>
                    <p class='textinho'>Oii amor, vida, bebé, princesa, QUEEN, meu TUDO e PARABÉNSSSS já são 17 aninhos e como tu me disseste espero que os próximos sejam comigo hihihi.</p>
                        <p class='textinho'>Quero que saibas que eu te amo MUITO mas mesmo MUITOOOO, nunca amei ninguém como te amo a ti, tu és o meu mundo, o meu universo, sei que não sou facil de aturar porque sou muito ciumento mas eu tenho tentado melhorar isso e não só isso tenho tentado melhorar tudo o que eu posso pela nossa relação porque eu amo-te mesmo muito e nossa relação é mais importante para mim do qualquer mania ou feitio que eu tenha!</p>
                    <p class='textinho'> Quero que sabias que me fazes o rapaz mais feliz do UNIVERSO, só o simples facto de estares comigo já me faz muito feliz e melhora o meu dia a INFINITOS porcento, tu és incrível, maravilhosa, perfeita, espantosa e tudo de bom. És mesmo o amor da minha VIDAAA. Também quero que saibas que estou sempre aqui para ti e sempre estarei aqui para ti, tu és a minha esposa hihihi, estou aqui para ti na saúde e na doença. </p>
                    <p class='textinho'>Tu chegaste do nada e tornaste-te o meu tudo e és muito especial para mim, nunca me deixes e nunca me trocas! Eu amo-te com amor o teu momo ❤</p>
                </div>
                <button class='textinhoBtn' onClick={changeToMainReward}>
                    Fechar
                </button>
            </div>
        </div>
    )
}

export default TextinhoPage