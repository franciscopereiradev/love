import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { render } from 'react-dom'
import Login from './login.js'

async function setAsPassedOne(){
//   var item = document.querySelector('h2.item1')
//   var date = document.querySelector('p.date1')

//   item.setAttribute('class', 'itemDone')
//   date.setAttribute('class', 'dateDone')
}

async function setAsPassedTwo(){
  var item2 = document.querySelector('h2.item2')
  var date2 = document.querySelector('p.date2')

  item2.setAttribute('class', 'itemDone')
  date2.setAttribute('class', 'dateDone')


}

async function setAsPassedTree(){
  var item2 = document.querySelector('h2.item3')
  var date2 = document.querySelector('p.date3')

  item2.setAttribute('class', 'itemDone')
  date2.setAttribute('class', 'dateDone')
}

async function setAsPassedFour(){
  var item2 = document.querySelector('h2.item4')
  var date2 = document.querySelector('p.date4')

  item2.setAttribute('class', 'itemDone')
  date2.setAttribute('class', 'dateDone')
}
async function setAsPassedFive(){
  var item2 = document.querySelector('h2.item5')
  var date2 = document.querySelector('p.date5')

  item2.setAttribute('class', 'itemDone')
  date2.setAttribute('class', 'dateDone')
}
async function setAsPassedSix(){
  var item2 = document.querySelector('h2.item6')
  var date2 = document.querySelector('p.date6')

  item2.setAttribute('class', 'itemDone')
  date2.setAttribute('class', 'dateDone')
}
async function setAsPassedSeven(){
  var item2 = document.querySelector('h2.item7')
  var date2 = document.querySelector('p.date7')

  item2.setAttribute('class', 'itemDone')
  date2.setAttribute('class', 'dateDone')
}
async function setAsPassedHeight(){
  var item2 = document.querySelector('h2.item8')
  var date2 = document.querySelector('p.date8')

  item2.setAttribute('class', 'itemDone')
  date2.setAttribute('class', 'dateDone')
}
async function setAsPassedNine(){
  var item2 = document.querySelector('h2.item9')
  var date2 = document.querySelector('p.date9')

  item2.setAttribute('class', 'itemDone')
  date2.setAttribute('class', 'dateDone')
}
async function setAsPassedTen(){
  var item2 = document.querySelector('h2.item10')
  var date2 = document.querySelector('p.date10')

  item2.setAttribute('class', 'itemDone')
  date2.setAttribute('class', 'dateDone')
}
async function setAsPassedEleven(){
  var item2 = document.querySelector('h2.item11')
  var date2 = document.querySelector('p.date11')

  item2.setAttribute('class', 'itemDone')
  date2.setAttribute('class', 'dateDone')
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
  const dateTree = new Date(`June 06 2021 00:00:00 `).getTime();
  const dateFour= new Date(`July 06 2021 00:00:00 `).getTime();
  const dateFive = new Date(`August 06 2021 00:00:00 `).getTime();
  const dateSix = new Date(`September 06 2021 00:00:00 `).getTime();
  const dateSeven = new Date(`October 06 2021 00:00:00 `).getTime();
  const dateHeight = new Date(`November 06 2021 00:00:00 `).getTime();
  const dateNine = new Date(`December 06 2021 00:00:00 `).getTime();
  const dateTen = new Date(`January 06 2022 00:00:00 `).getTime();
  const dateEleven = new Date(`February 06 2022 00:00:00 `).getTime();

  if(today >= dateOne){
    setAsPassedOne()
  }
  if(today >= dateTwo){
    setAsPassedTwo()
  }
  if(today >= dateTree){
    setAsPassedTree()
  }
  if(today >= dateFour){
    setAsPassedFour()
  }
  if(today >= dateFive){
    setAsPassedFive()
  }
  if(today >= dateSix){
    setAsPassedSix()
  }
  if(today >= dateSeven){
    setAsPassedSeven()
  }
  if(today >= dateHeight){
    setAsPassedHeight()
  }
  if(today >= dateNine){
    setAsPassedNine()
  }
  if(today >= dateTen){
    setAsPassedTen()
  }
  if(today >= dateEleven){
    setAsPassedEleven()
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

// function userNames(){
//   const names = [
//     'Francisco', 
//     'Carolina']

//   return(names)
// } userNames()

// var countDownDate = new Date("April 17, 2021 00:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);



export default function Home() {
  
  return (
    <div class='pageLanding'>
      <title>LoveYou ❤</title>
      {/* <div class='hover'>
        <h1>OFFline :(</h1>
        <h2>Por tempo indeterminado</h2>
      </div> */}
      <div class='main'>
        <div class='circle1'></div>
        <div class='circle2'></div>
        <div class='glass'>
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
              <li class='listItem2'>
                <div class='itemBox' >
                  <h2 class='itemDone'>Inicio de namoro </h2>
                  <p class='dateDone'>06/03/2021</p>
                </div>
              </li>
              <li class='listItem2'>
                <div class='itemBox' >
                  <h2 class='item1'>1 mês de namoro </h2>
                  <p class='date1'>{oneMonth()}</p>
                </div>
              </li>
              <li class='listItem2'>
                <div class='itemBox' >
                  <h2 class='item2'>2 meses de namoro </h2>
                  <p class='date2'>06/05/2021</p>
                </div>
              </li>
              <li class='listItem2'>
                <div class='itemBox' >
                  <h2 class='item3'>3 meses de namoro </h2>
                  <p class='date3'>06/06/2021</p>
                </div>
              </li>
              <li id='listSt' class='listItem'>
                <div class='itemBox' >
                  <h2 class='item4'>4 meses de namoro </h2>
                  <p class='date4'>06/07/2021</p>
                </div>
              </li>
              <li class='listItem'>
                <div class='itemBox' >
                  <h2 class='item5'>5 meses de namoro </h2>
                  <p class='date5'>06/08/2021</p>
                </div>
              </li>
              <li id='listLast' class='listItem'>
                <div class='itemBox2' >
                  <h2 class='item6'>6 meses de namoro </h2>
                  <p class='date6'>06/09/2021</p>
                </div>
              </li>
              <li class='listItem2'>
                <div class='itemBox2' >
                  <h2 class='item7'>7 meses de namoro </h2>
                  <p class='date7'>06/10/2021</p>
                </div>
              </li>
              <li class='listItem2'>
                <div class='itemBox2' >
                  <h2 class='item8'>8 meses de namoro </h2>
                  <p class='date8'>06/11/2021</p>
                </div>
              </li>
              <li class='listItem2'>
                <div class='itemBox2' >
                  <h2 class='item9'>9 meses de namoro </h2>
                  <p class='date9'>06/12/2021</p>
                </div>
              </li>
              <li class='listItem2'>
                <div class='itemBox2' >
                  <h2 class='item10'>10 meses de namoro </h2>
                  <p class='date10'>06/01/2022</p>
                </div>
              </li>
              <li class='listItem2'>
                <div class='itemBox2' >
                  <h2 class='item11'>11 meses de namoro </h2>
                  <p class='date11'>06/02/2022</p>
                </div>
              </li>
              <li class='listItemYear'>
                <div class='itemBox' >
                  <h2 class='itemYear'>1 ano de namoro </h2>
                  <p class='dateYear'>06/03/2022</p>
                </div>
              </li>
            </ul>
          </section>
          <button class='addMore'>
              <div class='add1'></div>
              <div class='add2'></div>
            </button>
          
          {/* <section class="userMobile">
            <a>
              <img></img>
            </a>
            <div>
              <p>Carolina</p>
              <p>Francisco</p>
            </div>
          </section> */}
          
          <section class='dev'>
            <p>Made with Love ❤</p>
            <h2>From <strong>Me</strong> to <strong>You!</strong></h2>
          </section>
          
            <a class='birthdayHL' href='./birthday'>
              <p>❤</p>
            </a>
        </div>

        {/* <a class='user' href='./account'>
          <div class='photoUser'>
            <img></img>
          </div>
            <div class='nameUser'>
              <p>Carolina</p>
              <p>Francisco</p>
            </div>
        </a> */}
        
      </div>
      {/* <div class='countdown' >
        <p id='demo'></p>
        <p>When everything started!</p>
      </div> */}
    </div>
    
  )
}
