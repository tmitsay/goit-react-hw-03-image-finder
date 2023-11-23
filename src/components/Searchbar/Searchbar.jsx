import { Component } from 'react';
import css from './searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  onSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <header className={css.searchbar}>
        <form onSubmit={this.onSubmitForm} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.span}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            value={value}
            name="nameSeach"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}
