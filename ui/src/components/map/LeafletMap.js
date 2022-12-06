import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { BirdMarker } from './BirdMarker';

import './LeafletMap.css';
import 'leaflet/dist/leaflet.css';

export class LeafletMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: props.startPosition,
            zoom: props.startZoom,
            birdData: { features: [] },
        };
    }

    getBirdTable() {
        fetch('http://localhost:9000/birds')
            .then((res) => res.json())
            .then((res) => this.setState({ birdData: res }));
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
                scrollWheelZoom={true}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {this.state.birdData.features.map((feature) => {
                    return <BirdMarker bird={feature} key={feature.id} />;
                })}
            </MapContainer>
        );
    }
}
