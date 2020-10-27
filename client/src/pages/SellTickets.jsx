import TextField from '@material-ui/core/TextField';
import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import api from '../apis/ticketsApi';
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

export default function SellTickets() {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const { seller } = useContext(SellerContext);
    const [dateNow,setDateNow]=useState(()=> {var now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        now = now.toISOString().slice(0,16);
        return now});
    var sellerId = ""
    if (seller) {
        sellerId = seller._id
    }
    let history = useHistory();
    const [ticket, setTicket] = useState({
        category_Id: "",
        ticket_dates:dateNow,
        ticket_title: "",
        description: "",
        seller_Id: sellerId,
        location: "",
        price: ""
    });

    const { ticket_title, description, location, seller_Id, ticket_dates, category_Id,
        price } = ticket;
    const onInputChange = e => {
    const x = e.target.name;
    const y = e.target.value;
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await api.createTickets(ticket);
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
        <form className="f" onSubmit={e => onSubmit(e)}>
            <div className={css.for}>
                <div>
                    <h1>Sell Tickets</h1>
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
                    <DateAndTime name="ticket_dates" value={ticket_dates}
                        onInputChange={onInputChange} ></DateAndTime>
                </div>
                <div>

                    <FormControl variant="outlined" className={classes.formControl}>
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
                    /></div>
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
                        Create
                        </Button>
                </div>
            </div>
        </form >
    );
}

// }


// import React, { useState } from 'react';
// // import styles from './SellTicketTryout';
// import styles from './try.module.css';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { camelCaseToSentence } from '../utils';
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import { createTickets } from '../apis/ticketsApi';
// import { allCatgories } from '../apis/catgory';
// import date from '../components/Sell/DatePicker';
// import DatePicker from 'react-datepicker';
// import Timepicker from '../components/Sell/TimePicker';


// class Add extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             category: "",
//             eventName: "",
//             description: "",
//             location: "",
//             date: "",
//             hour: "",
//             price: "",
//         }
//     }
//     handleChangeInputCategory = async event => {
//         const category = event.target.value
//         this.setState({ category: category })
//     }

//     handleChangeInputEventName = async event => {
//         const eventName = event.target.value
//         this.setState({ eventName: eventName })
//     }

//     handleChangeInputDescription = async event => {
//         const description = event.target.value
//         this.setState({ description: description })
//     }

//     handleChangeInputLocation = async event => {
//         const location = event.target.value
//         this.setState({ location: location })
//     }
//     handleAddTicket = async () => {
//         const { category, eventName, description, location } = this.state
//         const payload = { category, eventName, description, location }

//         await createTickets.createTickets(payload).then(res => {
//             window.alert(`ticket inserted successfully`)
//             this.setState({
//                 category: "",
//                 eventName: "",
//                 description: "",
//                 location: "",
//                 date: "",
//                 hour: "",
//                 price: "",
//             })
//         })
//     }
//     render() {
//         const { category, eventName, description, location } = this.state
//         return (
//             <form>
//                 <h1>Create New Ticket</h1>
//                 <div className={styles.formContainer}>
//                     <h1>Sell ticket</h1>
//                     <form noValidate onSubmit={onSubmitHandler}>
//                         <Autocomplete
//                             options={allCatgories}
//                             getOptionLabel={(option) => option.name}
//                             onChange={(event, dropdownOption) => onChangeHandler(event, dropdownOption)}
//                             renderInput={(params) => {
//                                 const inputProps = params.inputProps;
//                                 inputProps.autocomplete = "new-password";
//                                 return (
//                                     <TextField {...params} onBlur={onChangeHandler} className={categoryErorr === "" ? styles.success : null} inputProps={inputProps} error={isThereInError(categoryErorr)} helperText={categoryErorr} required label="Category" variant="outlined" name="category" />
//                                 )
//                             }}
//                         />
//                         <TextField autoComplete="on" onChange={this.handleChangeInputEventName}  type="text" value={eventName} error={isThereInError(eventNameErorr)}  required variant="outlined" label="Event Name" name="eventName" />
//                         <TextField className={descriptionErorr === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(descriptionErorr)} helperText={descriptionErorr} required variant="outlined" label="Description" name="description" />
//                         <TextField className={locationErorr === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(locationErorr)} helperText={locationErorr} required variant="outlined" label="Location" name="location" />
//                         < DatePicker className={dateErorr === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(dateErorr)} helperText={dateErorr} required variant="outlined" label="Select Date" name="date"/>
//                         <TextField className={hourErorr === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(hourErorr)} helperText={hourErorr} required variant="outlined" label="Select Hour" name="hour" />
//                         <TextField className={priceErorr === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(priceErorr)} helperText={priceErorr} required variant="outlined" label="How much you want to get paid per ticket" name="price" />
//                         <Button type="submit">Create</Button>
//                     </form>
//                 </div>
//                 <label>First Name: </label>
//                 <TextField
//                     type="text"
//                     value={eventName}
//                     onChange={this.handleChangeInputEventName}
//                 /> 
//                 {/* <Label>Last Name: </Label>
//                 <InputText
//                     type="text"
//                     value={last_name}
//                     onChange={this.handleChangeInputLastName}
//                 />
//                 <Label>Class: </Label>
//                 <InputText
//                     type="text"
//                     value={student_class}
//                     onChange={this.handleChangeInputClass}
//                 />
//                 <Label>Lessons: </Label>
//                 <InputText
//                     type="text"
//                     value={lessons}
//                     onChange={this.handleChangeInputLessons}
//                 />

