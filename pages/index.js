import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { render } from 'react-dom'
import LoginPage from '../source/components/LoginPage'
import MainPage from '../source/components/MainPage'
import BirthdayPage from '../source/components/BirthdayPage'
import RewardPage from '../source/components/RewardPage'
import EventsPage from '../source/components/EventsPage'
import AddPage from '../source/components/AddPage'
import MoviePage from '../source/components/MoviePage'
// import Months from '../source/components/Months'
import { FaHome, FaHeart, FaGift } from "react-icons/fa";
import { BiExit, BiMenu, BiMovie } from 'react-icons/bi'
import { IoInvertModeOutline  } from 'react-icons/io5'
import { MdEventNote, MdMovie } from 'react-icons/md'
import { Children } from 'react'

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
  var buttonAdd = document.querySelector('button#eventBt')
  var mainMovie = document.querySelector('div#mainMovie')
  var buttonMovie =  document.querySelector('button#movieBt')

  mainMovie.setAttribute('class', 'mainMovie')
  buttonMovie.setAttribute('class', 'pageNotCorrent')
  buttonAdd.setAttribute('class', 'pageNotCorrent')
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
  var buttonAdd = document.querySelector('button#eventBt')
  var mainMovie = document.querySelector('div#mainMovie')
  var buttonMovie =  document.querySelector('button#movieBt')

  mainMovie.setAttribute('class', 'mainMovie')
  buttonMovie.setAttribute('class', 'pageNotCorrent')
  buttonAdd.setAttribute('class', 'pageNotCorrent')
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
  var buttonAdd = document.querySelector('button#eventBt')
  var mainMovie = document.querySelector('div#mainMovie')
  var buttonMovie =  document.querySelector('button#movieBt')

  mainMovie.setAttribute('class', 'mainMovie')
  buttonMovie.setAttribute('class', 'pageNotCorrent')
  buttonAdd.setAttribute('class', 'pageNotCorrent')
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

async function ChangetoMainAdded(){
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
  var mainAdd = document.querySelector('div#mainAdd')
  var mainAdded = document.querySelector('div#mainAdded')
  var buttonHome = document.querySelector('button#homeBt')
  var buttonBD = document.querySelector('button#birthdayBt')
  var buttonReward = document.querySelector('button#rewardBt')
  var buttonAdd = document.querySelector('button#eventBt')
  var mainMovie = document.querySelector('div#mainMovie')
  var buttonMovie =  document.querySelector('button#movieBt')

  mainMovie.setAttribute('class', 'mainMovie')
  buttonMovie.setAttribute('class', 'pageNotCorrent')
  buttonAdd.setAttribute('class', 'pageCorrent')
  buttonHome.setAttribute('class', 'pageNotCorrent')
  buttonBD.setAttribute('class', 'pageNotCorrent')
  buttonReward.setAttribute('class', 'pageNotCorrent')
  mainBD.setAttribute('class', 'mainBirthday')
  mainHome.setAttribute('class', 'mainHome')
  mainReward.setAttribute('class', 'mainReward')
  mainAdd.setAttribute('class', 'mainAdd')
  mainAdded.setAttribute('class', 'mainCorrent')
}

