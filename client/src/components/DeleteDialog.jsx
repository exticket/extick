import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteDialog({ deleteHandler, open, setOpen }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                onClick={event => event.stopPropagation()}
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This item will be removed permanently from your account.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => {e.stopPropagation(); handleClose()}} color="primary">
                        Cancel
          </Button>
                    <Button onClick={(e) => {e.stopPropagation(); handleClose(); deleteHandler() }} color="primary" autoFocus>
                        Delete
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
