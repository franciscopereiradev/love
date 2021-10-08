import React, { useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';


function AddPage(){
    const [event, setEvent] = useState([])
    const [date, setDate] = useState([])

    // const ref = firebase.firestore().collection('events')

    return(
        <div class='container'>
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
    )
}

export default AddPage