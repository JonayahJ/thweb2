import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    background: `url(https://res.cloudinary.com/think-halcyon-llc/image/upload/v1625933366/Think%20Halcyon/Illustrations/Personal_Information--Yellow-400_wp5tdd.svg) no-repeat #3F50B5`,
    overflow: 'hidden',
    minHeight: 400,
    [theme.breakpoints.up('xs')]: {
      backgroundPosition: 'right 10px top',
    },
    [theme.breakpoints.up('sm')]: {
      backgroundPosition: 'right 50px top',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'right 75px top',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: 'right 150px top',
    },
    [theme.breakpoints.up('xl')]: {
      backgroundPosition: 'right 350px top',
    },
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
  },
  sectionHeader: {
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section className={classes.section}>
        <SectionHeader
          title="Book a free 30-minute consultation"
          subtitle="Are you ready to build your first new website or redesign an old one? Let's chat about your needs and how Think Halcyon can help you."
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h3',
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
          className={classes.sectionHeader}
        />
      </Section>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
