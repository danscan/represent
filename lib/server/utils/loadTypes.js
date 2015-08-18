import path from 'path'
import _ from 'underscore'
import requireDirectory from 'require-directory'

export default function loadTypes() {
  const currentWorkingDirectory = process.cwd()
  const typesDirectoryPath = path.join(currentWorkingDirectory, '/app/types')
  const types = requireDirectory(module, typesDirectoryPath)

  return _.map(types, transformTypeClass)
}

// Private Helpers
import Inflect from 'i'
const inflect = Inflect()
function transformTypeClass(Type) {
  const camelCasedTypeName = inflect.camelize(Type.typeName, false)
  const plurallyInflectedCamelCasedTypeName = inflect.pluralize(camelCasedTypeName)

  Type.resourceIdentity = plurallyInflectedCamelCasedTypeName

  return Type
}