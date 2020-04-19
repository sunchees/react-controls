import React from 'react';
import { LinkProps } from 'react-router-dom';

export interface RouterLinkProps extends LinkProps {
  /**
   * Шаблон для проверки активности ссылки. 
   * В случае, если ссылка активна, к ней применяется стиль 'active'. Если шаблон не задан, для проверки используется параметр 'props.to'.
   */
  pattern?: string;
}

/**
 * Ссылка для переходов на старницу в рамках приложения.
 * Представляет собой обертку над компонентом <Link /> из react-router-dom с добавлением стилей.
 * Содержит функционал авто-проверки активности ссылки.
 */
declare class RouterLink extends React.Component<RouterLinkProps> {}

export default RouterLink;