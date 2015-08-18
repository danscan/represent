const {
  connectionFromType,
} = Represent

export default class Like extends Represent.Type {
  static schema = {
    // The user who created (owns) the like
    owner: connectionFromType('User'),

    // The post the like is to
    post: connectionFromType('Post'),
  }

  static typeName = 'Like'
}
