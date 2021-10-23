import { supabase } from '../source/utils/supabaseClient'
import React, { useEffect, useState } from 'react'

export default function chatPage(){
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState({text: ''})
    const { text } = message

    useEffect(() => {
        fetchMessages()
    }, [])

    async function fetchMessages(){
        const { data } = await supabase
        .from('messages')
        .select()
    setMessages(data)
    console.log("data: ", data)
    window.scroll(0, 1000000000000)
    }

    async function createMessage(){
        await supabase
        .from('messages')
        .insert([
            {text}
        ])
        .single()
    setMessage({text: ""})
    fetchMessages()
    }

    // async function deleteMessage() {
    //         await supabase
    //         .from('messages')
    //         .delete()
    //         // .single()
    //         setMessage({text: null})
    //         fetchMessages()
    // }

    let updatePage = setTimeout(async function fetchMessages(){
        const { data } = await supabase
        .from('messages')
        .select()
    setMessages(data)
    console.log("data: ", data)
    }, 200)

    
    return(
        <div>
            <div class='pageLanding'>
            <title>LoveYou ❤</title>
            <div class='container2' >
            <div class='circle1'></div>
            <div class='circle2'></div>
                <div class='glass' style={{marginBottom: '120px', overflow: 'end'}}>
                <h1>Chat</h1>
                {
                    messages.map(message =>(
                        <div class='achievements'>
                        <div class='list'>
                            <li key={message.id} class='listItem'>
                                <h2 class="item">{message.text}</h2>
                                <p class='date'>{message.time}</p>
                                {/* <button onClick={deleteMessage}>Eliminar</button> */}
                            </li>
                        </div>
                        </div>
                    ))
                    
                }
                </div>
                <div style={{position: 'fixed', margin: '0', bottom: '0px', display: 'flex',alignItems: 'center',justifyContent: 'center', width: '100vw', height: '100px', background: 'rgba(0,0,0,0.2'}}>
                    <input value={text} id='text' name='text' class='loginInput' required onChange={e => setMessage({ ...message, text: e.target.value})}></input>
                    <button class='keyLogin' style={{width: '120px'}} onClick={createMessage}>Enviar</button>   
                </div>
            </div>
            </div>
        </div>
    )
}