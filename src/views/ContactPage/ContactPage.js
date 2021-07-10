import React from 'react';
import { Divider } from '@material-ui/core';
import { Section } from 'components/organisms';
import { Hero } from './components';
import { InlineWidget } from "react-calendly";

const ContactPage = () => (
  <div>
    <Hero />
    <Section>
      <InlineWidget url="https://calendly.com/jonayah/consultation" />
    </Section>
    <Divider />
  </div>
);

export default ContactPage;
