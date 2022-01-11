import PropTypes from 'prop-types';
import * as React from 'react';

import Layout from '../../components/Layout/Layout';
import Pagination from '../../components/Pagination';
import PostPreview from './PostPreview';
import { IHomeContext } from './query';

import * as styles from './Home.module.scss';
interface IHome {
  pageContext: IHomeContext;
}

const Home: React.FC<IHome> = (props) => {
  const { pageContext } = props;
  const { featuredPost, newerPostsPath, olderPostsPath, posts } = pageContext;

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
      {featuredPost && (
        <div
          className={styles['featured__wrapper']}
        >
          <div
            className={styles.featured}
          >
            <PostPreview
              isFeatured={true}
              post={featuredPost}
            />
          </div>
        </div>
      )}
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

Home.propTypes = {
  pageContext: PropTypes.any,
};

export default Home;
