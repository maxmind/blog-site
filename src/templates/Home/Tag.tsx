import PropTypes from 'prop-types';
import * as React from 'react';

import * as styles from './Tag.module.scss';

interface ITag {
  text: string;
}

const Tag: React.FC<ITag> = (props) => {
  const { text } = props;

  return (
    <div
      className={styles.tag}
    >
      {text}
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
