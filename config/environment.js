const development =  {
    name : 'development',
    port : 3000,
    databaseURL :'mongodb://localhost/ToDoList',

}
const production = {
    name : 'production',
    port : process.env.PORT,
    databaseURL : process.env.MongoURL,

}

module.exports = eval(process.env.PORT)== undefined ? development: production;