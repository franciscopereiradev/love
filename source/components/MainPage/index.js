import { FaNewspaper, FaPlus } from 'react-icons/fa'

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const today = new Date().getTime();
const date_ini = new Date(`March 06 2021 00:00:00 `).getTime();

async function ChangetoMainAdd(){
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
  var mainAdd = document.querySelector('div#mainAdd')
  var buttonHome = document.querySelector('button#homeBt')
  var buttonBD = document.querySelector('button#birthdayBt')
  var buttonReward = document.querySelector('button#rewardBt')


  buttonHome.setAttribute('class', 'pageNotCorrent')
  buttonBD.setAttribute('class', 'pageNotCorrent')
  buttonReward.setAttribute('class', 'pageNotCorrent')
  mainBD.setAttribute('class', 'mainBirthday')
  mainHome.setAttribute('class', 'mainHome')
  mainReward.setAttribute('class', 'mainReward')
  mainAdd.setAttribute('class', 'mainCorrent')
}

async function ChangetoMainAdded(){
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
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
  mainAdded.setAttribute('class', 'mainCorrent')
}


async function logout(){
  localStorage.setItem('mode', 'logout')
  window.location.href = '/'
}

function countDays(){
  const time = today - date_ini;
  const timeInDays = Math.floor(time/day)
  return(timeInDays)
}
countDays()

function daysTo(){
  const date_oneY = new Date(`March 06 2022 00:00:00`).getTime();
  const date_twoY = new Date(`March 06 2023 00:00:00`).getTime();
  
  if(date_oneY > today){
    const time3 = date_oneY - today
    const timeInDays2 = Math.floor(time3/day)
    

    return(timeInDays2)

  } else if(date_oneY <= today){
    const time3 = date_twoY - today
    const timeInDays2 = Math.floor(time3/day)
    
    return(timeInDays2)

  }
  
}
daysTo()

function howManyYears(){
  const date_oneY = new Date(`March 06 2022 00:00:00`).getTime();

  if(date_oneY > today){
    const howManyYears = 1

    return(`${howManyYears} ano`)
  } else{
    const howManyYears = 2
    
    return(`${howManyYears} anos`)
  }
}
howManyYears()

function progress(){
  const today = new Date().getTime();
  const date_oneY = new Date(`March 06 2022 00:00:00`).getTime();

  const days = date_oneY - today
  const time = Math.floor(days/day)

    const percent = Math.floor(time/365 * 100)
    const progress = 100 - percent

    return(progress)
    

} progress()

function MainPage() {
  return (
    <div class='circle1'></div>,
    <div class='circle2'></div>,
        <div class='glass'>
        <header>
          <button id='logout'class='pageNotCorrent' onClick={logout}>
            <p>Sair</p>
          </button>
        </header>
          <div class='header'>
            <h1 class='title'>
              Estamos juntos à
            </h1>
            <h1 class='days'>
              {countDays()} dias
            </h1>
            <h2 class='years'>Faltam {daysTo()} dias para fazer-mos {howManyYears()} <strong>juntos!</strong></h2>
          </div>
          <section class='progressBarMain'>
            <div class='progressBar'>
              <div class='correntProgress' style={{width: `${progress()}%`}}></div>
            </div>
              <p>{`${progress()}%`}</p>
          </section>
          
          <section class='achievements'>
            <ul class='list'>
              <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>5 meses de namoro</h2>
                  <p class='dateDone'>06/08/2021</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item1'>6 meses de namoro</h2>
                  <p class='date1'>06/09/2021</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item2'>7 meses de namoro</h2>
                  <p class='date2'>06/10/2021</p>
              </li>

              <li class='listItemYear'>
                <div class='itemBox' >
                  <h2 class='itemYear'>1 ano de namoro </h2>
                  <p class='dateYear'>06/03/2022</p>
                </div>
              </li>
            </ul>
          </section>
          <div class='addBox'>
            <button id='addedMore' class='pageNotCorrent' onClick={ChangetoMainAdded}>
              <p><FaNewspaper/></p>
            </button>
            <button id='addMore' class='pageNotCorrent' onClick={ChangetoMainAdd}>
              <p><FaPlus/></p>
            </button>
          </div>
          <section class='dev'>
            <p>Made with Love ❤</p>
            <h2>From <strong>Me</strong> to <strong>You!</strong></h2>
          </section>
          
        </div>
  );
}

export default MainPage;
