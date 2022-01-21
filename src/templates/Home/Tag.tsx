import PropTypes from 'prop-types';
import * as React from 'react';

import Link from '../../components/Link';
import { a as A, p } from '../../components/Mdx';

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
      <Link
        to={`/category/${text.replace(/\s/g , '-')}`}
      >
        {text}
      </Link>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
