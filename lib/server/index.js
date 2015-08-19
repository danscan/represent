import Represent from '../'

/* -
 * Init Server
 * - */
console.log('Initializing represent server...')
import express from 'express'

const port = process.env['PORT'] || 8000
const app = express()

/* -
 * Bootstrap Type Interfaces
 * - */
console.log('Booting type interfaces...')
import restInterface from './interfaces/rest'
import relayInterface from './interfaces/relay'
import loadTypes from './utils/loadTypes'
const types = loadTypes()

// loadInterfaces(types, app)(
//   restInterface,
//   relayInterface,
// )
restInterface(types, app)
relayInterface(types, app)

/* -
 * Listen with Server
 * - */
console.log(`Attempting to listen on port ${port}...`)
import banner from '../assets/banner'
app.listen(port, error => {
  if (error) {
    return console.error(error)
  }

  console.log(banner)
  console.log(`Now listening on port ${port}.`)
})

export default app