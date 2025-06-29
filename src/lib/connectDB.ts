'use server'

// Import the mongoose library
import mongoose from "mongoose"

// Define the MongoDB connection string
const DATABASE_URL = process.env.DATABASE_URL || ''

if (!DATABASE_URL) {
  throw new Error(
    'Please define the MONGODB_URL environment variable inside .env.local'
  );
}

// Define a global variable to cache the connection
// @ts-ignore
let cached = global.mongoose

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose) => {
      return mongoose
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
