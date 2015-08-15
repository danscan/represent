import fs from 'fs'
import path from 'path'

export default function assertCwdIsProject() {
  const absoluteCwdPath = process.cwd()
  const absoluteCwdAppDirPath = path.join(absoluteCwdPath, '/app')
  const absoluteCwdConfigDirPath = path.join(absoluteCwdPath, '/config')

  try {
    fs.statSync(absoluteCwdAppDirPath)
    fs.statSync(absoluteCwdConfigDirPath)
  } catch (error) {
    throw new Error('This directory is NOT a Represent project!')
  }
}