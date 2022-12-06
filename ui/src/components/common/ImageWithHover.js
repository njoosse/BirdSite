import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import './ImageWithHover.css';

export class ImageWithHover extends React.Component {
    render() {
        const { src, altText } = this.props;

        return (
            <div id="container">
                <img id="image" src={src} alt={altText} />
                <button id="hoverButton">
                    <FontAwesomeIcon
                        id="expandIcon"
                        icon={solid('expand')}
                        size={'xl'}
                    />
                </button>
            </div>
        );
    }
}
