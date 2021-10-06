async function changeToMainReward(){
    var mainBD = document.querySelector('div#mainBirthday')
    var mainHome = document.querySelector('div#mainHome')
    var mainReward = document.querySelector('div#mainReward')
    var mainTextinho = document.querySelector('div#textinho2Page')
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

function Textinho2Page(){
    return(
        <div id='textinho2Page' class='textinhoPage'>
                <div class='textinhoMain'>
                    <p class='textinho2'>Olá momo,</p>
                    <p class='textinho2'>Felizes 7 mesenhos, oh meu deus como é que já passaram 7 meses?</p>
                    <p class='textinho2'>Passou tão rapido, parece que foi ontem que te conheci e que foi ontem que falaste comigo pela primeira vez!!!
Eu quero te pedir desculpa desde já por ontem não me ter lembrado (hoje de madrugada), estava cansado desculpa amor, asr não foi por mal!</p>
                    <p class='textinho2'>Ainda agora, antes de escrever este textinho para o amor da minha vida e para a mulher mais INCRIVEL e ESPETACULAR que conheço e que tenho o prazer de chamar de namorada e que espero que no futuro possa ter o prazer de chamar minha mulher(hihihi), estava a ver as nossas fotos e os videozinhos que gravaste para mim e estava a pensar na sorte que eu tive ao te encontrar e a sorte que eu tenho por te ter ao meu lado todos os dias incondicionalmente e independentemente do que aconteça. E eu só te tenho a agradecer por isso, tu és tão incrivel comigo tratas-me como um princeso (hihihi eu sei que tu gostas de me chamar princeso), estás sempre lá para mim e estás sempre preocupada comigo e ficas logo triste se eu não estiver bem, eu nunca tive alguem que se preocupasse ou importasse tanto comigo quanto tu te importas e muito obrigado por isso, tu és de longe e sem sombra de duvidas a MELHOR namodara que alguem poderia ter e muito obrigado mas muito obrigado mesmo por me teres escolhido a mim para teu namorado!</p>
                    <p class='textinho2'>Tu és o amor da minha vida e é contigo que eu me sinto bem e feliz, MUITO FELIZZZ e assim que fico longe de ti por algum motivo fico logo triste e com vontade de voltar para os teus braços, já não sei viver sem ti e espero que nunca mais o tenha de fazer.
E quero que saibas, obviamente, que te amo muito, nunca amei ninguem como te amo a ti e que não te quero deixar, NUNCA, estás pressa a mim para SEMPRE (hihihi), eu sei que não sou perfeito e que tenho de melhorar a alguns aspectos como os ciumes e a confiança em mim mesmo. E eu tenho tentado melhorar essas coisas e vou continuar a tentar melhorar a cada dia que passa para me tornar o melhor namorado de sempre e para sempre hihihi!</p>
                    <button class='textinhoBtn' onClick={changeToMainReward}>
                        Fechar
                    </button>
                </div>
        </div>
    )
}

export default Textinho2Page