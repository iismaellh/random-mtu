import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

const withFetching = (url) => (Comp) =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        loading: false,
        error: null
      };
    }

    componentDidMount() {
      this.setState({ loading: true });

      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ data, loading: false }))
        .catch(error => this.setState({ error, loading: false }));
    }

    render() {
      return <Comp { ...this.props } { ...this.state } />
    }
  }

  export default withFetching;