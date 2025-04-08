const mongoose = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://Hiren:Hiren28@cluster0.9jzej.mongodb.net/Bookle')

        console.log('Database connected');

    } catch (err) {
        console.log(err)
        return false;
    }
}

module.exposts = db()