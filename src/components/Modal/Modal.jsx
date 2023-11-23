import css from './Modal.module.css';
import { Component } from 'react';

export class Modal extends Component {
  backDropClose = event => {
    if (event.target === event.currentTarget) {
      this.props.close();
    }
  };

  onEscClose = event => {
    if (event.code === 'Escape') {
      this.props.close();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onEscClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscClose);
  }

  render() {
    const { close } = this.props;
    return (
      <div onClick={close} className={css.overlay}>
        <div className={css.modal}>
          <img src={this.props.currentImage} alt="" />
        </div>
      </div>
    );
  }
}
