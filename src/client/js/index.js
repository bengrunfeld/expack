import logMessage from './logger'
import './../css/style.css'

// Log message to console
logMessage('Its finished!!')

/*eslint-env node*/
if (module.hot) {
    module.hot.accept()
}
