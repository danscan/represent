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

// Describe type transformations for each target
const typeTransformationMap = {
  'id': {
    'GraphQL': GraphQLID,
    'Waterline': 'string',
  },

  'string': {
    'GraphQL': GraphQLString,
    'Waterline': 'string',
  },

  'boolean': {
    'GraphQL': GraphQLBoolean,
    'Waterline': 'boolean'
  },

  'integer': {
    'GraphQL': GraphQLInt,
    'Waterline': 'integer',
  },

  'float': {
    'GraphQL': GraphQLFloat,
    'Waterline': 'float',
  },
}

export default function transformType(typeName, target) {
  const typeTransformationMapTypeNameEntry = typeTransformationMap[typeName]
  const typeTransformationMapTypeNameTargetEntry = typeTransformationMapTypeNameEntry
                                                  ? typeTransformationMapTypeNameEntry[target]
                                                  : null

  return typeTransformationMapTypeNameTargetEntry
}

// date??
// binary
// array
// json