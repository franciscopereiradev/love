import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

function indisponivel(){
    alert('Temporariamente indisponivel!')
}

function MoviePage(){
    const [event, setEvent] = useState([])
    const [loading, setLoading] = useState(false)

    // const ref = firebase.firestore().collection('events')

    if(loading){
        return(  
            <div class='container'>
                <div class='circle1'></div>
                <div class='circle2'></div>
                <div class='glassBD'>
                    <h1>Filmes e series</h1>
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
                <h1>Filmes e series</h1>
                <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2>Ainda não tens nenhum filme ou serie!</h2>
                    <button id='addMore' class='pageNotCorrent' onClick={indisponivel}>
                        <p><FaPlus/></p>
                    </button>
                </main>
            </div>
        </div>
    )
}

export default MoviePage