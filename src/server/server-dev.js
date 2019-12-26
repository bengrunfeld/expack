import dotenv from 'dotenv'
dotenv.config({ path: './config.env' })

import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'

import app from './app'
import logger from './util/logger'

const DIST_DIR = path.join(__dirname, '../client/')
const HTML_FILE = path.join(DIST_DIR, 'index.html')
const compiler = webpack(config)

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
)

app.use(webpackHotMiddleware(compiler))

// changed route from '*' to '/' to serve static files
// ONLY on the root
// this allows to add other express routes much easier
// when developing from the boilerplate
app.get('/', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        if (err) {
            return next(err)
        }
        res.set('content-type', 'text/html')
        res.send(result)
        res.end()
    })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    logger.info(`App listening to ${PORT}....`)
    logger.info('Press Ctrl+C to quit.')

    logger.info(`Port = ${process.env.PORT}`)
    logger.info(`NODE_ENV = ${process.env.NODE_ENV}`)
})
