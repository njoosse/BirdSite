import { CircleMarker, Popup } from 'react-leaflet';
import React from 'react';

export class BirdMarker extends React.Component {
    render() {
        const { bird } = this.props;
        const { geometry, properties, id } = bird;
        const { coordinates } = geometry;
        const { name } = properties;

        const popupImage = {
            width: '242px',
            height: '162px',
        };

        // TODO: only load image when popup is opened
        return (
            <CircleMarker
                center={[coordinates[1], coordinates[0]]}
                radius={5}
                color="black"
                fillOpacity={1}
                fillColor="yellow"
            >
                <Popup>
                    <img
                        style={popupImage}
                        src={new URL('http://localhost:9000/birds/image/' + id)}
                        alt={name}
                    />
                    <p>{name}</p>
                </Popup>
            </CircleMarker>
        );
    }
}
