import { CreateSchemaCustomizationArgs, GatsbyNode } from 'gatsby';

// eslint-disable-next-line max-len
export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = (
  args: CreateSchemaCustomizationArgs,
) => {
  const { createTypes } = args.actions;

  const typeDefs = `
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      author: String
      draft: Boolean
      categories: [String!]
      description: String
      keywords: [String!]
      isFeatured: Boolean
      tags: [String!]
      title: String!
    }
  `;

  createTypes(typeDefs);
};
