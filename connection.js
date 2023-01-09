const mongoose = require('mongoose')

//Config
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/ProjetoMongo', {

    useNewUrlParser: true

}).then(() => {

    console.log('Conectado ao Mongo')

}).catch((erro) => {

    console.log('Erro ao se conectar no banco: ' + erro)

})

const UserSchema = mongoose.Schema({

    name: {

        type: String

    },
    last_name: {

        type: String

    },
    email: {

        type: String

    },
    age: {

        type: Number

    },
    country: {

        type: String

    }

})

//config model

mongoose.model('users', UserSchema)


const User = mongoose.model('users')

new User({

    name: 'Gilmar',
    last_name: 'Júnior',
    email: 'gilmarjr@email.com',
    age: 20,
    country: 'Brasil'

}).save().then(() => {

    console.log("User created successfully");

}).catch((err) => {

    console.log("Error: " + err)

})