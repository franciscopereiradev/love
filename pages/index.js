import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { render } from 'react-dom'
import Login from '../source/components/login.js'


async function changeToMainBD(){
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
  var mainAdd = document.querySelector('div#mainAdd')
  var mainAdded = document.querySelector('div#mainAdded')
  var buttonHome = document.querySelector('button#homeBt')
  var buttonBD = document.querySelector('button#birthdayBt')
  var buttonReward = document.querySelector('button#rewardBt')

  buttonHome.setAttribute('class', 'pageNotCorrent')
  buttonBD.setAttribute('class', 'pageCorrent')
  buttonReward.setAttribute('class', 'pageNotCorrent')
  mainBD.setAttribute('class', 'mainCorrent')
  mainHome.setAttribute('class', 'mainHome')
  mainReward.setAttribute('class', 'mainReward')
  mainAdd.setAttribute('class', 'mainAdd')
  mainAdded.setAttribute('class', 'mainAdded')
}

async function changeToMainHome(){
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
  var mainAdd = document.querySelector('div#mainAdd')
  var mainAdded = document.querySelector('div#mainAdded')
  var buttonHome = document.querySelector('button#homeBt')
  var buttonBD = document.querySelector('button#birthdayBt')
  var buttonReward = document.querySelector('button#rewardBt')


  buttonHome.setAttribute('class', 'pageCorrent')
  buttonBD.setAttribute('class', 'pageNotCorrent')
  buttonReward.setAttribute('class', 'pageNotCorrent')
  mainBD.setAttribute('class', 'mainBirthday')
  mainHome.setAttribute('class', 'mainCorrent')
  mainReward.setAttribute('class', 'mainReward')
  mainAdd.setAttribute('class', 'mainAdd')
  mainAdded.setAttribute('class', 'mainAdded')
}

async function changeToMainReward(){
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
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
  mainAdd.setAttribute('class', 'mainAdd')
  mainAdded.setAttribute('class', 'mainAdded')
}

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

async function saveEvents(req, res){
  const createEvent = require('../source/database/createEvent')

  const eventValue = {
    event: req.body.event,
    date: req.doby.eventDate
  }
}

async function loginFooterNone(){
  var mainLogin = document.querySelector('div#mainLogin')
  var footer = document.querySelector('footer#footer')

  if(mainLogin.style.display = 'flex'){
    footer.style.display = 'none'
  }

} loginFooterNone()

async function madeLogin(){
  var mainLogin = document.querySelector('div#mainLogin')
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
  var buttonHome = document.querySelector('button#homeBt')
  var buttonBD = document.querySelector('button#birthdayBt')
  var buttonReward = document.querySelector('button#rewardBt')
  var footer = document.querySelector('footer#footer')
  var pass = document.querySelector('input#password')
  var remember = document.querySelector('input#remember')

  var passCheck = '0603'

  if(pass.value === passCheck && remember.checked == false){

    buttonHome.setAttribute('class', 'pageCorrent')
    buttonBD.setAttribute('class', 'pageNotCorrent')
    buttonReward.setAttribute('class', 'pageNotCorrent')
    mainBD.setAttribute('class', 'mainBirthday')
    mainHome.setAttribute('class', 'mainCorrent')
    mainReward.setAttribute('class', 'mainReward')
    mainLogin.setAttribute('class', 'mainLogin')
    footer.style.display = 'flex'
    mainLogin.style.display = 'none'

  }else if(pass.value === passCheck && remember.checked == true){
    localStorage.setItem('mode', 'login')

    buttonHome.setAttribute('class', 'pageCorrent')
    buttonBD.setAttribute('class', 'pageNotCorrent')
    buttonReward.setAttribute('class', 'pageNotCorrent')
    mainBD.setAttribute('class', 'mainBirthday')
    mainHome.setAttribute('class', 'mainCorrent')
    mainReward.setAttribute('class', 'mainReward')
    mainLogin.setAttribute('class', 'mainLogin')
    footer.style.display = 'flex'
    mainLogin.style.display = 'none'
  } else {
    alert('Couple code não encontrado!')
  }
}

async function autoLogin(){
  var mainLogin = document.querySelector('div#mainLogin')
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
  var buttonHome = document.querySelector('button#homeBt')
  var buttonBD = document.querySelector('button#birthdayBt')
  var buttonReward = document.querySelector('button#rewardBt')
  var footer = document.querySelector('footer#footer')

  if(localStorage.mode == 'login'){

    buttonHome.setAttribute('class', 'pageCorrent')
    buttonBD.setAttribute('class', 'pageNotCorrent')
    buttonReward.setAttribute('class', 'pageNotCorrent')
    mainBD.setAttribute('class', 'mainBirthday')
    mainHome.setAttribute('class', 'mainCorrent')
    mainReward.setAttribute('class', 'mainReward')
    mainLogin.setAttribute('class', 'mainLogin')
    footer.style.display = 'flex'
    mainLogin.style.display = 'none'
  }

} autoLogin()

