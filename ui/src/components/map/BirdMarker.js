import { CircleMarker, Popup } from 'react-leaflet';
import { ImageWithHover } from '../common/ImageWithHover';
import React from 'react';

export class BirdMarker extends React.Component {
    render() {
        const { bird } = this.props;
        const { geometry, properties, id } = bird;
        const { coordinates } = geometry;
        const { name } = properties;

        return (
            <CircleMarker
                center={[coordinates[1], coordinates[0]]}
                radius={5}
                color="black"
                fillOpacity={1}
                fillColor="yellow"
            >
                <Popup>
                    <ImageWithHover
                        src={new URL('http://localhost:9000/birds/image/' + id)}
                        altText={name}
                    />
                    <p>{name}</p>
                </Popup>
            </CircleMarker>
        );
    }
}
