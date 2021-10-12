import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdDone, MdDoneAll } from 'react-icons/md'

function indisponivel(){
    alert('Temporariamente indisponível!')
}

function MoviePage(){
    const [event, setEvent] = useState([])
    const [loading, setLoading] = useState(false)

    // const ref = firebase.firestore().collection('events')

    if(loading){
        return(  
            <div class='containerMovies'>
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
        <div class='container2'>
            <div class='circle1'></div>
            <div class='circle2'></div>
            <div class='glassBD'>
                {/* <h2>Filmes e series</h2> */}
                    {/* <button id='addMore' class='pageNotCorrent' onClick={indisponivel}>
                        <p><FaPlus/></p>
                    </button> */}
                <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p>Filmes</p>
                    <section class='movies'>
                        <div class='cardRow'>
                            <div class='movieCard'></div>
                            <div class='movieCard'></div>
                        </div>
                        <div class='cardRow'>
                            <div class='movieCard'></div>
                            <div class='movieCard'></div>
                        </div>
                    </section>
                        <p>Series</p>
                    <section class='series'>
                        <div class='cardRow'>
                            <div class='serieCard'>
                                <h2 class='cardTitle'>How I met your mother</h2>
                                <p class='cardNext'>Proximo Episodio:</p>
                                <p class='cardEp'>T: x Ep: y</p>
                                <div class='cardFooter'>
                                    <button class='cardBtn'>
                                        <MdDone/> 
                                    </button>
                                    <button class='cardBtn'>
                                        <MdDoneAll/> 
                                    </button>
                                </div>
                            </div>
                            <div class='serieCard'>
                                <h2 class='cardTitle'>You</h2>
                                <p class='cardNext'>Proximo Episodio:</p>
                                <p class='cardEp'>T: x Ep: y</p>
                                <div class='cardFooter'>
                                    <button class='cardBtn'>
                                        <MdDone/> 
                                    </button>
                                    <button class='cardBtn'>
                                        <MdDoneAll/> 
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class='cardRow'>
                            <div class='serieCard'>
                                <h2 class='cardTitle'>Elite</h2>
                                <p class='cardNext'>Proximo Episodio:</p>
                                <p class='cardEp'>T: x Ep: y</p>
                                <div class='cardFooter'>
                                    <button class='cardBtn'>
                                        <MdDone/> 
                                    </button>
                                    <button class='cardBtn'>
                                        <MdDoneAll/> 
                                    </button>
                                </div>
                            </div>
                            <div class='serieCard'>
                                <h2 class='cardTitle'>La casa de papel</h2>
                                <p class='cardNext'>Proximo Episodio:</p>
                                <p class='cardEp'>T: x Ep: y</p>
                                <div class='cardFooter'>
                                    <button class='cardBtn'>
                                        <MdDone/> 
                                    </button>
                                    <button class='cardBtn'>
                                        <MdDoneAll/> 
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class='cardRow'>
                            <div class='serieCard'>
                                <h2 class='cardTitle'>Stranger things</h2>
                                <p class='cardNext'>Proximo Episodio:</p>
                                <p class='cardEp'>T: x Ep: y</p>
                                <div class='cardFooter'>
                                    <button class='cardBtn'>
                                        <MdDone/> 
                                    </button>
                                    <button class='cardBtn'>
                                        <MdDoneAll/> 
                                    </button>
                                </div>
                            </div>
                            <div class='serieCard'>
                                <h2 class='cardTitle'>Outer banks</h2>
                                <p class='cardNext'>Proximo Episodio:</p>
                                <p class='cardEp'>T: x Ep: y</p>
                                <div class='cardFooter'>
                                    <button class='cardBtn'>
                                        <MdDone/> 
                                    </button>
                                    <button class='cardBtn'>
                                        <MdDoneAll/> 
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class='cardRow'>
                            <div class='serieCard'>
                                <h2 class='cardTitle'>9-1-1</h2>
                                <p class='cardNext'>Proximo Episodio:</p>
                                <p class='cardEp'>T: 5 Ep: 4</p>
                                <div class='cardFooter'>
                                    <button class='cardBtn'>
                                        <MdDone/> 
                                    </button>
                                    <button class='cardBtn'>
                                        <MdDoneAll/> 
                                    </button>
                                </div>
                            </div>
                            <div class='serieCard'>
                                <h2 class='cardTitle'>Modern Family</h2>
                                <p class='cardNext'>Proximo Episodio:</p>
                                <p class='cardEp'>T: x Ep: y</p>
                                <div class='cardFooter'>
                                    <button class='cardBtn'>
                                        <MdDone/> 
                                    </button>
                                    <button class='cardBtn'>
                                        <MdDoneAll/> 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default MoviePage