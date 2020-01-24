import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Modal from './modal';
import { KEY_CODE } from '../../../const';

const CLOSE_MODAL_ADDITIONAL_CLASSES = [];

export default class ModalContainer extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  @autobind
  onMouseDown(e) {
    this.down = e.target;
  }

  @autobind
  onMouseUp(e) {
    if (
      this.down === e.target &&
      (e.target.className === `modal ${this.props.className}` ||
        CLOSE_MODAL_ADDITIONAL_CLASSES.includes(e.target.className))
    )
      if (this.props.closeModal) this.props.closeModal(); // Проверка нужна для функционального тестирования незаверстанных модалок.
  }

  @autobind
  onKeyDown(e) {
    if (e.keyCode === KEY_CODE.ESCAPE) this.props.closeModal();
    if (this.props.onKeyDown) this.props.onKeyDown(e);
  }

  render() {
    return (
      <Modal
        className={this.props.className}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        header={this.props.header}
        closeModal={this.props.closeModal}
      >
        {this.props.children}
      </Modal>
    );
  }
}

ModalContainer.propTypes = {
  className: PropTypes.string,
  closeModal: PropTypes.func,
  children: PropTypes.node,
  onKeyDown: PropTypes.func
};

ModalContainer.defaultProps = {
  className: ''
};
