import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';

import * as styles from './BlogFooter.module.scss';

const BlogFooter: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  return (
    <footer
      className={styles.footer}
    >
      <div
        className={styles['footerNewer']}
      >
        <FaArrowLeft
          className={styles['footerArrow']}
        />
        <span
          className={styles['footerDirection']}
        >
          Newer
        </span>
      </div>
      <div
        className={styles['footerOlder']}
      >
        <FaArrowRight
          className={styles['footerArrow']}
        />
        <span
          className={styles['footerDirection']}
        >
          Older
        </span>
      </div>
    </footer>
  );
};

export default BlogFooter;
