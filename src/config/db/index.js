// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb+srv://hotanphat123:832414@cluster.wgko2oa.mongodb.net/f8_education_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log('Connect successfully!!!')

    } catch (error) {
        console.log('Connect failure!!!')
    }

}
module.exports = { connect };