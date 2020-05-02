import React from 'react';

export interface ExternalLinkProps extends HTReact.HTMLProps<HTMLAnchorElement> {
  /**
   * Адрес для перехода по ссылке. Также может быть задан через стандартный параметр "href"
   */
  url?: string;
}

/**
 * Ссылка для переходов на внешнюю старницу.
 */
declare class ExternalLink extends React.Component<ExternalLinkProps> {}

export default ExternalLink;