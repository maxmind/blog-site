/* eslint-disable filenames/match-exported */
import React from 'react';

import { BaseQuery, IBaseQuery } from '../../baseQuery';

export type IPost = Omit<IBaseQuery, 'fileAbsolutePath'> & {
  FeaturedImage: React.FC;
};

export interface IHomeContext {
  featuredPost: IPost;
  newerPostsLink?: string;
  olderPostsLink?: string;
  posts: IPost[];
  skip: string;
}

const query: QueryFn<IBaseQuery & IHomeContext> = (
  graphql: GraphqlFn
) => graphql<IBaseQuery & IHomeContext>(`
  ${BaseQuery}

  query HomeTemplateQuery($skip: Int, $limit: Int) {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
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
