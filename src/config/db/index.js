const mongoose = require('mongoose');
async function connect() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure');
    }
}
module.exports = { connect };
