import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  backDropClose = event => {
    event.target === event.currentTarget && this.props.onClose();
  };

  onEscClose = event => {
    event.code === 'Escape' && this.props.onClose();
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onEscClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscClose);
  }

  render() {
    // const { close } = this.props;
    return (
      <div onClick={this.backDropClose} className={css.overlay}>
        <div className={css.modal}>
          <img src={this.props.currentImage} alt="" />
        </div>
      </div>
    );
  }
}
