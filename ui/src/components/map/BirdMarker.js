import { CircleMarker, Popup } from 'react-leaflet';
import React from 'react';

export class BirdMarker extends React.Component {
    render() {
        const { bird } = this.props;
        const { geometry, properties } = bird;
        const { coordinates } = geometry;
        const { name } = properties;

        const popupImage = {
            width: '242px',
            height: '162px',
        };

        return (
            <CircleMarker
                center={[coordinates[1], coordinates[0]]}
                radius={5}
                color="black"
                fillOpacity={1}
                fillColor="yellow"
            >
                <Popup>
                    <div>
                        <img style={popupImage} src={''} alt={name} />
                        <p>{name}</p>
                    </div>
                </Popup>
            </CircleMarker>
        );
    }
}