async function logout(){
  localStorage.setItem('mode', 'logout')
  window.location.href = '/'
}

async function enterCheck(){

  document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
      
      var btn = document.querySelector(".keyLogin");
      
      btn.click();
      
    }
  });
} enterCheck()

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

async function start(){
  return(window.location.href = '/level1')
}

export default function Home() {
  
  return (
    <div class='pageLanding'>
      <title>LoveYou ❤</title>
      <div class='mainHome' id='mainHome'>
        <div class='circle1'></div>
        <div class='circle2'></div>
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
                  <h2 class='itemDone'>4 meses de namoro</h2>
                  <p class='dateDone'>06/07/2021</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item1'>5 meses de namoro</h2>
                  <p class='date1'>06/08/2021</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item2'>6 meses de namoro</h2>
                  <p class='date2'>06/09/2021</p>
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
            <button id='addMore' class='pageNotCorrent' onClick={ChangetoMainAdded}>
              <p>📝</p>
            </button>
            <button id='addMore' class='pageNotCorrent' onClick={ChangetoMainAdd}>
              <div class='add1'></div>
              <div class='add2'></div>
            </button>
          </div>
          <section class='dev'>
            <p>Made with Love ❤</p>
            <h2>From <strong>Me</strong> to <strong>You!</strong></h2>
          </section>
          
        </div>
        
      </div>
      <div id='mainBirthday' class='mainBirthday'>
        <div class='circle1'></div>
        <div class='circle2'></div>
          <div class='glassBD'>
            <div class='header'>
                <h1 class='bdTitle'>Parabéns Mozão ❤</h1>
              </div>
              <div class='rules'>
                <h3 class='bdSubtitle'>Regras</h3>
                <p>1- Codigos em formato de datas devem ser apresentados da seguinte forma (dd/mm) Ex: 1 de janeiro - 0101!</p>
                <p>2- Codigos em formato de frases devem ser apresentados em letra minuscula e com espaços entre palavras!</p>
                <p>3- Codigos em formato de numeros têm 4 ou 6 digitos!</p>
                <p>4- Não faças batona mesmo que estejas com dificuldade em algum nivel, pede antes ajuda, ao melhor namorado do mundo hihihi!</p>
                <p>5- Diverte-te!!! :)</p>
              <button onClick={start} class='keyCheck'>Começar</button>
            </div>
                  
          </div>
      </div>  
      <div id='mainReward' class='mainReward'>
        <div class='circle1'></div>
        <div class='circle2'></div>
        <div class='glassBD'>
          <h1>Presentes</h1>
          <a class='keyCheck' href='/textinho' target='_black'>Textinho</a>
          <a class='keyCheck' href='https://youtu.be/Vd35zKHoLMI' target='_black'>Vídeo</a>
        </div>
      </div>
      
      <div class='mainCorrent' id='mainLogin'>
        <div class='circle1'></div>
        <div class='circle2'></div>
        <div class='glassBD'>
          <h1>Couple Code ❤</h1>
          <input id='password' class='loginInput' type='password'></input>
          <div class='rememberBox'>
            <input id='remember' name='login' type='checkbox'></input>
            <p>Lembrar Couple Code ❤</p>
          </div>
          <input type='submit' onClick={madeLogin} value='Entrar' class='keyLogin'></input>
          
        </div>
      </div>

      <div id='mainAdd' class='mainAdd'>
        <div class='circle1'></div>
        <div class='circle2'></div>
          <form class='glassBD' action='/' method='POST'>
            <h1>Nova data</h1>
            <p>Evento</p>
            <input id='event' name='event' class='loginInput' required></input>
            <p>Data do evento</p>
            <input id='eventDate' name='eventDate' class='loginInput' type='date' required></input>
            <button type='submit' class='keyLogin'>Guardar</button>
          </form>
      </div>

      <div id='mainAdded' class='mainAdded'>
        <div class='circle1'></div>
        <div class='circle2'></div>
        <div class='glassBD'>
            <h1>Eventos</h1>
            <main>
              <p>Coming soon</p>
            </main>
        </div>
      </div>

      <footer id='footer'>
        <button id='rewardBt' class='pageNotCorrent' onClick={changeToMainReward}>
          <p>🎁</p>
        </button>
        <button id='homeBt' class='pageCorrent' onClick={changeToMainHome}>
          <p>🏠</p>
        </button>
        <button id='birthdayBt' class='pageNotCorrent' onClick={changeToMainBD}>
          <p>❤</p>
        </button>
        
      </footer>
    </div>
  )}
  