import React, {useState} from 'react';
import SellerForm from '../components/SellerForm';
import SuccessSnackbar from '../components/SuccessSnackbar';

export default function MyAccount() {
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const handleUpdate = () => {
        setOpenSnackBar(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };
    
    return (
        <div className="my-tickets-container">
            <h2>My Account:</h2>
            <SellerForm editMode className="edit-account" onUpdated={handleUpdate}/>
            <SuccessSnackbar
                message="Account details was updated successfully."
                open={openSnackBar}
                handleClose={handleClose}
            />
        </div>
    )
}
