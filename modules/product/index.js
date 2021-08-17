module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Product',
    pluralLabeL: 'Products'
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Title",
        required: true
      },
      _parameters: {
        type: 'relationshipReverse',
        withType: 'parameter',
        reverseOf: '_products',
        // builders: {
        //   project: {
        //     title: 1,
        //     _url: 1,
        //     _zonetypes: 1
        //   }
        // }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: ['title']
      }
    }
  }
};
