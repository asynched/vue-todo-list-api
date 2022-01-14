import mongoose from 'mongoose'

/**
 * Connects to the Mongo databse
 */
const connectToMongo = async () => {
  await mongoose.connect(process.env.DATABASE_URL)
}

export default connectToMongo
