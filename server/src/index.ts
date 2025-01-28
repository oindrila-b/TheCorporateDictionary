import * as pino from 'pino'
const logger = pino.default()

logger.info('hello world')

const child = logger.child({ a: 'property' })
child.info('hello child!')