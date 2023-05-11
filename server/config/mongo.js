const mongoose = require('mongoose');

const initMongoose = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('> Database connection established');
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = initMongoose