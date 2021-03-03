import React, { Component } from 'react';
import {
  getKitKat,
  getCategories,
  updateKitKat,
  getCategoryId,
} from './api-utils.js';

export default class DetailPage extends Component {
  state = {
    name: '',
    description: '',
    category_id: 1,
    categories: [],
    is_flavored: false,
    size: 'regular',
    price: 1,
  };

  componentDidMount = async () => {
    const categories = await getCategories();

    const kitkat = await getKitKat(this.props.match.params.kitkatId);

    const category_id = getCategoryId(kitkat, categories);

    this.setState({
      ...kitkat,
      category_id,
      categories,
    });
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

    await updateKitKat(this.props.match.params.kitkatId, this.state);

    this.props.history.push('/kitkats');
  };

  render() {
    return (
      <div>
        DETAIL PAGE
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
              {this.state.categories.map((category) => (
                <option
                  value={category.id}
                  selected={this.state.category_id === category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Flavored?:
            <input
              value={this.state.is_flavored}
              type="checkbox"
              onChange={this.handleIsFlavoredChange}
              checked={this.state.is_flavored}
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
          <button>Update</button>
        </form>
      </div>
    );
  }
}
