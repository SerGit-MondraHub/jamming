
import React from 'react';
import './App.css';

//COMPONENTS:
/*
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
*/

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      searchResults:[
        {
          name:'Malagracia',
          artist:'Paniqum',
          album:'Operetta',
          id:1
        }
      ]
    };
  }


  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <SearchBar /> */}
        <div className="App-playlist">
          {/* <SearchResults /> */}
          {/* <Playlist /> */}
        </div>
      </div>
    </div>
  );

}

export default App;
