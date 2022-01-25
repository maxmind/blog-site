import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';

import { a as A, p as P } from '../../components/Mdx';
import { IPost } from './query';
import TagContainer from './TagContainer';

import * as styles from './PostPreview.module.scss';

interface IPostPreviewProps {
  isFeatured?: boolean;
  post: IPost;
}

const PostPreview: React.FC<IPostPreviewProps> = (props) => {
  const { isFeatured, post } = props;
  const { excerpt, fields, frontmatter } = post;
  const { slug } = fields;
  const { authors, date, featuredImage, title, categories, tags } = frontmatter;

  const publishedDate = new Date(date);

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
        <div
          className={styles.meta}
        >
          <div
            className={styles.published}
          >
            {publishedDate.toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
        </div>
        <div
          className={styles.copy}
        >
          <h2>
            <A
              className={styles.title}
              href={slug}
            >
              {title}
            </A>
          </h2>

          <P>
            {excerpt}
          </P>
        </div>
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
        <div
          className={styles.tags}
        >
          {tags && (
            <div
              className={styles.tags}
            >
              {tags.map(tag => (
                <TagContainer
                  key={tag}
                  text={tag.replace(/-/g, ' ')}
                />
              ))}
            </div>
          )}
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
