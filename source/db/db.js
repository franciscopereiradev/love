const Database = require('sqlite-async')

function execute(db) {
    // criar as tabelas do banco de dados.
    return db.exec(`
        CREATE TABLE IF NOT EXISTS eventos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            event TEXT,
            eventDate TEXT
        );
    `)
}
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)