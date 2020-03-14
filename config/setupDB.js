const mongoose = require('mongoose')

const setupDB = () => {
    mongoose.connect('mongodb://localhost:27017/twitter-api-for-peppercloud', { useNewUrlParser: true , useUnifiedTopology : true})
        .then(() => console.log('connnected with the database'))
        .catch(err => console.log(err))
}

module.exports = setupDB