//                 <Button onClick={this.handleAddStudent}>Add New Student</Button>
//                 <CancelButton href={'/students/data'}>Cancel</CancelButton> */}
//             </form>
//         )
//     }
// }
// export default Add;


// export default function SellTicket() {

//     const [formData, setFormData] = useState({
//         category: "",
//         eventName: "",
//         description: "",
//         location: "",
//         date: "",
//         hour: "",
//         price: "",
//     });

//     const [errorMessages, setErrorMessages] = useState({
//         category: null,
//         eventName: null,
//         description: null,
//         location: null,
//         date: null,
//         hour: null,
//         price: null,
//     })

//     function updateFormData(event, dropdownOption) {
//         let { name, value } = event.target;

//         if (dropdownOption || !name) {
//             name = "category";
//             value = dropdownOption ? dropdownOption.name : "";
//         }

//         setFormData(prevData => { return { ...prevData, [name]: value }; });
//     }

//     function validateField(event, dropdownOption) {
//         let { value, name } = event.target;

//         if (dropdownOption || !name) {
//             name = "category";
//             value = dropdownOption ? dropdownOption.name : "";
//         }

//         let errorMessage = null;

//         //     if (isEmpty(value, { ignore_whitespace: true })) {
//         //         errorMessage = `${camelCaseToSentence([name] + '')} is required`;
//         //     }
//         //     else {
//         //         switch (name) {
//         //             case "eventName":
//         //                 if (!isEmail(value)) {
//         //                     errorMessage = 'Please enter a valid email.';
//         //                 }
//         //                 break;
//         //             case "password":
//         //                 if (!value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\W]{6,}/g)) {
//         //                     errorMessage = 'At least 6 characters, one uppercase, one lowercase and one digit.';
//         //                 }
//         //                 if(errorMessages.confirmPassword === "") {
//         //                     setErrorMessages(prevErrors => {return {...prevErrors, confirmPassword:"Passwords don't match."}});
//         //                 }
//         //                 else if(errorMessages.confirmPassword != null && value === formData.confirmPassword) {
//         //                     setErrorMessages(prevErrors => {return {...prevErrors, confirmPassword:""}});
//         //                 }
//         //                 break;
//         //             case "confirmPassword":
//         //                 if (value !== formData.password) {
//         //                     errorMessage = `Passwords don't match.`;
//         //                 }
//         //                 break;
//         //             case "phoneNumber":
//         //                 if (!isMobilePhone(value, 'he-IL')) {
//         //                     errorMessage = 'Please enter a valid phone number.';
//         //                 }
//         //                 break;
//         //             default:
//         //         }
//         //     }

//         setErrorMessages(prevData => { return { ...prevData, [name]: errorMessage ? errorMessage : "" } });
//     }

//     function isValidationsDone() {
//         for (const field in errorMessages) {
//             if (errorMessages[field] !== "")
//                 return false;
//         }
//         return true;
//     }

//     function isThereInError(errorMessage) {
//         if (errorMessage === null) return false;
//         if (errorMessage === "") return false;
//         return true;
//     }

//     function onChangeHandler(event, dropdownOption) {
//         updateFormData(event, dropdownOption);
//         validateField(event, dropdownOption);
//     }

//     async function onSubmitHandler(event) {
//         event.preventDefault();
//         try {
//             const ticketId = await createTickets({
//                 category: formData.category,
//                 eventName: formData.eventName,
//                 description: formData.description,
//                 location: formData.location,
//                 date: formData.date,
//                 hour: formData.hour,
//                 price: formData.price,
//             })
//             console.log(ticketId);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const {
//         category: categoryErorr,
//         eventName: eventNameErorr,
//         description: descriptionErorr,
//         location: locationErorr,
//         date: dateErorr,
//         hour: hourErorr,
//         price: priceErorr,
//     } = errorMessages;

//     return (
//         <div className={styles.formContainer}>
//             <h1>Sell ticket</h1>
//             <form noValidate onSubmit={onSubmitHandler}>
//                 <Autocomplete
//                     options={allCatgories}
//                     getOptionLabel={(option) => option.name}
//                     onChange={(event, dropdownOption) => onChangeHandler(event, dropdownOption)}
//                     renderInput={(params) => {
//                         const inputProps = params.inputProps;
//                         inputProps.autocomplete = "new-password";
//                         return (
//                             <TextField {...params} onBlur={onChangeHandler} className={categoryErorr === "" ? styles.success : null} inputProps={inputProps} error={isThereInError(categoryErorr)} helperText={categoryErorr} required label="Category" variant="outlined" name="category" />
//                         )
//                     }}
//                 />
//                 <TextField className={eventNameErorr === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(eventNameErorr)} helperText={eventNameErorr} required variant="outlined" label="Event Name" name="eventName" />
//                 <TextField className={descriptionErorr === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(descriptionErorr)} helperText={descriptionErorr} required variant="outlined" label="Description" name="description" />
//                 <TextField className={locationErorr === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(locationErorr)} helperText={locationErorr} required variant="outlined" label="Location" name="location" />
//                 < DatePicker className={dateErorr === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(dateErorr)} helperText={dateErorr} required variant="outlined" label="Select Date" name="date"
//                 />
//                 <TextField className={hourErorr === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(hourErorr)} helperText={hourErorr} required variant="outlined" label="Select Hour" name="hour" />
//                 <TextField className={priceErorr === "" ? styles.success : null} autoComplete="on" onChange={onChangeHandler} error={isThereInError(priceErorr)} helperText={priceErorr} required variant="outlined" label="How much you want to get paid per ticket" name="price" />
//                 <Button type="submit">Create</Button>
//             </form>
//         </div>
//     )
// }
