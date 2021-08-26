import { useEffect, useRef } from 'react'

function Events ({ events }) {
    const ref = useRef(null)
  
    useEffect(() => {
      ref.current.scrollTop = ref.current.scrollHeight
    }, [events])
  
    return <div className="Events" ref={ref}>
      {
        events.map(event =>{
          return <div key={event.key} className={`Events ${eventsClass}`}>
            <div className={eventClass}>
  
              <span>
                { event.event }
              </span>
            </div>
          </div>
  
        })
      }
    </div>
  }
  
  export default Events