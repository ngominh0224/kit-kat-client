import React, { Component } from 'react';
import { getKitKats } from './api-utils.js';
import Spinner from './Spinner.js';

export default class ListPage extends Component {
  state = {
    kitkats: [],
    loading: false,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const kitkats = await getKitKats();
    this.setState({
      kitkats: kitkats,
      loading: false,
    });
  };

  render() {
    return (
      <div className="list">
        {this.state.loading && <Spinner />}
        {this.state.kitkats.map((kitkat) => (
          <div className="kitkats">
            <p>{kitkat.name}</p>
            <p>{kitkat.category}</p>
            <p>{kitkat.description}</p>
            <p>{kitkat.is_flavored}</p>
            <p>{kitkat.size}</p>
            <p>{kitkat.price}</p>
          </div>
        ))}
      </div>
    );
  }
}
