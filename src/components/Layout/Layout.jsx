import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({children}) => <div className="main">{children}</div>;
export default Layout;

Layout.propTypes = {children: PropTypes.node.isRequired};
