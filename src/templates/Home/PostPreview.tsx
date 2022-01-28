import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';

import { a as A, p as P } from '../../components/Mdx';
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
  const { authors, date, featuredImage, title, categories } = frontmatter;

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
        {categories && (
          <div
            className={styles.categories}
          >
            {categories.map(category =>
              (
              // eslint-disable-next-line react/jsx-key
                <A
                  className={styles.category}
                  href={`/category/${category}`.toLowerCase()}
                >
                  {category.replace(/-/g, ' ')}
                </A>
              )
            )}
          </div>
        )}
        <h2>
          <A
            className={styles.title}
            href={slug}
          >
            {title}
          </A>
        </h2>
        <div
          className={styles.published}
        >
          <div
            className={styles.authornames}
          >
            <div
              className={styles.by}
            >
              by
            </div>
            {authors && (
              <div
                className={styles.authors}
              >
                {authors.map(author =>
                  (
                    // eslint-disable-next-line react/jsx-key
                    <div
                      className={styles.author}
                    >
                      {author}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
          <div
            className={styles.date}
          >
            {publishedDate.toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
        </div>
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
