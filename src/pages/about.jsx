import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">About Report Malpractice</Header>
    <Container center={center}>
      <h3>
        We want to obtain competent, caring and professional services from thos who we entrust with our health.  We have all had family members and friends lose their life because of a doctor who didn't care enough.  We seek to bring awareness to the public.{' '}
        <a href="https://www.reportmalpractice.com">here.</a>
      </h3>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
