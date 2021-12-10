import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';

import FaArrowRight from '../../assets/svgs/react-icons/FaArrowRight.svg';
import Link from '../Link';

import * as styles from './LinkGroupCard.module.scss';

export interface ILinkGroupCard {
  className?: string;
  description?: string;
  heading: string;
  icon: SvgElement,
  isCompact?: boolean,
  to: string;
}

const LinkGroupCard: React.FC<ILinkGroupCard> = (props) => {
  const { className, description, icon: Icon, isCompact, to } = props;
  return (
    <Link
      className={classNames(
        styles.container,
        className,
        {
          [styles['container__isCompact']]: isCompact,
          [styles['container__noDescription']]: description === undefined,
        }
      )}
      to={to}
    >
      <Icon
        className={styles.icon}
      />
      <h3
        className={styles.heading}
      >
        {props.heading}
      </h3>
      {description && (
        <p
          className={styles.description}
        >
          {description}
        </p>
      )}
      <div
        className={styles.arrow}
      >
        <FaArrowRight />
      </div>
    </Link>
  );
};

LinkGroupCard.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  isCompact: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default LinkGroupCard;
