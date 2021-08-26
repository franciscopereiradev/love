import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { render } from 'react-dom'
import LoginPage from '../source/components/LoginPage'
import MainPage from '../source/components/MainPage'
import BirthdayPage from '../source/components/BirthdayPage'
import RewardPage from '../source/components/RewardPage'
import EventsPage from '../source/components/EventsPage'
// import Months from '../source/components/Months'
import { FaHome, FaHeart, FaGift } from "react-icons/fa";



async function changeToMainBD(){
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
  var mainTextinho = document.querySelector('div#textinhoPage')
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
  mainTextinho.setAttribute('class', 'mainTextinho')
  mainAdd.setAttribute('class', 'mainAdd')
  mainAdded.setAttribute('class', 'mainAdded')
}

async function changeToMainHome(){
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
  var mainTextinho = document.querySelector('div#textinhoPage')
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
  mainTextinho.setAttribute('class', 'mainTextinho')
  mainAdd.setAttribute('class', 'mainAdd')
  mainAdded.setAttribute('class', 'mainAdded')
}

async function changeToMainReward(){
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
  var mainTextinho = document.querySelector('div#textinhoPage')
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
  mainTextinho.setAttribute('class', 'mainTextinho')
  mainAdd.setAttribute('class', 'mainAdd')
  mainAdded.setAttribute('class', 'mainAdded')
}

async function loginFooterNone(){
  var mainLogin = document.querySelector('div#mainLogin')
  var footer = document.querySelector('footer#footer')

  if(mainLogin.style.display = 'flex'){
    footer.style.display = 'none'
  }

} loginFooterNone()

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

async function enterCheck(){

  document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
      
      var btn = document.querySelector(".keyLogin");
      
      btn.click();
      
    }
  });
} enterCheck()


// const express = require('express');
// const bodyParser = require('body-parser')
// const app = express();

// app.use(bodyParser.urlencoded({ extended: false}))

// app.use(bodyParser.json())

// async function submitEvent(req, res){
//   const createEvent = require('../source/db/createEvent')

//   const eventValue = {
//     event: req.body.event,
//     eventDate: req.body.eventDate
//   }

//   try {
//     const db = await Database
//     await createEvent(db, { eventValue })

//     // return res.redirect("/")
//     alert('all good')
//   } catch (error) {
//     alert(error)
//   }
// } 


export default function Home() {
  
  return (
    <div class='pageLanding'>
      <title>LoveYou ❤</title>
      <div class='mainHome' id='mainHome'>
        <MainPage/>
      </div>

      <div id='mainBirthday' class='mainBirthday'>
        <BirthdayPage/>
      </div>  

      <div id='mainReward' class='mainReward'>
        <RewardPage/>
      </div>
      
      <div class='mainCorrent' id='mainLogin'>
        <LoginPage/>
      </div>

      {/* <div class='mainTextinho' id='mainTextinho'>
        <TextinhoPage/>
      </div> */}

      <div id='mainAdd' class='mainAdd'>
        <div class='circle1'></div>
        <div class='circle2'></div>
          <form class='glassBD' method='POST'>
            <h1>Nova data</h1>
            <p>Evento</p>
            <input id='event' name='event' class='loginInput' required></input>
            <p>Data do evento</p>
            <input id='eventDate' name='eventDate' class='loginInput' required></input>
            <button class='keyLogin'>Guardar</button>
          </form>
      </div>

      <div id='mainAdded' class='mainAdded'>
        <EventsPage/>
      </div>

      <footer id='footer'>
        <div class='footerMain'>
          <button id='rewardBt' class='pageNotCorrent' onClick={changeToMainReward}>
            <p><FaGift/></p>
          </button>
          <button id='homeBt' class='pageCorrent' onClick={changeToMainHome}>
            <p><FaHome/></p>
          </button>
          <button id='birthdayBt' class='pageNotCorrent' onClick={changeToMainBD}>
            <p><FaHeart/></p>
          </button>
        </div>
        
      </footer>
    </div>
  )}

  
  