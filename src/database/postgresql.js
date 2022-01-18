const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'RUC',
    password: 'admin',
    port: 5432
});

// client.connect(function(err){
//     if(err) throw err;
//     console.log("Connected!")
// })

module.exports = userDemo = async () => {

    await client.connect();
    const now = await client.query("SELECT NOW()");
    await client.end();

    return now;
}
