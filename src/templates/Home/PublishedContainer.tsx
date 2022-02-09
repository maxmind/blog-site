import PropTypes from 'prop-types';
import * as React from 'react';

import { IPost } from './query';

import * as styles from './PublishedContainer.module.scss';

interface IPublishedContainer {
  post: IPost;
}

const PublishedContainer: React.FC<IPublishedContainer> = (props) => {
  const { post } = props;
  const { frontmatter } = post;
  const { authors, date } = frontmatter;

  const publishedDate = new Date(date);

  return (
    <>
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
    </>
  );
};

PublishedContainer.propTypes = {
  post: PropTypes.any,
};

export default PublishedContainer;
