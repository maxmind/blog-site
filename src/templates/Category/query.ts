/* eslint-disable filenames/match-exported */
import React from 'react';

import { BaseQuery, IBaseQuery } from '../../baseQuery';

export type IPost = Omit<IBaseQuery, 'fileAbsolutePath'> & {
  FeaturedImage: React.FC;
};

export interface ICategoryContext {
  category: string;
  newerPostsPath?: string;
  olderPostsPath?: string;
  posts: IPost[];
  skip: string;
  tag: string;
}

const query: QueryFn<IBaseQuery & ICategoryContext> = (
  graphql: GraphqlFn
) => graphql<IBaseQuery & ICategoryContext>(`
  ${BaseQuery}

  query CategoryTemplateQuery($category: String, $skip: Int, $limit: Int) {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: { categories: { eq: $category } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        ... BaseQuery
        excerpt(pruneLength: 200)
      }
    }
  }
`);

export default query;
