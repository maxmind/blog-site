import { Link } from 'gatsby';
import * as React from 'react';

import FaArrowLeft from '../assets/svgs/react-icons/FaArrowLeft.svg';
import FaArrowRight from '../assets/svgs/react-icons/FaArrowRight.svg';

import * as styles from './Pagination.module.scss';

interface ILink {
  text: string;
  to: string;
}

interface IPagination {
  nextLink?: ILink;
  previousLink?: ILink;
}

const Pagination: React.FC<IPagination> = (props) => {
  const { previousLink, nextLink } = props;
  return (
    <footer
      className={styles.footer}
    >
      {previousLink && (
        <Link
          className={styles['footerNewer']}
          to={previousLink.to}
        >
          <FaArrowLeft
            className={styles['footerArrow']}
          />
          <span
            className={styles['footerDirection']}
          >
            {previousLink.text}
          </span>
        </Link>
      )}

      {nextLink && (
        <Link
          className={styles['footerOlder']}
          to={nextLink.to}
        >
          <FaArrowRight
            className={styles['footerArrow']}
          />
          <span
            className={styles['footerDirection']}
          >
            {nextLink.text}
          </span>
        </Link>
      )}
    </footer>
  );
};

export default Pagination;
