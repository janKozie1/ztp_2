const mongoose = require('mongoose')

// db.createUser({ user : "ztp_2", pwd : "ztp_2", roles: [{role: "readWrite", db: "ztp_2"}, {role: "dbAdmin", db: "ztp_2"}]})
const init = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/ztp_2');
        return connection;
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    init
}