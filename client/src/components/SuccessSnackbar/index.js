import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import styles from './SuccessSnackbar.module.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SuccessSnackbar({message, open, handleClose}) {
    
    return (
        <div className={styles.snackbar}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}