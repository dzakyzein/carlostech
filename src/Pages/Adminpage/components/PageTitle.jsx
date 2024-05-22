/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const PageTitle = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null; // This component doesn't render anything
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
