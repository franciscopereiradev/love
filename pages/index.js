import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { render } from 'react-dom'

async function setAsCompleted(){
  
  var item = document.querySelector('h2.item')
  var date = document.querySelector('p.date')
  var progressBar = document.querySelector('div.correntProgress')

  item.setAttribute('class', 'itemDone')
  date.setAttribute('class', 'dateDone')
  progressBar.setAttribute('class', 'correntProgressUpdate')
}

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDays(){
  const today = new Date().getTime();
  const date_ini = new Date(`March 06 2021 00:00:00 `).getTime();
  const time = today - date_ini;
  const time2 = Math.floor(time/day)
  return(time2)
}
countDays()

function oneMonth(){
  const today = new Date().getTime();
  const date = new Date(`March 24 2021 20:17:00 `).getTime();

  if(today >= date){
    setAsCompleted()
  }
  return('06/04/2021')
}
oneMonth()


export default function Home() {
  
  return (
    <div id='pageLanding'>
      <title>LoveYou ❤</title>
      <div class='main'>
        <div class='header'>
          <h1 class='title'>
            Estamos justos à
          </h1>
          <h1 class='days'>
            {countDays()} dias
          </h1>
        </div>
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
                <h2 class='item'>1 mês de namoro </h2>
                <p class='date'>{oneMonth()}</p>
              </div>
              {/* <button class='done' onClick={setAsCompleted}>Marcar como feito</button> */}
            </li>
            <li class='listItem'>
              <div class='itemBox' >
                <h2 class='item'>2 meses de namoro </h2>
                <p class='date'>06/05/2021</p>
              </div>
              {/* <button class='done' onClick={setAsCompleted}>Marcar como feito</button> */}
            </li>
          </ul>
          <button class='addMore'>
            <div class='add1'></div>
            <div class='add2'></div>
          </button>
        </section>
        <section class='progressBarMain'>
          <p class='subtitle'>

          </p>
          <div class='progressBar'>
            <div class='correntProgress'>

            </div>
          </div>
        </section>
        <section class='dev'>
          <p>
            Made with Love ❤
          </p>
          <h2>
            From <strong>Me</strong> to <strong>You!</strong>
          </h2>
        </section>
      </div>
    </div>
    
  )
}
