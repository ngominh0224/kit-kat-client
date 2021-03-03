import React, { Component } from 'react';
import { getKitKats } from './api-utils.js';
import { Link } from 'react-router-dom';
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
          <Link to={`/kitkats/${kitkat.id}`} key={kitkat.name}>
            <div className="kitkats">
              <p>{kitkat.name}</p>
              <p>{kitkat.description}</p>
              <p>{kitkat.category}</p>
              <p>{kitkat.is_flavored}</p>
              <p>{kitkat.size}</p>
              <p>{kitkat.price}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
