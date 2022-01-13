/* eslint-disable filenames/match-exported */
import { BaseQuery, IBaseQuery } from '../../baseQuery';

export type IPostPreview = Omit<IBaseQuery, 'fileAbsolutePath'> & {
  FeaturedImage: React.FC;
};

export type IPostContext = IPostPreview & {
  readonly isFeatured?: boolean;
  readonly nextPost: IPostPreview;
  readonly parent: {
    readonly modifiedTime: string;
  };
  readonly prevPost: IPostPreview;
  readonly timeToRead: number;
}

const query: QueryFn<IPostContext> = (
  graphql: GraphqlFn
) => graphql<IPostContext>(`
  ${BaseQuery}

  query PostTemplateQuery {
    allMdx(
      filter: {fields: {layout: {eq: "posts"}}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      nodes {
        ... BaseQuery
        timeToRead
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY", locale: "en-US")
          }
        }
      }
    }
  }
`);

export default query;
