import slugify from 'slugify';

export const generateCategoryUrl = (category: string): string =>
  `/category/${slugify(category.toLowerCase())}`;

export const generateTagUrl = (tag: string): string =>
  `/tag/${slugify(tag.toLowerCase())}`;
