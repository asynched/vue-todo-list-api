import express from 'express'

import './config/aliases'
import './config/environment'

import router from '@/routes'
import connectToMongo from '@/database/mongo'
import startApp from '@/lib/startup'

const app = express()
const port = process.env.APPLICATION_PORT

app.use(express.json())
app.use('/', router)

startApp(app, port, connectToMongo)
