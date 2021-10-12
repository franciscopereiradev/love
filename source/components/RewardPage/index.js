import TextinhoPage from "../TextinhoPage"
import Textinho2Page from '../Textinho2Page'
import Textinho3Page from '../Textinho3Page'

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

async function changeToMaintextinho3(){
    var mainBD = document.querySelector('div#mainBirthday')
    var mainHome = document.querySelector('div#mainHome')
    var mainTextinho3 = document.querySelector('div#textinho3Page')
    var buttonHome = document.querySelector('button#homeBt')
    var buttonBD = document.querySelector('button#birthdayBt')
    var buttonReward = document.querySelector('button#rewardBt')
  
    buttonHome.setAttribute('class', 'pageNotCorrent')
    buttonBD.setAttribute('class', 'pageNotCorrent')
    buttonReward.setAttribute('class', 'pageNotCorrent')
    mainBD.setAttribute('class', 'mainBirthday')
    mainHome.setAttribute('class', 'mainHome')
    mainTextinho3.setAttribute('class', 'textinhoPageOn')
}


function RewardPage(){
    return(
        <div class='container'>
            <div class='circle1'></div>
            <div class='circle2'></div>
            <div class='glassBD'>
                <h1>Presentes</h1>
                <div class='rewardsBox'>
                    {/* <div class='textBox'> */}
                        <a class='videoBtn' onClick={changeToMaintextinho2}>7 meses</a>
                        <a class='videoBtn' onClick={changeToMaintextinho}>Aniversário</a>
                        <a class='videoBtn' onClick={changeToMaintextinho3}>Poema</a>
                    {/* </div> */}
                    <a class='videoBtn' href='https://youtu.be/Vd35zKHoLMI' target='_black'>Vídeo</a>
                </div>
                <TextinhoPage/> 
                <Textinho2Page/>
                <Textinho3Page/>
            </div>
        </div>
    )
}

export default RewardPage