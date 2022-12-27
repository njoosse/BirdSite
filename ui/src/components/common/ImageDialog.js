import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import './ImageDialog.css';

export class ImageDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Dialog
                id="dialogWindow"
                open={this.props.open}
                onClose={this.props.onClose}
                maxWidth={false}
            >
                <div id="dialogFrame">
                    <DialogTitle className="dialogTitle">
                        {this.props.title}
                    </DialogTitle>
                    <img
                        id="img"
                        src={this.props.imgSrc}
                        alt={this.props.title}
                    />
                </div>
            </Dialog>
        );
    }
}
