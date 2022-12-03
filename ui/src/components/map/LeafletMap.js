import React from "react";
import L from 'leaflet';
import {
    MapContainer,
    TileLayer,
    GeoJSON,
    Marker,
} from 'react-leaflet'
import {birdData} from './birds';

import './LeafletMap.css';
import 'leaflet/dist/leaflet.css';

export class LeafletMap extends React.Component {
    geoJsonStyle(feature) {
        return {
            // the fillColor is adapted from a property which can be changed by the user (segment)
            fillColor: 'lightblue',
            weight: 0.3,
            //stroke-width: to have a constant width on the screen need to adapt with scale 
            opacity: 1,
            color: 'blue',
            dashArray: '3',
            fillOpacity: 0.5
        };
      };

    PointStyle(feature) {
        return {color: 'lightblue'};
    }
    RenderPoints(feature, layer){
        return L.circleMarker(layer, {
            radius: 8,
            fillColor: "yellow",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
    GeoJSONPopup(feature, layer) {
        // layer.bindPopup("<img src={require('./birdData/"+feature.properties.imagePath+"')} width='100' height='100'>");
        layer.bindPopup(feature.properties.name+"</br><button @click=ShowImage()>Show Image</button>");
    }
    render() {
        // this.position = [51.505, -0.09];
        return (
                <MapContainer className="MapContainer" center={this.props.position} zoom={17} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <GeoJSON data={birdData} pointToLayer={this.RenderPoints} onEachFeature={this.GeoJSONPopup} />
                </MapContainer>
        );
    }
}
