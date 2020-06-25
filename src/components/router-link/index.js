import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath, Link } from 'react-router-dom';
import './router-link.css';

/**
 * Ссылка для переходов на старницу в рамках приложения.
 * Представляет собой обертку над компонентом Link из react-router-dom с добавлением стилей.
 * Содержит функционал авто-проверки активности ссылки.
 */
class _RouterLink extends React.PureComponent {
  isActive() {
    const path = this.props.pattern || this.props.to;
    return !!matchPath(this.props.location.pathname, {
      path
    });
  }

  render() {
    const {
      className = '',
      children,
      pattern,
      location,
      history,
      staticContext,
      ...props
    } = this.props;

    return (
      <Link
        {...props}
        className={`router-link ${
          this.isActive() ? 'active' : ''
        } ${className}`}
      >
        {children}
      </Link>
    );
  }
}

const RouterLink = withRouter(_RouterLink);

export default RouterLink;

RouterLink.propTypes = {
  /**
   * Шаблон для проверки активности ссылки.
   * <br>
   * В случае, если ссылка активна, к ней применяется стиль 'active'. Если шаблон не задан, для проверки используется параметр 'props.to'.
   */
  pattern: PropTypes.string
};
