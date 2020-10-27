// import TextField from '@material-ui/core/TextField';
// import React, { useState, useContext, useEffect } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import api from '../apis/ticketsApi';
// import { useHistory } from 'react-router-dom'
// import css from '../pages/try.module.css'
// import SellerContext, { useSeller } from '../SellerContext'
// import DateAndTime from '../components/Sell/dateAndTime';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import { getAllCategories } from '../apis/categoriesApi'

// export default function TicketManagement(ticketId) {
    
// const useStyles = makeStyles((theme) => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 200,
//     },

//     continer: {
//         display: "inline",
//         flexWrap: 'wrap',
//         margin: theme.spacing(1),
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//     },
//     TextField: {
//         display: "inline",
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },

// }));
// const classes = useStyles();
// const [categories, setCategories] = useState([]);
// const [dateNow,setDateNow]=useState(()=> {var now = new Date();
//     now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
//     now = now.toISOString().slice(0,16);
//     return now});
// let history = useHistory();
// const [ticket, setTicket] = useState({
//     category: "",
//     ticket_dates:new Date(),
//     ticket_title: "",
//     description: "",
//     seller_Id: "",
//     location: "",
//     price: ""
// });

// const { ticket_title, description, location, seller_Id, ticket_dates, category,
//     price } = ticket;
// const onInputChange = e => {
//     const x = e.target.value;
//     const y = e.target.name;
//     setTicket({ ...ticket, [e.target.name]: e.target.value });
// };

// const onSubmit = async e => {
//     e.preventDefault();
//     await api.createTickets(ticket);
//     history.push("/sellers/mytickets");
// };

// async function fetchData() {
//     try {
//         let categories = await getAllCategories();
//         let ticket = await 
//         setCategories(categories);
//     } catch (error) {
//         console.log(error);
//     }
// }
// useEffect(() => {
//     fetchData();
// }, []);

// return (
//     <form className="f" onSubmit={e => onSubmit(e)}>
//         <div className={css.for}>
//             <div>
//                 <h1>Sell Tickets</h1>
//             </div>
//             <div>
//                 <TextField
//                     name="ticket_title"
//                     value={ticket_title}
//                     onChange={e => onInputChange(e)}
//                     id="outlined-margin-event name" label="Event name"
//                     defaultValue="" className={classes.textField} margin="normal" variant="outlined"
//                 />
//             </div>
//             <div>
//                 <DateAndTime name="ticket_dates" value={ticket_dates}
//                     onInputChange={onInputChange} ></DateAndTime>
//             </div>
//             <div>

//                 <FormControl variant="outlined" className={classes.formControl}>
//                     <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
//                     <Select
//                         native
//                         onChange={e => onInputChange(e)}
//                         name="category_Id"
//                     >
//                         <option aria-label="None" value="" />
//                         {categories.map((category) => {
//                             return <option value={category._id}>
//                                 {category.name}</option>
//                         })}
//                     </Select>
//                 </FormControl>
//             </div>
//             <div>
//                 <TextField
//                     name="description"
//                     value={description}
//                     onChange={e => onInputChange(e)}
//                     id="outlined-full-width" label="Descripton(optional)" style={{ margin: 8 }} placeholder="..."
//                     helperText="describe the event!"
//                     fullWidth margin="normal"
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                     variant="outlined" style={{ /*margin:8,*/ width: '400px' }}
//                 /></div>
//             <div>
//                 <TextField
//                     name="location"
//                     value={location} onChange={e => onInputChange(e)}
//                     id="outlined-required" label="Location"
//                     placeholder="Venue place, City, Address" variant="outlined" className={classes.textField} margin="normal"
//                 />
//             </div>
//             <div>
//                 <TextField
//                     name="price" onChange={e => onInputChange(e)}
//                     value={price}
//                     id="outlined-required" label="How much you want to get paid per ticket?" type="number"
//                     defaultValue="..." helperText="Enter your price" variant="outlined"
//                     className={classes.textField} margin="normal"
//                 />
//             </div>
//             <div>
//                 <Button type='submit' variant="contained" color="secondary">
//                     Create
//                     </Button>
//             </div>
//         </div>
//     </form >
// );
// }
