const Database = require('./db')
const createEvent = require('./createEvent')


Database.then(async (db) => {
    // Inserir dados
    eventValue = {
        event: "Diego Fernandes", 
        eventDate: '1999-01-01' 
    }

    const selectedEvents = await db.all("SELECT * FROM eventos")
    console.log(selectedEvents)
    await createEvent(db, {eventValue})

})