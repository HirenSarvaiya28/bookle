const mongoose = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect(`${process.env.Mongo_URL}`)

        console.log('Database connected');

    } catch (err) {
        console.log(err)
        return false;
    }
}

module.exposts = db()