#!/usr/bin/env node
import Vantage from 'vantage'

// Assert process.cwd() is a project before continuing
import assertCwdIsProject from './utils/assertCwdIsProject'
assertCwdIsProject()

// Utils
import createFileFromTemplate from './utils/createFileFromTemplate'

// Templates
import typeTemplate from './templates/type'

// Log banner locally on start
import banner from './assets/banner'
console.log(banner)

// Interactive CLI & Server
const vantage = Vantage()
  .delimiter('∫>')
  .banner(banner)
  // !!!: Don't need this yet.
  // .listen(8000)
  .show()

/* -
 * Command Definitions
 * - */

/**
 * Init Project
 */
vantage
  .command('init [project]')
  .description('Creates a new represent project.')
  .action(args => {
    console.log('Init project:', args.project)
    return Promise.resolve(args.project)
  })

/**
 * Add Type
 */
vantage
  .command('add type [type]')
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