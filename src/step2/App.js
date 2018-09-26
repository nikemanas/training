import React, { Component } from 'react';

//TODO:
//https://www.robinwieruch.de/react-fetching-data/

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class App extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

   // LifeCycle: componentWillMount -> render -> componentDidMount (REST call, Ajax) ..... componentWillUnmount
  componentWillMount() {

  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  componentWillUnmount() {  //clean cache

  }

  render() {
    const { hits } = this.state;

    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    );
  }
=======
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
        };
    }

    componentDidMount() {
        fetch(API + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => this.setState({ hits: data.hits }));
    }

    componentWillMount() {

    }
    componentWillUnMount() {

    }

    render() {
        const { hits } = this.state;

        return (
            <ul>
                {hits.map(hit =>
                    <li key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                    </li>
                )}
            </ul>
        );
    }
>>>>>>> 4b904db2828b8a2d0efa0f6ccbe6301267b06952
}

export default App;