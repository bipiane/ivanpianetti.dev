import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/pages/intro';
import About from '../components/pages/about';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
  </Layout>
);

export default IndexPage;
