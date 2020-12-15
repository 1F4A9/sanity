export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Recipe',
      type: 'string',
      description: 'Name of the recipe',
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
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{
        type: "reference",
        to: [{ type: "ingredient" }]
      }],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      ingredient0: 'ingredients.0.name',
      ingredient1: 'ingredients.1.name',
      ingredient2: 'ingredients.2.name',
      ingredient3: 'ingredients.3.name',
      ingredient4: 'ingredients.4.name',
      ingredient5: 'ingredients.5.name',
      ingredient6: 'ingredients.6.name',
      ingredient7: 'ingredients.7.name',
      ingredient8: 'ingredients.8.name',
    },
    prepare: ({ title, media, ...ingredients }) => {
      const ingreds = Object.values(ingredients)
        .filter(Boolean)
        .sort();

      return {
        title,
        media,
        subtitle: ingreds.join(', ')
      }
    }
  },
};
