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
  leftLink?: ILink;
  rightLink?: ILink;
}

const Pagination: React.FC<IPagination> = (props) => {
  const { leftLink, rightLink } = props;
  return (
    <footer
      className={styles.footer}
    >
      {leftLink && (
        <Link
          className={styles['footerNewer']}
          to={leftLink.to}
        >
          <FaArrowLeft
            className={styles['footerArrow']}
          />
          <span
            className={styles['footerDirection']}
          >
            {leftLink.text}
          </span>
        </Link>
      )}

      {rightLink && (
        <Link
          className={styles['footerOlder']}
          to={rightLink.to}
        >
          <FaArrowRight
            className={styles['footerArrow']}
          />
          <span
            className={styles['footerDirection']}
          >
            {rightLink.text}
          </span>
        </Link>
      )}
    </footer>
  );
};

export default Pagination;
