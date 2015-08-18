#!/usr/bin/env node
import Vantage from 'vantage'
import banner from '../lib/assets/banner'
import server from '../lib/server'

// Assert process.cwd() is a project before continuing
import assertCwdIsProject from '../lib/server/utils/assertCwdIsProject'
assertCwdIsProject()

// Utils
import createFileFromTemplate from './utils/createFileFromTemplate'

// Templates
import typeTemplate from './templates/type'

// Interactive CLI & Server
const port = process.env['PORT'] || 8000
const vantage = Vantage()
  .delimiter('∫>')
  .banner(banner)
  // .listen(server, port)
  .show()

/* -
 * Command Definitions
 * - */

/**
 * Init Project
 */
vantage
  .command('init <project>')
  .description('Creates a new represent project.')
  .action(args => {
    console.log('Init project:', args.project)
    return Promise.resolve(args.project)
  })

/**
 * Add Type
 */
vantage
  .command('add type <type>')
  .description('Adds a new type.')
  .action(args => {
    return createFileFromTemplate(args, typeTemplate)
      .then(
        () => console.log(`Added type "${args.type}"`)
      )
  })

/**
 * TODO: Add Route
 */