import Interface from './classes/Interface'
import Type from './classes/Type'
import Route from './classes/Route'

const Represent = {
  connectionFromType: Type => ({ connection: { type: Type } }),
  listConnectionFromType: Type => ({ listConnection: { type: Type } }),

  Interface,
  Type,
  Route,
}

// Create convenience global for library access
GLOBAL.Represent = Represent

export default Represent