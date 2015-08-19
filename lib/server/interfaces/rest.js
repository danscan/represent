import _ from 'underscore'

// FIXME: Make middleware?  Pure isn't possible with express...
export default function restInterface(types, app) {
  let schema = {}

  _.each(types, Type => {
    schema[Type.typeName] = Type.schema

    // Get Schema Fragment
    app.get(`/_schema/${Type.typeName}`, (req, res) => res.json(Type.schema))

    // Get Typed Resources
    app.get(`/${Type.resourceIdentity}`, (req, res) => res.send(`[Resourceful REST interface to ${Type.typeName} type]`))
  })

  // Get Schema
  app.get('/_schema', (req, res) => res.json(schema))
}