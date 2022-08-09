module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        breed: {
          field: 'slug',
          references: 'name',
        },
      },
    },
  },
  // ...
});