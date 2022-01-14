import express from 'express'
import cors from 'cors'

import './config/aliases'
import './config/environment'

import router from '@/routes'
import connectToMongo from '@/database/mongo'
import addDocsEndpoint from '@/lib/docs'
import startApp from '@/lib/startup'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/api', router)

addDocsEndpoint(app)
startApp(app, port, connectToMongo)