async function ChangetoMainMovie(){
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
  var mainAdd = document.querySelector('div#mainAdd')
  var mainAdded = document.querySelector('div#mainAdded')
  var buttonHome = document.querySelector('button#homeBt')
  var buttonBD = document.querySelector('button#birthdayBt')
  var buttonReward = document.querySelector('button#rewardBt')
  var buttonAdd = document.querySelector('button#eventBt')
  var mainMovie = document.querySelector('div#mainMovie')
  var buttonMovie =  document.querySelector('button#movieBt')

  mainMovie.setAttribute('class', 'mainCorrent')
  buttonMovie.setAttribute('class', 'pageCorrent')
  buttonAdd.setAttribute('class', 'pageNotCorrent')
  buttonHome.setAttribute('class', 'pageNotCorrent')
  buttonBD.setAttribute('class', 'pageNotCorrent')
  buttonReward.setAttribute('class', 'pageNotCorrent')
  mainBD.setAttribute('class', 'mainBirthday')
  mainHome.setAttribute('class', 'mainHome')
  mainReward.setAttribute('class', 'mainReward')
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

async function logout(){
  localStorage.setItem('mode', 'logout')
  window.location.href = '/'
}
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
function showMenu(){
  var footerMain = document.querySelector('div.footerMain')

 if(footerMain.style.right != '-70px'){
    footerMain.style.right = '-70px'
 } else {
  footerMain.style.right = '10px'
 }

}

async function changeTheme(){
  var mainLogin = document.querySelector('div#mainLogin')
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
  var mainAdd = document.querySelector('div#mainAdd')
  var mainAdded = document.querySelector('div#mainAdded')
  var mainMovie = document.querySelector('div#mainMovie')
  
  if(localStorage.theme == 'light'){
    mainLogin.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    mainBD.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    mainHome.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    mainReward.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    mainAdd.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    mainAdded.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    mainMovie.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    
    localStorage.theme = 'dark'
  } else if(localStorage.theme == 'dark'){
    mainLogin.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
    mainBD.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
    mainHome.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
    mainReward.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
    mainAdd.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
    mainAdded.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
    mainMovie.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
        
    localStorage.theme = 'light'
  } else{
    localStorage.setItem('theme', 'light')
  }

  
}
async function darkThemeCheck(){
  var mainLogin = document.querySelector('div#mainLogin')
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainAdd = document.querySelector('div#mainAdd')
  var mainAdded = document.querySelector('div#mainAdded')
  var mainReward = document.querySelector('div#mainReward')
  var mainMovie = document.querySelector('div#mainMovie')

  if(localStorage.theme == 'dark'){
    mainLogin.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    mainBD.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    mainHome.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    mainReward.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    mainAdd.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    mainAdded.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'
    mainMovie.style.background = 'linear-gradient(-45deg, rgb(88, 115, 139), rgb(153, 131, 158))'

  } else if(localStorage.theme == 'light'){
    mainLogin.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
    mainBD.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
    mainHome.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
    mainReward.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
    mainAdd.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
    mainAdded.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'
    mainMovie.style.background = 'linear-gradient(-45deg, rgb(134, 194, 218), rgb(211, 156, 177))'

  } else{
    localStorage.setItem('theme', 'light')
  }
} darkThemeCheck()


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

      <div class='mainMovie' id='mainMovie'>
        <MoviePage/>
      </div>

      <div id='mainAdd' class='mainAdd'>
        <AddPage/>
      </div>

      <div id='mainAdded' class='mainAdded'>
        <EventsPage/>
      </div>

      <footer id='footer'>
        <div class='footerMain'>
          <button id='modeBt' class='pageNotCorrent' onClick={changeTheme}>
            <p><IoInvertModeOutline/></p>
          </button>
          <button id='rewardBt' class='pageNotCorrent' onClick={changeToMainReward}>
            <p><FaGift/></p>
          </button>
          <button id='homeBt' class='pageCorrent' onClick={changeToMainHome}>
            <p><FaHome/></p>
          </button>
          <button id='birthdayBt' class='pageNotCorrent' onClick={changeToMainBD}>
            <p><FaHeart/></p>
          </button>
          <button id='eventBt' class='pageNotCorrent' onClick={ChangetoMainAdded}>
              <p><MdEventNote/></p>
          </button>
          <button id='movieBt' class='pageNotCorrent' onClick={ChangetoMainMovie}>
              <p><MdMovie/></p>
          </button>
          <button id='logout'class='pageNotCorrent' onClick={logout}>
            <p><BiExit/></p>
          </button>
        </div>
        <button id='menu'class='pageNotCorrent' onClick={showMenu}>
            <p><BiMenu/></p>
          </button>
      </footer>
    </div>
  )}

  
  