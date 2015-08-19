import _ from 'underscore'
// FIXME: Move GraphQL types to a type transformations util...?
import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql'
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay'
import graphQLHTTP from 'express-graphql'

// FIXME: Make middleware?  Pure isn't possible with express...
export default function relayInterface(types, app) {
  // TODO: Create node interface & field definitions for mapping to all types...
  console.log('TODO: Create node interface & field definitions for mapping to all types...')
  // const { nodeInterface, nodeField } = nodeDefinitions(
  //   (globalId) => {
  //     var { type, id } = fromGlobalId(globalId)
  //     if (type === 'User') {
  //       return getUser(id)
  //     } else if (type === 'Widget') {
  //       return getWidget(id)
  //     } else {
  //       return null
  //     }
  //   },
  //   (obj) => {
  //     if (obj instanceof User) {
  //       return userType
  //     } else if (obj instanceof Widget)  {
  //       return widgetType
  //     } else {
  //       return null
  //     }
  //   }
  // )

  _.each(types, Type => {
    // TODO: Create GraphQL type / relay interface for Type...
    console.log('TODO: create GraphQL type / relay interface for Type:', Type)
  })

  // const queryType = new GraphQLObjectType({
  //   name: 'Query',
  //   fields: () => ({
  //     // TODO: Create root query type...
  //   }),
  // })

  // const mutationType = new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: () => ({
  //     // TODO: Create root mutation type...
  //   }),
  // });

  // const Schema = new GraphQLSchema({
  //   query: queryType,
  //   mutation: mutationType,
  // })

  // // Use schema at graphql endpoint
  // app.use('/graphql', graphQLHTTP({
  //   schema: Schema, 
  //   pretty: true,
  // }))
}