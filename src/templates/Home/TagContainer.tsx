import PropTypes from 'prop-types';
import * as React from 'react';

import Link from '../../components/Link';
import { a as A, p } from '../../components/Mdx';

import * as styles from './TagContainer.module.scss';

interface ITagContainer {
  text: string;
}

const TagContainer: React.FC<ITagContainer> = (props) => {
  const { text } = props;

  return (
    <div
      className={styles.tag}
    >
      <Link
        to={`/tag/${text.replace(/\s/g , '-')}`}
      >
        {text}
      </Link>
    </div>
  );
};

TagContainer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TagContainer;
