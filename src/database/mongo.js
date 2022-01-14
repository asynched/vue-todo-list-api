import mongoose from 'mongoose'

const connectToMongo = async () => {
  await mongoose.connect(process.env.DATABASE_URL)
}

export default connectToMongo
