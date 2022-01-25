/* eslint-disable filenames/match-exported */
import React from 'react';

import { BaseQuery, IBaseQuery } from '../../baseQuery';

export type IPost = Omit<IBaseQuery, 'fileAbsolutePath'> & {
  FeaturedImage: React.FC;
};

export interface ITagContext {
  category: string;
  newerPostsPath?: string;
  olderPostsPath?: string;
  posts: IPost[];
  skip: string;
  tag: string;
}

const query: QueryFn<IBaseQuery & ITagContext> = (
  graphql: GraphqlFn
) => graphql<IBaseQuery & ITagContext>(`
  ${BaseQuery}

  query CategoryTemplateQuery($skip: Int, $limit: Int) {
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
