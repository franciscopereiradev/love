
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firebase } from '../firebase';
import 'firebase/firestore'
const db = firebase.firestore()

function useEvents () {
  const [events, setEvents] = useState([])
  const [eventsCollection, loadingEvents, error] = useCollection(
    db.collection('events')
      .orderBy('created', 'desc')
      .limit(500)
  )

  useEffect(() => {
    const newEvents = eventsCollection?.docs
      .map(doc => ({
        ...doc.data(),
        key: doc.id
      })).reverse() || []

    setEvents(newEvents)
  }, [eventsCollection])

  return {
    events,
    loadingEvents,
    error
  }
}

export default useEvents