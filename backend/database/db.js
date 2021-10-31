import mongoose from 'mongoose'

const URL = 'mongodb://localhost:27017/shopeasy?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

const connection = async () => {
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }

};

export default connection;