export default args => {
  const { type } = args

  return {
    location: `app/types/${type}.js`,
    contents: (
`export default class ${type} extends Represent.Type {
  static schema = {
    // Define your schema here...
  }

  static typeName = '${type}'
}
`
    )
  }
}