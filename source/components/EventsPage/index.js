// import useEvents from '../../hooks/useEvents';
// import Events from '../Events'
import { AiOutlineLoading } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import React, { useState } from 'react'
import firebase from '../firebase'
import 'firebase/firestore';

async function ChangetoMainAdd(){
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
    buttonReward.setAttribute('class', 'pageNotCorrent')
    mainBD.setAttribute('class', 'mainBirthday')
    mainHome.setAttribute('class', 'mainHome')
    mainReward.setAttribute('class', 'mainReward')
    mainAdd.setAttribute('class', 'mainCorrent')
    mainAdded.setAttribute('class', 'mainAdded')
}
  

function EventsPage(){
    const [event, setEvent] = useState([])
    const [loading, setLoading] = useState(false)

    // const ref = firebase.firestore().collection('events')

    if(loading){
        return(  
            <div class='container'>
                <div class='circle1'></div>
                <div class='circle2'></div>
                <div class='glassBD'>
                    <h1>Eventos</h1>
                    <main>
                        <div class='loading'></div>
                    </main>
                </div>
            </div>
        )
    }

    return(  
        <div class='container'>
            <div class='circle1'></div>
            <div class='circle2'></div>
            <div class='glassBD'>
                <h2>Eventos</h2>
                <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <p>Ainda não tens nenhum evento!</p>
                    <button id='addMore' class='pageNotCorrent' onClick={ChangetoMainAdd}>
                        <p><FaPlus/></p>
                    </button>
                </main>
            </div>
        </div>
    )
}

export default EventsPage