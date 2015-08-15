import fs from 'fs'
import path from 'path'

export default function createFileFromTemplate(args, template) {
  const templateResult = template(args)

  const absoluteCwdPath = process.cwd()
  const absoluteFileLocationPath = path.join(absoluteCwdPath, templateResult.location)

  return new Promise((resolve, reject) => {
    fs.writeFile(absoluteFileLocationPath, templateResult.contents, (error) => {
      if (error)
        return reject(error)
      return resolve()
    })
  })
}