import TextField from '@material-ui/core/TextField';
import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {updateTicket} from '../apis/ticketsApi';
import { useHistory } from 'react-router-dom'
import css from '../pages/try.module.css'
import SellerContext, { useSeller } from '../SellerContext'
import DateAndTime from '../components/Sell/dateAndTime';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getAllCategories } from '../apis/categoriesApi'
import { getTicketById } from '../apis/ticketsApi';
import { getDate } from 'date-fns';



const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },

    continer: {
        display: "inline",
        flexWrap: 'wrap',
        margin: theme.spacing(1),
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    TextField: {
        display: "inline",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function TicketManagement({match})  {
    const classes = useStyles();

    const [ticket, setTicket] = useState({ category_Id: "",
    ticket_dates:"",
    ticket_title: "",
    description: "",
    seller_Id: "",
    location: "",
    price: ""});
    const [categories, setCategories] = useState([]);
    const[category,setCategory]=useState("");
    
    async function fetchData() {
        try {
            let categories = await getAllCategories();
            setCategories(categories);
        } catch (error) {
            console.log(error);
        }
    }

    async function getTicket(){
        await getTicketById(match.params.id)
        .then(ticket => setTicket(ticket)).then(setCategory(ticket.category_Id))
        .catch(error => console.log(error));
        
    }

    useEffect(() => {
        getTicket();
    }, [match])
  
    useEffect(() => {
        fetchData();
    }, []);


    let history = useHistory();
    const { ticket_title, description, location, seller_Id, ticket_dates, category_Id,
        price } = ticket;

    const onInputChange = e => {
                setTicket({ ...ticket, [e.target.name]: e.target.value });
    };
    const onSubmit = async e => {
        e.preventDefault();
        let  x = ticket
        await updateTicket(ticket,ticket._id);
        history.push("/sellers/mytickets");
    };
    function getDate(){
        var now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        now = now.toISOString().slice(0,16);
        return now}

    function getCategory(){
            const result = categories.filter(category => category.category_Id === category_Id);
            return result.name
    }

    return (
        <form className="tickets-container" onSubmit={e => onSubmit(e)}>
            <div className={css.for}>
                <div>
                    <h1>Edit Tickets</h1>
                </div>
                
                    <div>
                    <TextField
                        name="ticket_title"
                        value={ticket_title}
                        onChange={e => onInputChange(e)}
                        id="outlined-margin-event name" label="Event name"
                        defaultValue="" className={classes.textField} margin="normal" variant="outlined"
                    />
                </div>
                    <div>
                    <DateAndTime name="ticket_dates" value={getDate()}
                        onInputChange={onInputChange} ></DateAndTime>
                </div>
                <div>
                <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                        <Select
                            native
                            onChange={e => onInputChange(e)}
                            name="category_Id"
                            value={category_Id}
                        >
                            <option aria-label="None" value={category} >{category.name}</option>
                            {categories.map((category) => {
                                return <option value={category._id}>
                                    {category.name}</option>
                            })}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <TextField
                        name="description"
                        value={description}
                        onChange={e => onInputChange(e)}
                        id="outlined-full-width" label="Descripton(optional)" style={{ margin: 8 }} placeholder="..."
                        helperText="describe the event!"
                        fullWidth margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined" style={{ /*margin:8,*/ width: '400px' }}
                    />
                    </div>


                <div>
                    <TextField
                        name="location"
                        value={location} onChange={e => onInputChange(e)}
                        id="outlined-required" label="Location"
                        placeholder="Venue place, City, Address" variant="outlined" className={classes.textField} margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        name="price" onChange={e => onInputChange(e)}
                        value={price}
                        id="outlined-required" label="How much you want to get paid per ticket?" type="number"
                        defaultValue="..." helperText="Enter your price" variant="outlined"
                        className={classes.textField} margin="normal"
                    />
                </div>
                <div>
                    <Button type='submit' variant="contained" color="secondary">
                        Edit
                        </Button>
                </div>
            </div>
        </form >
    );
}



