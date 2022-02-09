import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';

import { a as A, p as P } from '../../components/Mdx';
import CategoryContainer from './CategoryContainer';
import PublishedContainer from './PublishedContainer';
import { IPost } from './query';

import * as styles from './PostPreview.module.scss';

interface IPostPreviewProps {
  isFeatured?: boolean;
  post: IPost;
}

const PostPreview: React.FC<IPostPreviewProps> = (props) => {
  const { isFeatured, post } = props;
  const { excerpt, fields, frontmatter } = post;
  const { slug } = fields;
  const { featuredImage, title } = frontmatter;

  return (
    <article
      className={classNames(
        styles.container,
        {
          [styles.containerFeatured]: isFeatured,
        }
      )}
    >
      <div
        className={styles.content}
      >
        <CategoryContainer
          post={post}
        />
        <h2>
          <A
            className={styles.title}
            href={slug}
          >
            {title}
          </A>
        </h2>
        <PublishedContainer
          post={post}
        />
        <P
          className={styles.excerpt}
        >
          {excerpt}
        </P>
        <div
          className={styles.readmore}
        >
          <A
            className={styles['readmore__link']}
            href={slug}
          >
            Read more &rsaquo;
          </A>
        </div>
      </div>

      {isFeatured && featuredImage && (
        <div
          className={styles.graphic}
        >
          <img
            alt="foo"
            className={styles.image}
            src={featuredImage.publicURL}
          />
        </div>
      )}
    </article>
  );
};

PostPreview.propTypes = {
  isFeatured: PropTypes.bool,
  post: PropTypes.any.isRequired,
};

export default PostPreview;
