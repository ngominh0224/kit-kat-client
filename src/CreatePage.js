import React, { Component } from 'react';
import { makeKitkat } from './api-utils.js';

export default class CreatePage extends Component {
  state = {
    name: '',
    description: '',
    category_id: 1,
    is_flavored: false,
    size: 'regular',
    price: 1,
  };

  handleNameChange = (e) => this.setState({ name: e.target.value });

  handleDescriptionChange = (e) =>
    this.setState({ description: e.target.value });

  handleCategoryChange = (e) =>
    this.setState({ category: Number(e.target.value) });

  handleIsFlavoredChange = (e) =>
    this.setState({
      is_flavored: !this.state.is_flavored,
    });

  handleSizeChange = (e) => this.setState({ size: e.target.value });

  handlePriceChange = (e) => this.setState({ price: Number(e.target.value) });

  handleSubmit = async (e) => {
    e.preventDefault();

    await makeKitkat(this.state);

    this.props.history.push('/kitkats');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Kit-Kat Name:
            <input value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label>
            Description:
            <input
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </label>
          <label>
            Category:
            <select
              value={this.state.category}
              onChange={this.handleCategoryChange}
            >
              <option value={1}>Classic</option>
              <option value={2}>Unique</option>
            </select>
          </label>
          <label>
            Flavored?:
            <input
              value={this.state.is_flavored}
              type="checkbox"
              onChange={this.handleIsFlavoredChange}
            />
          </label>
          <label>
            Size:
            <input value={this.state.size} onChange={this.handleSizeChange} />
          </label>
          <label>
            Price:
            <input
              value={this.state.price}
              type="number"
              onChange={this.handlePriceChange}
            />
          </label>
          <button>Create</button>
        </form>
      </div>
    );
  }
}
