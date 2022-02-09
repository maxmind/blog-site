export interface IBaseQuery {
  excerpt: string;
  fields: {
    slug: string;
  };
  fileAbsolutePath: string,
  frontmatter: {
    authors?: string[];
    categories?: string[];
    date: string;
    description: string;
    draft: boolean;
    featuredImage?: {
      publicURL: string;
    };
    isFeatured?: boolean;
    keywords: string[];
    tags?: string[];
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
      authors
      categories
      date
      description
      draft
      featuredImage {
        publicURL
      }
      isFeatured
      keywords
      tags
      title
    }
    timeToRead
  }
`;
