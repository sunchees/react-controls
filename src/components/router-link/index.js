import React from 'react';
import { withRouter, matchPath, Link } from 'react-router-dom';
import './router-link.css';

class RouterLink extends React.PureComponent {
  isActive() {
    const path = this.props.pattern || this.props.to;
    return !!matchPath(this.props.location.pathname, {
      path
    });
  }

  render() {
    const {
      className = '',
      to,
      children,
      pattern,
      location,
      history,
      ...props
    } = this.props;

    return (
      <Link
        {...props}
        className={`router-link ${
          this.isActive() ? 'active' : ''
        } ${className}`}
        to={to}
      >
        {children}
      </Link>
    );
  }
}

export default withRouter(RouterLink);
