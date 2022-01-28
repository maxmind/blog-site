import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../../components/Layout/Layout';
import { a as A, h1 as H1, hr as Hr, p as P } from '../../components/Mdx';
import Pagination from '../../components/Pagination';
import TagContainer from '../Home/TagContainer';
import { IPostContext } from './query';

import * as styles from './Post.module.scss';

interface IPost {
  children: React.ReactNode;
  pageContext: IPostContext;
}

const Post: React.FC<IPost> = (props) => {
  const { frontmatter, nextPost, prevPost } = props.pageContext;
  const {
    authors,
    categories,
    date,
    description,
    keywords,
    tags,
    title,
  } = frontmatter;

  const publishedDate = new Date(date);

  const previousLink = prevPost ? {
    text: prevPost.frontmatter.title,
    to: prevPost.fields.slug,
  } : undefined;

  const nextLink = nextPost ? {
    text: nextPost.frontmatter.title,
    to: nextPost.fields.slug,
  } : undefined;

  return (
    <Layout
      description={description}
      keywords={keywords}
      title={title}
    >
      <article
        className={styles.article}
        data-plugin-header="line-numbers"
      >
        <header
          className={styles.header}
        >
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
          <H1
            className={styles.heading}
          >
            {title}
          </H1>
          <div
            className={styles.published}
          >
            <div
              className={styles.authornames}
            >
              <div
                className={styles.by}
              >
                by
              </div>
              {authors && (
                <div
                  className={styles.authors}
                >
                  {authors.map(author =>
                    (
                    // eslint-disable-next-line react/jsx-key
                      <div
                        className={styles.author}
                      >
                        {author}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
            <div
              className={styles.date}
            >
              {publishedDate.toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </div>
          </div>
        </header>

        <section
          className={styles.content}
        >
          {props.children}

          {tags && (
            <div
              className={styles.tags}
            >
              {tags.map(tag => (
                <TagContainer
                  key={tag}
                  text={tag.replace(/-/g, ' ')}
                />
              ))}
            </div>
          )}

        </section>

        <Hr />

        <Pagination
          nextLink={nextLink}
          previousLink={previousLink}
        />
      </article>
    </Layout>
  );
};

Post.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.any,
};

export default Post;
