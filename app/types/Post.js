const {
  connectionFromType,
} = Represent

export default class Post extends Represent.Type {
  static schema = {
    // The post body (text)
    body: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 140,
    },

    // The likes to the post (? should be a list connection?)
    likes: connectionFromType('Like'),

    // The user who created (owns) the post
    owner: connectionFromType('User'),

    // The post the post is to (in the case of a reply)
    post: connectionFromType('Post'),
  }

  static typeName = 'Post'
}
