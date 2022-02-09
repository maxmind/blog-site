import PropTypes from 'prop-types';
import * as React from 'react';

import Layout from '../../components/Layout/Layout';
import { h1 as H1 } from '../../components/Mdx';
import Pagination from '../../components/Pagination';
import PostPreview from '../Home/PostPreview';
import { ITagContext } from './query';

import * as styles from '../Home/Home.module.scss';
interface ITag {
  pageContext: ITagContext;
}

const Tag: React.FC<ITag> = (props) => {
  const { pageContext } = props;
  const { newerPostsPath, olderPostsPath, posts, tag } = pageContext;

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
        className={styles['posts__wrapper']}
      >
        <div
          className={styles.posts}
        >
          <H1
            className={styles.header}
          >
            {tag.replace(/-/g, ' ')}
          </H1>
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

Tag.propTypes = {
  pageContext: PropTypes.any,
};

export default Tag;
