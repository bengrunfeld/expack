import express from 'express'

// set up the app as an express object
const app = express()
app.use(express.json()) // automatic JSON <--> object processing

//
// MOUNT ROUTERS
//

export { app as default }
