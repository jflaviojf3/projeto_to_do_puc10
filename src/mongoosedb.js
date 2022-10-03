const mongoose = require ("mongoose");

const user = "admin";
const pass = "atusEncP7dmz1MAN";
const database = "todo_sample";
const serverName = "cluster0.qibarob.mongodb.net";

module.exports = {
    init: ()=>{
        mongoose.connect(
            `mongodb+srv://${user}:${pass}@${serverName}/?retryWrites=true&w=majority`, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                autoIndex: true,
            }
        )
        .then((res) => console.log(`Conncetion Succesful ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    },
}