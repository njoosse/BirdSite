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
    render() {
        return (
            <MapContainer
                className="MapContainer"
                center={this.props.position}
                zoom={17}
                scrollWheelZoom={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {birdData.features.map((feature, index) => {
                    return(<BirdMarker bird={feature} key={index}/>);
                })}
            </MapContainer>
        );
    }
}
