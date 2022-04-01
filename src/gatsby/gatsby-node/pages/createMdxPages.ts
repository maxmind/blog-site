/* eslint-disable filenames/match-exported */
import fs from 'fs';
import { Actions, CreatePagesArgs } from 'gatsby';
import path from 'path';
import { node } from 'prop-types';

import { IBaseQuery } from '../../../baseQuery';
import categoryQuery from '../../../templates/Category/query';
import homeQuery from '../../../templates/Home/query';
import postQuery from '../../../templates/Post/query';
import tagQuery from '../../../templates/Tag/query';
import { publishedDate } from '../../../utils/date';
import { generateCategoryUrl, generateTagUrl } from '../../../utils/url';

const createPagePath = (i: number) =>  i === 1 ? '/' : `/page/${i}`;


const featuredJsonPath = path.resolve(
  __dirname,
  '../../../../public/'
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
            newerPostsPath: (i > 0) ? createPagePath(i) : null,
            numPages,
            olderPostsPath: (i < numPages - 1) ? createPagePath(i + 2) : null,
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
      const posts = result.data.allMdx.nodes;
      const postsPerPage = 6;

      const categoriesList: string[] = [];
      const createCategoriesObject: string[] = [];

      // Get the list of categories
      posts.forEach((post: IBaseQuery) => {
        if (post.frontmatter.categories) {
          post.frontmatter.categories.forEach((category: string) => {
            if (categoriesList.indexOf(category) === -1) {
              categoriesList.push(category);
            }
            createCategoriesObject.push(category);
          });
        }
      });

      // Get the total number of posts with a given category
      const categoriesCount = createCategoriesObject.reduce(
        (prev: {[key: string]: number}, curr: string) => {
          prev[String(curr)] = (prev[String(curr)] || 0) + 1;
          return prev;
        }, {} );



      categoriesList.forEach((category) => {
        const numPages =
          Math.ceil(categoriesCount[String(category)] / postsPerPage);
        const categoryUrl = generateCategoryUrl(category);
        const filteredPosts = posts.filter((post: IBaseQuery) =>
          post.frontmatter.categories?.includes(category)
        );

        const createCategoryPath = (i: number) =>
          i === 1
            ? `${categoryUrl}`
            : `${categoryUrl}/page/${i}`;
        Array.from({
          length: numPages,
        }).forEach((_, i) => {
          const offset = i * postsPerPage;

          createPage({
            component: path.resolve(
              __dirname,
              '../../../templates/Category/Category.tsx'
            ),
            context: {
              category,
              limit: postsPerPage,
              newerPostsPath: (i > 0) ? createCategoryPath(i) : null,
              numPages,
              olderPostsPath:
                (i < numPages - 1) ? createCategoryPath(i + 2) : null,
              posts: filteredPosts.slice(offset, offset + postsPerPage),
            },
            path: createCategoryPath(i + 1),
          });
        });
      });
    },
    query: categoryQuery,
  },
  {
    callback: (result: any, actions: Actions) => {
      const { createPage } = actions;
      const posts = result.data.allMdx.nodes;
      const postsPerPage = 6;

      const tagsList: string[] = [];
      const createTagObject: string[] = [];

      // Get the list of tags
      posts.forEach((post: IBaseQuery) => {
        if (post.frontmatter.tags) {
          post.frontmatter.tags.forEach((tag: string) => {
            if (tagsList.indexOf(tag) === -1) {
              tagsList.push(tag);
            }
            createTagObject.push(tag);
          });
        }
      });

      // Get the total number of posts with a given tag
      const tagsCount = createTagObject.reduce(
        (prev: {[key: string]: number}, curr: string) => {
          prev[String(curr)] = (prev[String(curr)] || 0) + 1;
          return prev;
        }, {} );

      tagsList.forEach((tag) => {
        const numPages = Math.ceil(tagsCount[String(tag)] / postsPerPage);
        const tagUrl = generateTagUrl(tag);
        const filteredPosts = posts.filter((post: IBaseQuery) =>
          post.frontmatter.tags?.includes(tag)
        );

        const createTagPath = (i: number) =>
          i === 1
            ? `${tagUrl}`
            : `${tagUrl}/page/${i}`;
        Array.from({
          length: numPages,
        }).forEach((_, i) => {
          const offset = i * postsPerPage;

          createPage({
            component: path.resolve(
              __dirname,
              '../../../templates/Tag/Tag.tsx'
            ),
            context: {
              limit: postsPerPage,
              newerPostsPath: (i > 0) ? createTagPath(i) : null,
              numPages,
              olderPostsPath:
                (i < numPages - 1) ? createTagPath(i + 2) : null,
              posts: filteredPosts.slice(offset, offset + postsPerPage),
              tag,
            },
            path: createTagPath(i + 1),
          });
        });
      });
    },
    query: tagQuery,
  },
  {
    callback: (result: any, actions: Actions) => {
      const { createPage } = actions;
      const { nodes } = result.data.allMdx;

      const featured: IBaseQuery[] = [];
      const maxFeaturedPosts = 3;

      nodes.forEach((node: IBaseQuery, i: number) => {
        if (
          process.env.gatsby_executing_command === 'develop'
          || !node.frontmatter.draft
        ) {
          if (
            node.frontmatter.isFeatured === true
            && featured.length <= maxFeaturedPosts
          ) {
            featured.push(node);
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

      // eslint-disable-next-line max-len
      const selectExcerpt = (description: string, excerpt: string, limit = 200) => {
        if (description) {
          const cleanDescription = description.replace(/\n/g, ' ');
          if (cleanDescription.length <= limit) {
            return cleanDescription;
          }
          return cleanDescription.slice(0, limit) + '…';
        }
        return excerpt.replace(/\n/g,' ');
      };

      // eslint-disable-next-line security/detect-non-literal-fs-filename
      fs.writeFileSync(
        `${featuredJsonPath}/featured-posts.json`,
        JSON.stringify(
          featured.map((node: IBaseQuery) => ({
            date: publishedDate(node.frontmatter.date).toISOString(),
            // eslint-disable-next-line max-len
            excerpt: selectExcerpt(node.frontmatter.description, node.excerpt),
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
