import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { CustomDialog } from './Dialog';

import './ImageWithHover.css';

export class ImageWithHover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
    }
    render() {
        const { src, altText } = this.props;

        const openImageModal = () => {
            this.setState({ isModalOpen: true });
        };
        const closeImageModal = () => {
            this.setState({ isModalOpen: false });
        };

        return (
            <div id="container">
                <CustomDialog
                    id="imageDialog"
                    open={this.state.isModalOpen}
                    onClose={closeImageModal}
                    title={altText}
                    imgSrc={src}
                ></CustomDialog>
                <img id="image" src={src} alt={altText} />
                <button id="hoverButton" onClick={openImageModal}>
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
