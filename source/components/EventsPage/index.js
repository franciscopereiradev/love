import useEvents from '../../hooks/useEvents';
import Events from '../Events'

function EventsPage(){
    const { events } = useEvents()

    return(  
        <div class='container'>
            <div class='circle1'></div>
            <div class='circle2'></div>
            <div class='glassBD'>
                <h1>Eventos</h1>
                <main>
                <Events events={events}></Events>
                </main>
            </div>
        </div>
)}

export default EventsPage