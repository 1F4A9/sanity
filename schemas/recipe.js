export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Recipe',
      type: 'string',
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Ingredients',
      name: 'ingredients',
      type: 'array',
      of: [{
        type: "reference",
        to: [{ type: "ingredients" }],
      }],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
};
