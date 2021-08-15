async function executeFunction(){

    const Database = ('sqlite-async')
    
    function execute(db) {

        return db.exec(`
        CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            event TEXT,
            date TEXT
            );
            `)
        }
        
    module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
} executeFunction()