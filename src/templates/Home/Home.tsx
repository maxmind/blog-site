import PropTypes from 'prop-types';
import * as React from 'react';

import Logo from '../../assets/svgs/maxmind-logo.svg';
import Layout from '../../components/Layout/Layout';
import { a as A } from '../../components/Mdx';
import Pagination from '../../components/Pagination';
import Post from './Post';
import { IHomeContext } from './query';

import * as styles from './Home.module.scss';
interface IHome {
  pageContext: IHomeContext;
}

const Home: React.FC<IHome> = (props) => {
  const { pageContext } = props;
  const { featuredPost, newerPostsLink, olderPostsLink, posts } = pageContext;

  const leftLink = newerPostsLink ? {
    text: 'Newer',
    to: newerPostsLink,
  } : undefined;

  const rightLink = olderPostsLink ? {
    text: 'Older',
    to: olderPostsLink,
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
            <Post
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
            <Post
              key={post.fields.slug}
              post={post}
            />
          ))}
        </div>
      </div>


      <Pagination
        leftLink={leftLink}
        rightLink={rightLink}
      />
    </Layout>
  );
};

Home.propTypes = {
  pageContext: PropTypes.any,
};

export default Home;
