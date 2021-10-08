// import useEvents from '../../hooks/useEvents';
// import Events from '../Events'
import { AiOutlineLoading } from 'react-icons/ai'
import React, { useState } from 'react'
import firebase from '../firebase'
import 'firebase/firestore';

function EventsPage(){
    const [event, setEvent] = useState([])
    const [loading, setLoading] = useState(true)

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
                <h1>Eventos</h1>
                <main>
                    <h1>{event.eventDate}</h1>
                    <h1>{event.events}</h1>
                </main>
            </div>
        </div>
    )
}

export default EventsPage