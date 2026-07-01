import mongoose from 'mongoose'

const MONGODB_URL = process.env.MONGOBD_URL as string ;

if(!MONGODB_URL){
    throw new Error("MongoDB url string missing! Please define the mongoDB Url")
}

//! loading performation vlo hoer janno ai code 

const cached = (global as any).mongoose || {conn:null, promise:null} ;

export async function connectDB(){
    if(cached.conn) return cached.conn ;

    if(!cached.promise){
        cached.promise = mongoose.connect(MONGODB_URL,{
            bufferCommands: false 
        }).then((mongoose) => mongoose)
    }

    cached.conn = await cached.promise ; 
    (global as any).mongoose = cached ;
    return cached.conn ;
}
