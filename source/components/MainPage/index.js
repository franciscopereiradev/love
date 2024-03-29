import { FaNewspaper, FaPlus } from 'react-icons/fa'
import Months from '../Months';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const today = new Date().getTime();
const date_ini = new Date(`March 06 2021 00:00:00 `).getTime();

// async function ChangetoMainAdd(){
//   var mainBD = document.querySelector('div#mainBirthday')
//   var mainHome = document.querySelector('div#mainHome')
//   var mainReward = document.querySelector('div#mainReward')
//   var mainAdd = document.querySelector('div#mainAdd')
//   var buttonHome = document.querySelector('button#homeBt')
//   var buttonReward = document.querySelector('button#rewardBt')
//   var buttonBD = document.querySelector('button#birthdayBt')


//   buttonHome.setAttribute('class', 'pageNotCorrent')
//   buttonBD.setAttribute('class', 'pageNotCorrent')
//   buttonReward.setAttribute('class', 'pageNotCorrent')
//   mainBD.setAttribute('class', 'mainBirthday')
//   mainHome.setAttribute('class', 'mainHome')
//   mainReward.setAttribute('class', 'mainReward')
//   mainAdd.setAttribute('class', 'mainCorrent')
// }

// async function ChangetoMainAdded(){
//   var mainBD = document.querySelector('div#mainBirthday')
//   var mainHome = document.querySelector('div#mainHome')
//   var mainReward = document.querySelector('div#mainReward')
//   var mainAdded = document.querySelector('div#mainAdded')
//   var buttonHome = document.querySelector('button#homeBt')
//   var buttonBD = document.querySelector('button#birthdayBt')
//   var buttonReward = document.querySelector('button#rewardBt')


//   buttonHome.setAttribute('class', 'pageNotCorrent')
//   buttonBD.setAttribute('class', 'pageNotCorrent')
//   buttonReward.setAttribute('class', 'pageNotCorrent')
//   mainBD.setAttribute('class', 'mainBirthday')
//   mainHome.setAttribute('class', 'mainHome')
//   mainReward.setAttribute('class', 'mainReward')
//   mainAdded.setAttribute('class', 'mainCorrent')
// }

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
    <div class='container'>
      <div class='circle1'></div>
      <div class='circle2'></div>
        <div class='glass'>
          <div class='header'>
            <h1 class='days'>{countDays()} dias de namoro!</h1>
            <h2 class='years'>Faltam {daysTo()} dias para fazermos {howManyYears()}!</h2>
          </div>
          <section class='progressBarMain'>
            <div class='progressBar'>
              <div class='correntProgress' style={{width: `${progress()}%`}}></div>
            </div>
              <p>{`${progress()}%`}</p>
          </section>
          
          <section class='achievements'>
            <ul class='list'>
              <Months/>
              <li class='listItemYear'>
                  <h2 class='itemYear'>1 ano de namoro </h2>
                  <p class='dateYear'>06/03/2022</p>
              </li>
            </ul>
          </section>
          <section class='dev'>
            <div class='credits'>
              <p>Made with Love ❤</p>
              <h2>From <strong>Me</strong> to <strong>You!</strong></h2>
            </div>
            <div class='momoPhrase'>
              <p>"I see forever in your eyes"</p>
              <p>"I feel okay when i see you smile"</p>
            </div>
          </section>
          
        </div>
    </div>
  );
}

export default MainPage;
