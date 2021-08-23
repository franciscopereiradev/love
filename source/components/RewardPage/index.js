import TextinhoPage from "../TextinhoPage"

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

function RewardPage(){
    return(
        <div class='circle1'></div>,
        <div class='circle2'></div>,
        <div class='glassBD'>
            <h1>Presentes</h1>
            <div class='rewardsBox'>
                <a class='keyCheck' onClick={changeToMaintextinho}>Textinho</a>
                <a class='keyCheck' href='https://youtu.be/Vd35zKHoLMI' target='_black'>Vídeo</a>
            </div>
            <TextinhoPage/>   
        </div>
    )
}

export default RewardPage