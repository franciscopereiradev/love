// import useEvents from '../../hooks/useEvents';
// import Events from '../Events'
import { supabase } from '../../utils/supabaseClient'
import { AiOutlineLoading } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'

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
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(false)
    const [event, setEvent] = useState({ title: "", date: ""})
    const { title, date } = event

    useEffect(() => {
        fetchEvents()
    }, [])

    async function fetchEvents(){
        const { data } = await supabase
        .from('events')
        .select()
    setEvents(data)
    console.log("data: ", data)
    }

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
        <div class='container2'>
            <div class='circle1'></div>
            <div class='circle2'></div>
            <div class='glassBD'>
                <h2>Eventos</h2>
                {
                    events.map(event =>(
                        <div class='achievements'>
                        <div class='list'>
                            <li key={event.id} class='listItem'>
                                <h2 class="item">{event.title}</h2>
                                <p class='date'>{event.date}</p>
                            </li>
                        </div>
                        </div>
                    ))
                    
                }               
                    <button id='addMore' class='pageNotCorrent' onClick={ChangetoMainAdd}>
                        <p><FaPlus/></p>
                    </button>
            </div>
        </div>
    )
}

export default EventsPage