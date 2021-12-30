import { ImageDataLike } from 'gatsby-plugin-image';
export interface IBaseQuery {
  excerpt: string;
  fields: {
    slug: string;
  };
  fileAbsolutePath: string,
  frontmatter: {
    author?: string;
    categories?: [];
    date: string;
    description: string;
    draft: boolean;
    featuredImage?: {
      publicURL: string;
    };
    keywords: string[];
    tags: string[];
    title: string;
  },
  timeToRead: number;
}

export const BaseQuery = `
  fragment BaseQuery on Mdx {
    fields {
      slug
    }
    fileAbsolutePath
    frontmatter {
      author
      categories
      date
      description
      draft
      featuredImage {
        publicURL
      }
      keywords
      tags
      title
    }
    timeToRead
  }
`;
