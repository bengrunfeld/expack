import dotenv from 'dotenv'
dotenv.config({ path: './config.env' })

import path from 'path'
import express from 'express'

import app from './app'
import logger from './util/logger'

const DIST_DIR = path.join(__dirname, '../client/')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

// changed route from '*' to '/' to serve static files
// ONLY on the root
// this allows to add other express routes much easier
// when developing from the boilerplate
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    logger.info(`App listening to ${PORT}....`)
    logger.info('Press Ctrl+C to quit.')

    logger.info(`Port = ${process.env.PORT}`)
    logger.info(`NODE_ENV = ${process.env.NODE_ENV}`)
})
