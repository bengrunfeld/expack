import logger from 'winston'

// simply export Winston's default logger here.
// to expand on this, read Winston's manual for creating a better logger.

logger.add(new logger.transports.Console())

export { logger as default }
