import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http'; 
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, gql } from 'apollo-boost';
import SearchBox from './components/SearchBox/SearchBox';
import Cameras from './components/Cameras/Cameras';
import FilteredCameras from './components/FilteredCameras/FilteredCameras';

import './App.css';

const httpLink = createHttpLink({
  uri: 'https://take-home-test-gql.herokuapp.com/query'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
}) 

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      card:[],
      searchField: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    client.query({
      query: gql`
      {
        works {
          id
          filename
          exif {
            model
            make
          }
          urls {
            type
            link
          }
        }
      }
      `
    })
    .then(res => {
      this.setState({ card: res.data.works })
    })
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render () {
    const { card, searchField } =this.state;
    const filteredWork = card.filter(item => 
      item.exif.model.toLowerCase().includes(searchField.toLocaleLowerCase())
      || item.exif.make.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
  
    return (
      <ApolloProvider client={client}>
      <h1 className='h1'>Camera Model and Make</h1>
      <SearchBox placeholder='Type the model and make' handleChange={this.handleChange} />
      <div className="App">
        {searchField ? <FilteredCameras work={filteredWork} /> : <Cameras /> }
      </div>
    </ApolloProvider>
    )
  }
};

export default App;
