import React from 'react';
import autobind from 'autobind-decorator';
import ReactHeight from 'react-height';
import Scrollbar from '../scrollbar';

class InnerContentHeightScrollbar extends React.Component {
  @autobind
  onHeightReady(height) {
    if (this.container) this.container.style.height = `${height}px`;
  }

  @autobind
  setRef(scrollbar) {
    this.scrollbar = scrollbar;
    this.container = scrollbar ? scrollbar.container : null;

    if (this.props.forwardRef) this.props.forwardRef(scrollbar);
  }

  render() {
    const { className = '', children, forwardRef, ...props } = this.props;

    return (
      <Scrollbar
        className={`content-height-scrollbar ${className}`}
        ref={this.setRef}
        {...props}
      >
        <ReactHeight onHeightReady={this.onHeightReady}>{children}</ReactHeight>
      </Scrollbar>
    );
  }
}

/**
 * Компонент-обертка, добавляющий к контенту скроллбар.
 * <br>
 * Представляет собой обертку над компонентом [Scrollbar](/#scrollbar).
 * <br>
 * Высота скроллбара будет автоматически подстроена под высоту контента.
 * <br>
 * Данный компонент наиболее применим в случае, когда необходимо отобразить список элементов, минимальная высота которого всегда равна высоте контента, но максимальная высота ограничена внешними стилями (через max-height).
 */
const ContentHeightScrollbar = React.forwardRef((props, ref) => (
  <InnerContentHeightScrollbar {...props} forwardRef={ref} />
));

export default ContentHeightScrollbar;
