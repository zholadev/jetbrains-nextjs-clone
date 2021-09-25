import React from 'react';
import Header from './Partials/Header';
import Footer from './Partials/Footer';
import styles from '../styles/layout.module.sass'
import HeadComponent from './Partials/Head'

const Layout = ({ title, children }) => {

  return (
    <React.Fragment>
      <HeadComponent title={title} />
      <div className={styles.layout}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
