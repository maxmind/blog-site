import PropTypes from 'prop-types';
import * as React from 'react';

import Logo from '../../assets/svgs/maxmind-logo.svg';
import useSystemStatus from '../../hooks/useSystemStatus';
import Link from '../Link';
import AccessibilityNav from './AccessibilityNav';

import * as styles from './Header.module.scss';

interface IHeader {
  isSidebarOpen?: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<IHeader> = (props) => {
  const systemStatus = useSystemStatus();
  const { isSidebarOpen, toggleSidebar } = props;
  return (
    <>
      <AccessibilityNav
        className={styles.accessibilityNav}
      />
      {systemStatus && systemStatus.class !== 'operational' && (
        <div
          className={styles.systemStatus}
        >
          <div
            className={styles['systemStatus__content']}
          >
            {systemStatus.icon}
            {' '}
            {systemStatus.title}
            {' - '}
            {systemStatus.message}
            {' '}
            <a
              href="https://status.maxmind.com"
            >
              More info &raquo;
            </a>
          </div>
        </div>
      )}
      <header
        className={styles.header}
      >
        <div
          className={styles.nav}
        >
          <Link
            aria-label="Home"
            className={styles.logo}
            to="/"
          >
            <Logo
              className={styles['logo__svg']}
            />
            <span
              aria-label="Blog"
              className={styles['logo__siteName']}
            >
              Blog
            </span>
          </Link>
          {/*

          TODO - Impelement Google Search integration, if necessary

          <SearchBar
            className={styles.search}
          />

          */}


          {/*

          TODO - Delete or enable Sidebar functionality

          This functionality is currently disabled for now, as it is unclear if
          the blog will eventually need a sidebar navigation.

          <button
            aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
            className={styles.toggle}
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <FaTimes
                aria-hidden="true"
              />
            ) : (
              <FaBars
                aria-hidden="true"
              />
            )}
          </button>

          */}
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  isSidebarOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
