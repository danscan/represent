// Transform from this to GraphQL Type (graphql / relay interfaces), 
// and Waterline model for resolving GraphQL Type.
export default class Comment extends Represent.Type {
  static schema = {
    // Comment body
    body: {
      minLength: 1,
      maxLength: 140,
      required: true,
      type: 'string',
    },

    // Post the comment is to
    post: {
      type: Post,
      required: true,
    },
    
    // User who created (owns) the comment
    owner: {
      type: User,
      required: true,
    },
  }
}