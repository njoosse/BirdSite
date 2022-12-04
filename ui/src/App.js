import './App.css';

import React from 'react';

import { LeafletMap } from './components/map/LeafletMap';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LeafletMap startPosition={[43.5385, -80.2415]} startZoom={17} />
      </div>
    );
  }
}
