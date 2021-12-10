import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';

import * as styles from './Tag.module.scss';

interface ITag {
  content: string;
}

const Tag: React.FC<ITag> = (props) => {
  const { content } = props;

  return (
    <div
      className={styles.tag}
    >
      {content}
    </div>
  );
};

Tag.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Tag;
