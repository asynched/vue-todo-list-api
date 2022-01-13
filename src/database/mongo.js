import mongoose from 'mongoose'

const connectToMongo = async () => {
  console.log(process.env.DATABASE_URL)
  await mongoose.connect(process.env.DATABASE_URL)
}

export default connectToMongo
