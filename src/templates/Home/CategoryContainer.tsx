import PropTypes from 'prop-types';
import * as React from 'react';

import { a as A } from '../../components/Mdx';
import { IPost } from './query';

import * as styles from './CategoryContainer.module.scss';

interface ICategoryContainer {
  post: IPost;
}

const CategoryContainer: React.FC<ICategoryContainer> = (props) => {
  const { post } = props;
  const { frontmatter } = post;
  const { categories } = frontmatter;

  return (
    <>
      {categories && (
        <div
          className={styles.categories}
        >
          {categories.map(category =>
            (
              // eslint-disable-next-line react/jsx-key
              <A
                className={styles.category}
                href={`/category/${category}`.toLowerCase()}
              >
                {category.replace(/-/g, ' ')}
              </A>
            )
          )}
        </div>
      )}
    </>
  );
};

CategoryContainer.propTypes = {
  post: PropTypes.any,
};

export default CategoryContainer;
