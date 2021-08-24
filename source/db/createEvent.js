module.exports = async function(db, { eventValue }) {
    // inserir dados na table de proffys
    const insertedEvent = await db.run(`
        INSERT INTO eventos (
            event,
            eventDate
        ) VALUES (
            "${eventValue.event}",
            "${eventValue.eventDate}"
        );
    `)

    return(insertedEvent)
    // Evento.sync({force: true})
}