/* eslint-disable filenames/match-exported */
import fs from 'fs';
import { Actions, CreatePagesArgs } from 'gatsby';
import path from 'path';

import { IBaseQuery } from '../../../baseQuery';
import homeQuery from '../../../templates/Home/query';
import postQuery from '../../../templates/Post/query';

const createPagePath = (i: number) =>  i === 1 ? '/' : `/page/${i}`;

const featuredJsonPath = path.resolve(
  __dirname,
  '../../../../public/wp-json/maxmind/v1/'
);

const { GATSBY_URL = 'http://localhost:5000' } = process.env;

const queries = [
  {
    callback: (result: any, actions: Actions) => {
      const { createPage } = actions;
      const posts = result.data.allMdx.nodes;
      const postsPerPage = 6;
      const numPages = Math.ceil(posts.length / postsPerPage);
      const featuredPost = posts.shift();

      Array.from({
        length: numPages,
      }).forEach((_, i) => {
        const offset = i * postsPerPage;

        createPage({
          component: path.resolve(
            __dirname,
            '../../../templates/Home/Home.tsx'
          ),
          context: {
            featuredPost: (offset === 0) ? featuredPost : null,
            limit: postsPerPage,
            newerPostsLink: (i > 0) ? createPagePath(i) : null,
            numPages,
            olderPostsLink: (i < numPages - 1) ? createPagePath(i + 2) : null,
            posts: posts.slice(offset, offset + postsPerPage),
            skip: offset,
          },
          path: createPagePath(i + 1),
        });
      });
    },
    query: homeQuery,
  },
  {
    callback: (result: any, actions: Actions) => {
      const { createPage } = actions;
      const { nodes } = result.data.allMdx;

      const featured: IBaseQuery[] = [];

      nodes.forEach((node: IBaseQuery, i: number) => {
        if (
          process.env.gatsby_executing_command === 'develop'
          || !node.frontmatter.draft
        ) {
          if (
            !featured[0]
            && node.frontmatter.categories?.includes('featured-entry-1')
          ) {
            featured[0] = node;
          }

          if (
            !featured[1]
            && node.frontmatter.categories?.includes('featured-entry-2')
          ) {
            featured[1] = node;
          }

          if (
            !featured[2]
            && node.frontmatter.categories?.includes('featured-entry-3')
          ) {
            featured[2] = node;
          }

          createPage({
            component: node.fileAbsolutePath,
            context: {
              ...node,
              nextPost: (nodes[i + 1]) ? nodes[i + 1] : null,
              prevPost: (nodes[i - 1]) ? nodes[i - 1] : null,
            },
            path: node.fields.slug,
          });
        }
      });

      // eslint-disable-next-line security/detect-non-literal-fs-filename
      fs.mkdirSync(featuredJsonPath, {
        recursive: true,
      });

      // eslint-disable-next-line security/detect-non-literal-fs-filename
      fs.writeFileSync(
        `${featuredJsonPath}/featured-posts.json`,
        JSON.stringify(
          featured.map((node: IBaseQuery) => ({
            date: new Date(node.frontmatter.date).toISOString(),
            excerpt: node.excerpt,
            // eslint-disable-next-line max-len
            featured_image_src: `${GATSBY_URL}${node.frontmatter.featuredImage?.publicURL}`,
            link: `${GATSBY_URL}${node.fields.slug}`,
            title: node.frontmatter.title,
          }))
        )
      );
    },
    query: postQuery,
  },
];

const createMdxPages = async (args: CreatePagesArgs): Promise<any> => {
  const { actions, graphql, reporter } = args;

  return Promise.all(
    queries.map(async (q) => {
      const result = await q.query(graphql);

      if (result.errors) {
        reporter.panicOnBuild('🚨 ERROR: error!');
        console.log(result.errors);
        throw new Error(`🚨 ERROR: Loading "${q.query.name}" query`);
      }

      if (!result.data) {
        reporter.panicOnBuild('🚨 ERROR: No data!');
        throw new Error('🚨 ERROR: No data!');
      }

      q.callback(result, actions);
    })
  );
};

export default createMdxPages;
