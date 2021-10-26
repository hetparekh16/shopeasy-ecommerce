import mongoose from 'mongoose'


const connection = () => {
    const URL = 'mongodb://localhost:27017/shopeasy?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
    mongoose.connect(URL, () => {
        console.log("Database Connected Successfully");
    })
}

export default connection;