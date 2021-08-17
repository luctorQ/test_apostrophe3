module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Parameter',
    pluralLabeL: 'Parameters'
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Title",
        required: true
      },
      _products: {
        label: 'Products',
        type: 'relationship',
        withType: 'product'
      },
      //with additional relationship zonetype and relationshipReverse on product TypeError: fn is not a function thrown
    _zonetypes: {
        label: 'Zone Types',
        type: 'relationship',
        withType: 'zonetype'
      }

    },
    group: {
      basics: {
        label: 'Basics',
        fields: ['title', '_products']
      }
    }
  }
};
