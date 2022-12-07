import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import './Dialog.css';

export class CustomDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose}>
                <div id="dialogFrame">
                    <DialogTitle class="dialogTitle">
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
