import React, {useState} from 'react';
import SellerForm from '../components/SellerForm';
import SuccessSnackbar from '../components/SuccessSnackbar';
import Button from '@material-ui/core/Button';
import DeleteDialog from '../components/DeleteDialog';
import {deleteSeller} from '../apis/sellersApi';
import {useSeller} from '../SellerContext';
import {useHistory} from 'react-router-dom';

export default function MyAccount() {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    
    const {seller, recheck} = useSeller();
    const history = useHistory();

    const handleUpdate = () => {
        setOpenSnackBar(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };

    async function deleteHandler() {
        await deleteSeller(seller._id);
        await recheck();
        history.push('/');
    }
    
    return (
        <div className="my-tickets-container">
            <h2>My Account:</h2>
            <SellerForm editMode className="edit-account" onUpdated={handleUpdate}/>
            <Button className="delete-button" variant="contained" onClick={() => setOpenDeleteDialog(true)}>Delete Your Account</Button>
            <SuccessSnackbar
                message="Account details was updated successfully."
                open={openSnackBar}
                handleClose={handleClose}
            />
            <DeleteDialog deleteHandler={deleteHandler} open={openDeleteDialog} setOpen={setOpenDeleteDialog} />
        </div>
    )
}
