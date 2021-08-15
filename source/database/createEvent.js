module.exports = async function(db, { eventValue }) {
    const insertedEvent = await db.run(`
        INSERT INTO events (
            event,
            date
        ) VALUES (
            "${eventsValue.event}",
            "${eventsValue.date}"
        );
    `)

    const event_id = insetedEvent.lastID

    await Promise.all(eventsValue)
}