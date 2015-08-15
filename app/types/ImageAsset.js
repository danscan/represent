class ImageAsset extends Represent.Type {
  static schema = {
    // The image asset uri
    uri: { 
      type: 'string',
      required: true,
    },

    // The image asset width
    width: {
      type: 'integer',
      required: true,
    },

    // The image asset height
    height: {
      type: 'integer',
      required: true,
    },
  }

  static typeName = 'ImageAsset'
}
