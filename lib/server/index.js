import _ from 'underscore'
import Represent from '../'

/* -
 * Load Server
 * - */
console.log('Loading represent server...')
import express from 'express'
import banner from '../assets/banner'

const port = process.env['PORT'] || 8000
const app = express()

/* -
 * Bootstrap Type Interfaces
 * - */
console.log('Booting type interfaces...')
import loadTypes from './utils/loadTypes'
const types = loadTypes()

let schemas = {}
_.each(types, Type => {
  schemas[Type.typeName] = Type.schema

  // Get Schemas
  app.get(`/_schemas/${Type.typeName}`, (req, res) => res.json(Type.schema))

  // Get Typed Resources
  app.get(`/${Type.resourceIdentity}`, (req, res) => res.send(`[Resourceful REST interface to ${Type.typeName} type]`))
})
app.get('/_schemas', (req, res) => res.json(schemas))

/* -
 * Listen with Server
 * - */
console.log(`Attempting to listen on port ${port}...`)
app.listen(port, error => {
  if (error) {
    return console.error(error)
  }

  console.log(banner)
  console.log(`Now listening on port ${port}.`)
})

export default app