import mongoose from 'mongoose';
export const connectDB = async()=> {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDb Connected')
    } catch(err) {
        console.error('❌ MongoDb Connection error: ', err.message);
        process.exit(1);
    }
};
