import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { render } from 'react-dom'

async function setAsPassedOne(){
  
  var item = document.querySelector('h2.item1')
  var date = document.querySelector('p.date1')
  var progressBar = document.querySelector('div.correntProgress')

  item.setAttribute('class', 'itemDone')
  date.setAttribute('class', 'dateDone')
  progressBar.setAttribute('class', 'correntProgressUpdate')
}

async function setAsPassedTwo(){
  
  var item2 = document.querySelector('h2.item2')
  var date2 = document.querySelector('p.date2')
  var progressBar2 = document.querySelector('div.correntProgress')

  item2.setAttribute('class', 'itemDone')
  date2.setAttribute('class', 'dateDone')
  progressBar2.setAttribute('class', 'correntProgressUpdate2')
}

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const today = new Date().getTime();
const date_ini = new Date(`March 06 2021 00:00:00 `).getTime();

function countDays(){
  const time = today - date_ini;
  const timeInDays = Math.floor(time/day)
  return(timeInDays)
}
countDays()

function oneMonth(){
  const today = new Date().getTime();
  const dateOne = new Date(`April 06 2021 00:00:00 `).getTime();
  const dateTwo = new Date(`May 06 2021 00:00:00 `).getTime();

  if(today >= dateOne){
    setAsPassedOne()
  }
  if(today >= dateTwo){
    setAsPassedTwo()
  }
  return('06/04/2021')
}
oneMonth()

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
  const date_twoY = new Date(`March 06 2023 00:00:00`).getTime();

  if(date_oneY > today){
    const howManyYears = 1

    return(`${howManyYears} ano`)
  } else{
    const howManyYears = 2
    
    return(`${howManyYears} anos`)
  }
}
howManyYears()

export default function Home() {
  
  return (
    <div id='pageLanding'>
      <title>LoveYou ❤</title>
      
      <div class='main'>
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
            <div class='correntProgress'></div>
          </div>
        </section>
        <section class='achievements'>
          <ul class='list'>
            <li class='listItem'>
              <div class='itemBox' >
                <h2 class='itemDone'>Inicio de namoro </h2>
                <p class='dateDone'>06/03/2021</p>
              </div>
              {/* <button class='doneDone' onClick={setAsCompleted}>Done</button> */}
            </li>
            <li class='listItem'>
              <div class='itemBox' >
                <h2 class='item1'>1 mês de namoro </h2>
                <p class='date1'>{oneMonth()}</p>
              </div>
              {/* <button class='done' onClick={setAsCompleted}>Marcar como feito</button> */}
            </li>
            <li class='listItem'>
              <div class='itemBox' >
                <h2 class='item2'>2 meses de namoro </h2>
                <p class='date2'>06/05/2021</p>
              </div>
              {/* <button class='done' onClick={setAsCompleted}>Marcar como feito</button> */}
            </li>
          </ul>
        </section>
        <button class='addMore'>
            <div class='add1'></div>
            <div class='add2'></div>
          </button>
        <section class='dev'>
          <p>Made with Love ❤</p>
          <h2>From <strong>Me</strong> to <strong>You!</strong></h2>
        </section>
      </div>
    </div>
    
  )
}
