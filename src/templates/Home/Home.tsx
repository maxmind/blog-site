import PropTypes from 'prop-types';
import * as React from 'react';

import Logo from '../../assets/svgs/maxmind-logo.svg';
import ViewDocsIcon from '../../assets/svgs/react-icons/FaBookOpen.svg';
import ContributeIcon from '../../assets/svgs/react-icons/FaCode.svg';
import QuickstartIcon from '../../assets/svgs/react-icons/FaRocket.svg';
import BlogFooter from '../../components/BlogFooter';
import Layout from '../../components/Layout/Layout';
import { a as A } from '../../components/Mdx';
import Tag from '../Home/Tag';
import Post from './Post';
import { IHomeContext } from './query';

import * as styles from './Home.module.scss';
interface IHome {
  pageContext: IHomeContext;
}

const Home: React.FC<IHome> = (props) => {
  const { pageContext } = props;
  const { frontmatter } = pageContext;
  const { description, keywords, title } = frontmatter;

  return (
    <Layout
      className={styles.layout}
      description={description}
      hasSidebar={false}
      keywords={keywords}
      title={title}
    >
      <div
        className={styles.posts}
      >
        <Post
          continuereading="Continue reading ›"
          paragraph="We have updated our data in a number of ways in
          preparation for the rollout of iCloud Private Relay. We have
          worked with Apple’s to ensure that our data accurately reflects
          how Private Relay works and delivers the best possible experience
          for your users...."
          published="September 9, 2021 by Christopher Luna"
          title="Data Updates for Apple iCloud Private Relay"
        />
        <div
          className={styles.placeholder}
        >
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
        </div>
        <Post
          continuereading="Continue reading ›"
          paragraph="Demyst’s Platform has helped Tier 1 financial
          services firms modernize and leverage external data workflows
          for over 10 years. Account takeover and synthetic fraud can be
          expensive...."
          published="September 7, 2021 by Christopher Luna"
          title="DemystData’s fraud solutions offer best-in-class IP
          risk data from the minFraud service to help financial services
          firms prevent fraud"
        />
        <Post
          continuereading="Continue reading ›"
          paragraph="We’re excited to share a couple of new features that we
          recently added to our minFraud service client APIs...."
          published="September 3, 2021 by Christopher Luna"
          title="New minFraud features: passing 3-D Secure outcome, custom rule
          label in minFraud response, “test” disposition for custom rules"
        />
        <Post
          continuereading="Continue reading ›"
          paragraph="Simplex has been changing the status quo of crypto
          purchases since 2014. As the market leader, they pioneered the
          first riskless global fiat onramp using a credit and debit card,
          which promises a zero chargeback guarantee. With a zero chargeback
          guarantee in place, there’s a lot at stake in fraud detection and
          prevention…"
          published="August 12, 2021 by Christopher Luna"
          title="Simplex uses minFraud data to train their algorithm
          to detect new cryptocurrency fraud patterns in real time
          "
        />
      </div>

      <BlogFooter />

    </Layout>
  );
};

Home.propTypes = {
  pageContext: PropTypes.any,
};

export default Home;
