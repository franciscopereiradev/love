import TextinhoPage from "../TextinhoPage"
import Textinho2Page from '../Textinho2Page'

async function changeToMaintextinho(){
    var mainBD = document.querySelector('div#mainBirthday')
    var mainHome = document.querySelector('div#mainHome')
    var mainTextinho = document.querySelector('div#textinhoPage')
    var buttonHome = document.querySelector('button#homeBt')
    var buttonBD = document.querySelector('button#birthdayBt')
    var buttonReward = document.querySelector('button#rewardBt')
  
    buttonHome.setAttribute('class', 'pageNotCorrent')
    buttonBD.setAttribute('class', 'pageNotCorrent')
    buttonReward.setAttribute('class', 'pageNotCorrent')
    mainBD.setAttribute('class', 'mainBirthday')
    mainHome.setAttribute('class', 'mainHome')
    mainTextinho.setAttribute('class', 'textinhoPageOn')
}

async function changeToMaintextinho2(){
    var mainBD = document.querySelector('div#mainBirthday')
    var mainHome = document.querySelector('div#mainHome')
    var mainTextinho2 = document.querySelector('div#textinho2Page')
    var buttonHome = document.querySelector('button#homeBt')
    var buttonBD = document.querySelector('button#birthdayBt')
    var buttonReward = document.querySelector('button#rewardBt')
  
    buttonHome.setAttribute('class', 'pageNotCorrent')
    buttonBD.setAttribute('class', 'pageNotCorrent')
    buttonReward.setAttribute('class', 'pageNotCorrent')
    mainBD.setAttribute('class', 'mainBirthday')
    mainHome.setAttribute('class', 'mainHome')
    mainTextinho2.setAttribute('class', 'textinhoPageOn')
}


function RewardPage(){
    return(
        <div class='container'>
            <div class='circle1'></div>
            <div class='circle2'></div>
            <div class='glassBD'>
                <h1>Presentes</h1>
                <div class='rewardsBox'>
                    <div class='textBox'>
                        <a class='textBtn' onClick={changeToMaintextinho2}>Textinho de 7 meses</a>
                        <a class='textBtn' onClick={changeToMaintextinho}>Textinho de Aniversário</a>
                    </div>
                    <a class='videoBtn' href='https://youtu.be/Vd35zKHoLMI' target='_black'>Vídeo</a>
                </div>
                <TextinhoPage/> 
                <Textinho2Page/>
            </div>
        </div>
    )
}

export default RewardPage