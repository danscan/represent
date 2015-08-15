#!/usr/bin/env node
import Vantage from 'vantage'
import fs from 'fs'

// Log banner locally on start
import banner from './.assets/banner'
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
    console.log('Add type:', args.type)
    return Promise.resolve(args.type)
  })

/**
 * Add Schema
 */
vantage
  .command('add schema [schema]')
  .description('Adds a new schema.')
  .action(args => {
    console.log('Add schema:', args.schema)
    return Promise.resolve(args.schema)
  })

/**
 * Add Component
 */
vantage
  .command('add component [component]')
  .description('Adds a new component.')
  .action(args => {
    console.log('Add component:', args.component)
    return Promise.resolve(args.component)
  })