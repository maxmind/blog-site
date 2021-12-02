import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import * as styles from './Img.module.scss';

const Img: React.FC<React.HTMLProps<HTMLImageElement>> = (props) => {
  return (
    <img
      alt={props.alt || ''}
      className={classNames(props.className, styles.img)}
      src={props.src}
      title={props.title}
    />
  );
};

Img.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
};

export default Img;
