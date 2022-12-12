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
            map: React.createRef(),
        };
    }

    getBirdTable() {
        fetch('http://localhost:9000/birds')
            .then((res) => res.json())
            .then((res) => this.setState({ birdData: res }))
            .then((res) => this.getPointExtent());
    }

    getPointExtent() {
        console.log(this.state.birdData);
        // initialize the values at the opposite so we get the minimum bounding box
        let minX = 180;
        let minY = 90;
        let maxX = -180;
        let maxY = -90;

        this.state.birdData.features.forEach((feature) => {
            minX = Math.min(minX, feature.geometry.coordinates[0]);
            minY = Math.min(minY, feature.geometry.coordinates[1]);
            maxX = Math.max(maxX, feature.geometry.coordinates[0]);
            maxY = Math.max(maxY, feature.geometry.coordinates[1]);
        });

        let bounds = [
            [minY, minX],
            [maxY, maxX],
        ];
        this.state.map.current.fitBounds(bounds);
    }

    componentDidMount() {
        this.getBirdTable();
    }

    render() {
        return (
            <MapContainer
                ref={this.state.map}
                className="MapContainer"
                center={this.state.position}
                zoom={this.state.zoom}
                bounds={this.state.bounds}
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
