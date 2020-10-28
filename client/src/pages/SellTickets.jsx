import TextField from '@material-ui/core/TextField';
import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createTickets } from '../apis/ticketsApi';
import { useHistory } from 'react-router-dom'
import css from '../pages/try.module.css'
import SellerContext, { useSeller } from '../SellerContext'
import DateAndTime from '../components/Sell/dateAndTime';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getAllCategories } from '../apis/categoriesApi'


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(1),
        width: '40ch'
    },

    continer: {
        display: "inline",
        flexWrap: 'wrap',
        margin: theme.spacing(2),
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    TextField: {
        display: "inline",       


    },
    formControl: {
        margin: theme.spacing(4),


    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SellTickets() {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const { seller } = useContext(SellerContext);
    const [dateNow, setDateNow] = useState(() => {
        var now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        now = now.toISOString().slice(0, 16);
        return now
    });
    var sellerId = ""
    if (seller) {
        sellerId = seller._id
    }
    let history = useHistory();
    const [ticket, setTicket] = useState({
        category_Id: "",
        ticket_dates: dateNow,
        ticket_title: "",
        description: "",
        seller_Id: sellerId,
        location: "",
        price: ""
    });

    const { ticket_title, description, location, seller_Id, ticket_dates, category_Id,
        price } = ticket;
    const onInputChange = e => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await createTickets(ticket);
        history.push("/sellers/mytickets");
    };

    async function fetchData() {
        try {
            let categories = await getAllCategories();
            setCategories(categories);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <form className="tickets-container" onSubmit={e => onSubmit(e)}>
            <div className={css.for}>
                <div>
                    <h1 className="h1">Create Ticket</h1>
                </div>

                <div className="item">
                    <TextField
                        name="ticket_title"
                        value={ticket_title}
                        onChange={e => onInputChange(e)}
                        id="outlined-margin-event name" label="Event name"
                        defaultValue="" className={classes.textField} margin="normal" variant="outlined"
                    />
                    <DateAndTime name="ticket_dates" value={ticket_dates}
                        style={
                            { marginBottom: 40 }
                        }
                        onInputChange={onInputChange} ></DateAndTime>
                </div>
                <div className="item">
                    <FormControl 
                        variant="outlined" style={{ marginLeft: 22, marginBottom: 40,width: '350px' }} className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                        <Select
                            native
                            onChange={e => onInputChange(e)}
                            name="category_Id"

                        >
                            <option aria-label="None" value="" />
                            {categories.map((category) => {
                                return <option value={category._id}>
                                    {category.name}</option>
                            })}
                        </Select>
                    </FormControl>
                    <TextField 
                        name="description"
                        value={description}
                        onChange={e => onInputChange(e)}
                        id="outlined-full-width" label="Descripton(optional)" style={{ margin: 8 }} placeholder="Row, Seat ect'..."
                        helperText="Describe the event!"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined" style={{ width: '350px' }}
                    />
                </div>
                <div className="item">
                    <TextField
                        name="location"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={location} onChange={e => onInputChange(e)}
                        id="outlined-full-width" label="Location"
                        placeholder="Venue place, City, Address" variant="outlined" className={classes.textField} margin="normal"
                    />

                    <TextField
                        name="price" onChange={e => onInputChange(e)}
                        value={price}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        id="outlined-required" label="How much you want to get paid per ticket?" type="number"
                        placeholder="100₪" helperText="Enter your price" variant="outlined"
                        className={classes.textField} margin="normal"
                    />
                </div>
                <div className="btnA">
                    <Button type='submit' variant="contained" color="secondary" width='200px'>
                        Create
                        </Button>
                </div>
            </div>
        </form >
    );
}

