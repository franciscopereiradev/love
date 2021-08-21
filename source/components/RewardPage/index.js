async function changeToMaintextinho(){
    var mainBD = document.querySelector('div#mainBirthday')
    var mainHome = document.querySelector('div#mainHome')
    var mainReward = document.querySelector('div#mainReward')
    var mainTextinho = document.querySelector('div#mainTextinho')
    var mainAdd = document.querySelector('div#mainAdd')
    var mainAdded = document.querySelector('div#mainAdded')
    var buttonHome = document.querySelector('button#homeBt')
    var buttonBD = document.querySelector('button#birthdayBt')
    var buttonReward = document.querySelector('button#rewardBt')
  
  
    buttonHome.setAttribute('class', 'pageNotCorrent')
    buttonBD.setAttribute('class', 'pageNotCorrent')
    buttonReward.setAttribute('class', 'pageNotCorrent')
    mainBD.setAttribute('class', 'mainBirthday')
    mainHome.setAttribute('class', 'mainHome')
    mainReward.setAttribute('class', 'mainReward')
    mainAdd.setAttribute('class', 'mainAdd')
    mainAdded.setAttribute('class', 'mainAdded')
    mainTextinho.setAttribute('class', 'mainCorrent')
  }

function RewardPage(){
    return(
        <div class='circle1'></div>,
        <div class='circle2'></div>,
        <div class='glassBD'>
            <h1>Presentes</h1>
            <a class='keyCheck' onClick={changeToMaintextinho}>Textinho</a>
            <a class='keyCheck' href='https://youtu.be/Vd35zKHoLMI' target='_black'>Vídeo</a>
        </div>
    )
}

export default RewardPage