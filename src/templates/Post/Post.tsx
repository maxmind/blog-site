import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../../components/Layout/Layout';
import { h1 as H1, hr as Hr, p as P } from '../../components/Mdx';
import Pagination from '../../components/Pagination';
import Tag from '../Home/Tag';
import { IPostContext } from './query';

import * as styles from './Post.module.scss';

interface IPost {
  children: React.ReactNode;
  pageContext: IPostContext;
}

const Post: React.FC<IPost> = (props) => {
  const { frontmatter, nextPost, prevPost } = props.pageContext;
  const {
    author,
    categories,
    date: publishDate,
    description,
    keywords,
    tags,
    title,
  } = frontmatter;

  const date = new Date(publishDate);

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
          <span
            className={styles.date}
          >
            {date.toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <H1
            className={styles.heading}
          >
            {title}
          </H1>
        </header>

        <section
          className={styles.content}
        >
          {author && (
            <P>
              {' '}
              by
              {' '}
              {author}
            </P>
          )}

          {props.children}

          {/*

          TODO - Display tags once tags pages are created

          {tags && (
            <div
              className={styles.tags}
            >
              {tags.map(tag => (
                <Tag
                  key={tag}
                  text={tag}
                />
              ))}
            </div>
          )}

          */}
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
