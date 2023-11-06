
const mongoose = require('mongoose');

const connection = async (userName,password) =>{

    const URL ='mongodb+srv://deepak:deepak@cluster0.xdnvhh0.mongodb.net/?retryWrites=true&w=majority'
    console.log("Database connected successfully");
    try {

     await   mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})
        
    } catch (error) {
        console.log('Error while connecting the database',error);
    }
}

module.exports = connection