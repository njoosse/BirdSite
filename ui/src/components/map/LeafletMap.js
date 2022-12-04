import React from 'react';
import L from 'leaflet';
import {
    MapContainer,
    TileLayer,
} from 'react-leaflet';
import { birdData } from './birds';
import { BirdMarker } from './BirdMarker';

import './LeafletMap.css';
import 'leaflet/dist/leaflet.css';

export class LeafletMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: props.startPosition,
            zoom: props.startZoom,
        };
    }

    getBirdTable() {
        fetch("http://localhost:9000/birds")
          .then(res => res.json())
          .then(res => this.setState({'birdData': res}));
      }
      
      componentDidMount() {
        this.getBirdTable();
      }

    render() {
        return (
            <MapContainer
                className="MapContainer"
                center={this.state.position}
                zoom={this.state.zoom}
                scrollWheelZoom={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {this.state.birdData.features.map((feature, index) => {
                    return(<BirdMarker bird={feature} key={index}/>);
                })}
            </MapContainer>
        );
    }
}
