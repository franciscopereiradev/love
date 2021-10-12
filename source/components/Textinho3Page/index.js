async function changeToMainReward(){
    var mainBD = document.querySelector('div#mainBirthday')
    var mainHome = document.querySelector('div#mainHome')
    var mainReward = document.querySelector('div#mainReward')
    var mainTextinho = document.querySelector('div#textinho3Page')
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

function Textinho3Page(){
    return(
        <div id='textinho3Page' class='textinhoPage'>
                <div class='textinhoMain'>
                    <p class='textinho3'>Sei que não sou bom escritor,</p>
                    <p class='textinho3'>Mas quando escrevo, escrevo com amor</p>
                    <p class='textinho3'>Sei que não sou perfeito</p>
                    <p class='textinho3'>Mas por ti de tudo tenho feito</p>
                    <p class='textinho3'></p>
                    <p class='textinho3'>Tu és o meu amor</p>
                    <p class='textinho3'>Aquela que acalma a minha dor</p>
                    <p class='textinho3'>Tu és a minha guia</p>
                    <p class='textinho3'>Aquela com quem quero começar uma familia</p>
                    <button class='textinhoBtn' onClick={changeToMainReward}>
                        Fechar
                    </button>
                </div>
        </div>
    )
}

export default Textinho3Page