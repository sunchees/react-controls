import React from 'react';
import PropTypes from 'prop-types';
import './external-link.css';

/**
 * Ссылка для переходов на внешнюю старницу.
 */
const ExternalLink = ({
  className = '',
  url,
  target = '_blank',
  children,
  ...props
}) => (
  <a
    className={`external-link ${className}`}
    href={url}
    target={target}
    rel='noopener noreferrer'
    {...props}
  >
    {children}
  </a>
);

ExternalLink.propTypes = {
  /**
   * Адрес для перехода по ссылке. Также может быть задан через стандартный параметр "href"
   */
  url: PropTypes.string
};

export default ExternalLink;