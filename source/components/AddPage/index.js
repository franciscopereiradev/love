import React, { useEffect, useState } from 'react'

import { supabase } from '../../utils/supabaseClient'

function AddPage(){
    const [events, setEvents] = useState([])
    const [event, setEvent] = useState({ title: "", date: ""})
    const { title, date } = event
    // const [date, setDate] = useState([])

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
    async function createEvent(){
        await supabase
        .from('events')
        .insert([
            {title, date}
        ])
        .single()
    setEvent({ title: "", date: ""})
    fetchEvents()
    }

    return(
        <div class='container'>
            <div class='circle1'></div>
            <div class='circle2'></div>
            <form class='glassBD' method='POST'>
                <h1>Nova data</h1>
                <p>Evento</p>
                <input id='event' name='event' value={title} class='loginInput' required onChange={e => setEvent({ ...event, title: e.target.value})}></input>
                <p>Data do evento</p>
                <input id='eventDate' value={date} type='date' name='eventDate' class='loginInput' required onChange={e => setEvent({ ...event, date: e.target.value})}></input>
                <button class='keyLogin' onClick={createEvent}>Guardar</button>
                
            </form>
        </div>
    )
}

export default AddPage