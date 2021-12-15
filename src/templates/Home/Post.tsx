import PropTypes from 'prop-types';
import * as React from 'react';

import H2 from '../../../src/components/Mdx/H2';
import { a as A, p as P } from '../../components/Mdx';
import Tag from '../Home/Tag';
import Link from './../../components/Link';

import * as styles from './Post.module.scss';

interface IPost {
  continuereading: string;
  paragraph: React.ReactNode;
  published: string;
  // tags?: string;
  title: string;
}

const Post: React.FC<IPost> = (props) => {
  const {
    continuereading,
    paragraph,
    published,
    // tags,
    title,
  } = props;

  return (
    <div
      className={styles.container}
    >
      <H2>
        {title}
      </H2>
      <div
        className={styles.published}
      >
        {published}
      </div>
      <div
        className={styles.content}
      >
        <P>{paragraph}</P>
      </div>
      <div
        className={styles.continuereading}
      >
        <A
          href="/2021/09/data-updates-for-apple-icloud-private-relay"
        >
          {continuereading}
        </A>
      </div>
      <div
        className={styles.tags}
      >
        <Tag
          content="IP Intelligence"
        />
        <Tag
          content="minFraud"
        />
        <Tag
          content="IP Geolocation"
        />
        <Tag
          content="Online Fraud Prevention"
        />
      </div>
    </div>
  );
};

Post.propTypes = {
  continuereading: PropTypes.string.isRequired,
  paragraph: PropTypes.node.isRequired,
  published: PropTypes.string.isRequired,
  // tags: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Post;
