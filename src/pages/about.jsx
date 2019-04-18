import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">Report Malpractice</Header>
    <Container center={center}>
      <h3>
        The purpose of this website is to create an environment of fairness, transparency and accountability for medical patients and to rais awareness of the behavior of those entrusted with our health. 

        All reports are from public records or user submissions.  User submissions are screened to reasonably prevent personal attacks or information of little value and credibility.
        read the guide{' '}
        <a href="https://www.reportmalpractice.com">here.</a>
      </h3>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
