import PropTypes from 'prop-types';
import * as React from 'react';

import Layout from '../../components/Layout/Layout';
import { h1 as H1 } from '../../components/Mdx';
import Pagination from '../../components/Pagination';
import PostPreview from '../Home/PostPreview';
import { ICategoryContext } from './query';

import * as styles from '../Home/Home.module.scss';
interface ICategory {
  pageContext: ICategoryContext;
}

const Category: React.FC<ICategory> = (props) => {
  const { pageContext } = props;
  const { newerPostsPath, olderPostsPath, posts, category, tag } = pageContext;

  const previousLink = newerPostsPath ? {
    text: 'Newer',
    to: newerPostsPath,
  } : undefined;

  const nextLink = olderPostsPath ? {
    text: 'Older',
    to: olderPostsPath,
  } : undefined;

  return (
    <Layout
      className={styles.layout}
      description={''}
      hasSidebar={false}
      keywords={[]}
      title={''}
    >
      <div
        className={styles.header}
      >
        <H1>{category.replace(/-/g, ' ')}</H1>
      </div>
      <div
        className={styles['posts__wrapper']}
      >
        <div
          className={styles.posts}
        >
          {posts && posts.map(post => (
            <PostPreview
              key={post.fields.slug}
              post={post}
            />
          ))}
        </div>
      </div>


      <Pagination
        nextLink={nextLink}
        previousLink={previousLink}
      />
    </Layout>
  );
};

Category.propTypes = {
  pageContext: PropTypes.any,
};

export default Category;
