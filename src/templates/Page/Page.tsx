import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../../components/Layout/Layout';
import { h1 as H1, hr as Hr, p as P } from '../../components/Mdx';
import Pagination from '../../components/Pagination';
import Tag from './../Home/Tag';
import { IPageContext } from './query';

import * as styles from './Page.module.scss';

const caseInsensitiveIncludes = (
  haystack: string[] = [],
  needle: string
) => haystack.find(
  (x) => x.toLowerCase().trim() === needle.toLowerCase().trim()
);

interface IPage {
  children: React.ReactNode;
  pageContext: IPageContext;
}

const Page: React.FC<IPage> = (props) => {
  const { frontmatter, nextPost, prevPost } = props.pageContext;
  const {
    author,
    date: publishDate,
    description,
    keywords,
    tags,
    title,
  } = frontmatter;

  const date = new Date(publishDate);

  let type;

  if(tags) {
    if (
      caseInsensitiveIncludes(tags, 'minfraud')
      && !(
        caseInsensitiveIncludes(tags, 'geoip')
        || caseInsensitiveIncludes(tags, 'geoip2')
      )
    ) {
      type = 'minfraud';
    }

    if (
      (
        caseInsensitiveIncludes(tags, 'geoip')
        || caseInsensitiveIncludes(tags, 'geoip2')
      )
      && !caseInsensitiveIncludes(tags, 'minfraud')
    ) {
      type = 'geoip';
    }
  }

  const leftLink = nextPost ? {
    text: nextPost.frontmatter.title,
    to: nextPost.fields.slug,
  } : undefined;

  const rightLink = prevPost ? {
    text: prevPost.frontmatter.title,
    to: prevPost.fields.slug,
  } : undefined;

  return (
    <Layout
      description={description}
      keywords={keywords}
      title={title}
      type={type as 'minfraud' | 'geoip'}
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
          <P>
            {author && (
              <>
                {' '}
                by
                {' '}
                {author}
              </>
            )}
          </P>

          {props.children}

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
        </section>

        <Hr />

        <Pagination
          leftLink={leftLink}
          rightLink={rightLink}
        />
      </article>
    </Layout>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.any,
};

export default Page;
