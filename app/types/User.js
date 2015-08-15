const {
  connectionFromType,
} = Represent

class User extends Represent.Type {
  static schema = {
    // The user's avatar image
    avatar: {
      type: ImageAsset,
    },

    // The likes from the user
    likes: connectionFromType(Like),

    // The user's friends (users the user follows)
    friends: connectionFromType(User),

    // The users who follow the user
    followers: connectionFromType(User),

    // Ther user's name
    name: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 65,
    },

    // The user's phone number
    phone: {
      type: 'string',
      required: true,
      minLength: 8,
      maxLength: '15',
    },

    // The posts from the user
    posts: connectionFromType(Post),
  }

  static typeName = 'User'
}
