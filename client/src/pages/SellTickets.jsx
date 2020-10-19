<<<<<<< HEAD
=======
// // import React, { Component } from 'react'
// // import Date from '../components/Sell/DatePicker';
// // // function SellTickets() {
// // //     return (
// // //         <div>
// // //             <h1>Sell Tickets</h1>
// // //             <Event/>
// // //             <Date/>
// // //             <TimePicker/>
// // //         </div>
// // //     )
// // // }
// // // export default SellTickets;


>>>>>>> aeb561f4789e6b8bb7d430825f9cdff7d70349ab
// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Date from '../components/Sell/DatePicker';
// import Dropdown from '../components/Sell/Category';


// const useStyles = makeStyles((theme) => ({
//   root: {
   
//     display: 'flex',
//     flexWrap: 'wrap',
//     margin: theme.spacing(1),
<<<<<<< HEAD

//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: '25ch',
//   },
// }));
=======
>>>>>>> aeb561f4789e6b8bb7d430825f9cdff7d70349ab

//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: '25ch',
//   },
// }));


<<<<<<< HEAD
// export default function LayoutTextFields() {
//   const classes = useStyles();

=======

// export default function LayoutTextFields() {
//   const classes = useStyles();

>>>>>>> aeb561f4789e6b8bb7d430825f9cdff7d70349ab
//   return (
//     <div className={classes.root}>
//       <form action="">
//       <div>
//       <h1>Sell Tickets</h1>
      
//         <TextField          
//           label="Catgoery"
//           id="outlined-required"
//           defaultValue={<Date/>}
//           className={classes.textField}
//           margin="normal"
//           variant="outlined"
//           Dropdown
//         />
//         <Dropdown/>
//         <Date/>

//          <TextField
//           id="outlined-margin-event name"
//           label="Event name"
//           defaultValue=""
//           className={classes.textField}
//           margin="normal"
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-full-width"
//           label="Descripton(optional)"
//           style={{ margin: 8 }}
//           placeholder="..."
//           helperText="describe the event!"
//           fullWidth
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="outlined"
//           // style={{ /margin:8,/ width: '400px'}}

//         />
//          <TextField
//           id="outlined-required"
//           label="Location"
//           defaultValue="..."
//           variant="outlined"
//           className={classes.textField}
//           margin="normal"
//         />
//         <TextField
//           id="outlined-required"
//           label="Select Date"
//           defaultValue="..."
//           variant="outlined"
//           className={classes.textField}
//           margin="normal"
//         />
//         <TextField
//           id="outlined-required"
//           label="How much you want to get paid per ticket?"
//           defaultValue="..."
//           helperText="Enter your price"
//           variant="outlined"
//           className={classes.textField}
//           margin="normal"
//         />
//       </div>
//       </form>
//     </div>
//   );
// }


// import React, { Component } from 'react'
// import Date from '../components/Sell/DatePicker';
// import Event from '../components/Sell/EventName';
// import TimePicker from '../components/Sell/TimePicker';

// function SellTickets() {
//     return (
//         <div>
//             <h1>Sell Tickets</h1>
//             <Event/>
// import React, { Component } from 'react'
// import Date from '../components/Sell/DatePicker';
// import React, { Component } from 'react';
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

// class SellTickets extends Component {
//     constructor() {
//       super();
//       this.state = {
//         category_Id: '',
//         location: '',
//         eventName: '',
//         time: '',
//         ticket_dates: '',
//         price: '',
//         seats:'',
//         row:"",
//         seller_Id:"",
//         description:"",
//       };
//       this.dismissError = this.dismissError.bind(this);
//     }

//     dismissError() {
//       this.setState({ error: '' });
//     }

//     render() {
//         return (
//         <div className="SellTicket">

//          <form> 
//              <h1>Sell Ticket Page</h1>

//             <label for="chooseCategory">Category:</label>
//             <input placeholder="choose category"  type="text"/>

//             <label for="location">Location:</label>
//             <input placeholder="location" type="text"/>

//             <label for="eventName">Event Name:</label>
//             <input placeholder="eventName" data-test="eventName" type="text"/> 

//             <label for="appt">Select a time:</label>
//             <input type="time" id="appt" />
//               <button  type="submit">Done</button>


//             <Date/>

//             <label for="price">Enter the price:</label>
//             <input placeholder="price" type="text" /> 

//             <label for="seats">Enter the seat:</label>
//             <input placeholder="seats" type="text" />

//             <label for="row">Enter the row of seat:</label>
//             <input placeholder="row" type="text"/>

//             <label for="seller_Id">Seller Id:</label>
//             <input placeholder="seller_Id" type="text"/>//from dataBase

//             <label for="description">description:</label>
//             <textarea name="comment" >Enter text here...</textarea>    

//             <button  type="submit">Done</button>
//             {
//               this.state.error &&
//               <h3 data-test="error" onClick={this.dismissError}>
//                 <button onClick={this.dismissError}>✖</button>
//                 {this.state.error}
//               </h3>
//             }
//           </form>
//         </div>

//     )
// }
// export default SellTickets;
// class SellTickets extends Component {
//     constructor() {
//       super();
//       this.state = {
//         category_Id: '',
//         location: '',
//         eventName: '',
//         time: '',
//         ticket_dates: '',
//         price: '',
//         seats:'',
//         row:"",
//         seller_Id:"",
//         description:"",
//       };
//       this.dismissError = this.dismissError.bind(this);
//     }
  
//     dismissError() {
//       this.setState({ error: '' });
//     }
  
//     render() {
//         return (
//         <div className="SellTicket">
//          {/* <form onSubmit={this.handleSubmit}> */}
//          <form>
//              <h1>Sell Ticket Page</h1>
  
//             <label for="chooseCategory">Category:</label>
//             <input placeholder="choose category"  type="text"/>
  
//             <label for="location">Location:</label>
//             <input placeholder="location" type="text"/>
  
//             <label for="eventName">Event Name:</label>
//             <input placeholder="eventName" data-test="eventName" type="text"/> 

//             <label for="appt">Select a time:</label>
//             <input type="time" id="appt" />
//               <button  type="submit">Done</button>
  
//             <Date/>

//             <label for="price">Enter the price:</label>
//             <input placeholder="price" type="text" /> 
  
//             <label for="seats">Enter the seat:</label>
//             <input placeholder="seats" type="text" />
  
//             <label for="row">Enter the row of seat:</label>
//             <input placeholder="row" type="text"/>
  
//             <label for="seller_Id">Seller Id:</label>
//             <input placeholder="seller_Id" type="text"/>
  
//             <label for="description">description:</label>
//             <textarea name="comment" >Enter text here...</textarea>    
  
//             <button  type="submit">Done</button>
//             {
//               this.state.error &&
//               <h3 data-test="error" onClick={this.dismissError}>
//                 <button onClick={this.dismissError}>✖</button>
//                 {this.state.error}
//               </h3>
//             }
//           </form>
//         </div>
//       );
//     }
//   }
//   export default SellTickets;

// import React, { Component } from 'react'
// import Date from '../components/Sell/DatePicker';
// // function SellTickets() {
// //     return (
// //         <div>
// //             <h1>Sell Tickets</h1>
// //             <Event/>
// //             <Date/>
// //             <TimePicker/>
// //         </div>
// //     )
// // }
// // export default SellTickets;

// class SellTickets extends Component {
//     constructor() {
//       super();
//       this.state = {
//         category_Id: '',
//         location: '',
//         eventName: '',
//         time: '',
//         ticket_dates: '',
//         price: '',
//         seats:'',
//         row:"",
//         seller_Id:"",
//         description:"",
//       };
//       this.dismissError = this.dismissError.bind(this);
//     }
  
//     dismissError() {
//       this.setState({ error: '' });
//     }
  
//     render() {
//         return (
//         <div className="SellTicket">
         
//          <form> 
//              <h1>Sell Ticket Page</h1>
  
//             <label for="chooseCategory">Category:</label>
//             <input placeholder="choose category"  type="text"/>
  
//             <label for="location">Location:</label>
//             <input placeholder="location" type="text"/>
  
//             <label for="eventName">Event Name:</label>
//             <input placeholder="eventName" data-test="eventName" type="text"/> 

//             <label for="appt">Select a time:</label>
//             <input type="time" id="appt" />
//               <button  type="submit">Done</button>
  
//             <Date/>

//             <label for="price">Enter the price:</label>
//             <input placeholder="price" type="text" /> 
  
//             <label for="seats">Enter the seat:</label>
//             <input placeholder="seats" type="text" />
  
//             <label for="row">Enter the row of seat:</label>
//             <input placeholder="row" type="text"/>
  
//             <label for="seller_Id">Seller Id:</label>
//             <input placeholder="seller_Id" type="text"/>//from dataBase
  
//             <label for="description">description:</label>
//             <textarea name="comment" >Enter text here...</textarea>    
  
//             <button  type="submit">Done</button>
//             {
//               this.state.error &&
//               <h3 data-test="error" onClick={this.dismissError}>
//                 <button onClick={this.dismissError}>✖</button>
//                 {this.state.error}
//               </h3>
//             }
//           </form>
//         </div>

//       );
//     }
//   }
//   export default SellTickets;

import TextField from '@material-ui/core/TextField';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DatePicker from '../components/Sell/DatePicker';
import Button from '@material-ui/core/Button';
import Autocomplete from "@material-ui/lab/Autocomplete";
import { allCatgories } from '../apis/catgory';
import createTicket from '../apis/ticketsApi';

// import styles from './SellTicketTryout';


const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(1),


    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',

    },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

export default function LayoutTextFields() {
    const classes = useStyles();

    return (
        <form>
            <div className={classes.root}>
                <div>
                    <h1>Sell Tickets</h1>

                    <Autocomplete
                        options={allCatgories}
                        getOptionLabel={(option) => option.name}
                        // onChange={(event, dropdownOption) => onChangeHandler(event, dropdownOption)}
                        renderInput={(params) => {
                            const inputProps = params.inputProps;
                            inputProps.autocomplete = "new-password";
                            return (
                                <TextField {...params} inputProps={inputProps} required label="Category" variant="outlined" name="category"  style={{ /*margin:8,*/ width: '400px' }}
                                />
                            )
                        }}
                    />
                
                    <DatePicker />

                    <TextField
                        id="outlined-margin-event name"label="Event name"
                        defaultValue="" className={classes.textField}margin="normal" variant="outlined"
                    />
                    <TextField
                        id="outlined-full-width" label="Descripton(optional)" style={{ margin: 8 }} placeholder="..."
                        helperText="describe the event!"
                        fullWidth margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"style={{ /*margin:8,*/ width: '400px' }}

                    />
                     <TextField
                        id="outlined-required" label="Seller Id"
                        defaultValue=  {"pull id from url"}variant="outlined"className={classes.textField}margin="normal"
                    />
                    <TextField
                        id="outlined-required" label="Location"
                        defaultValue="..." variant="outlined" className={classes.textField} margin="normal"
                    />
                    <TextField
                        id="outlined-required" label="Select Date"
                        defaultValue="..." variant="outlined" className={classes.textField} margin="normal"
                    />
                    <TextField
                        id="outlined-required" label="How much you want to get paid per ticket?"
                        defaultValue="..." helperText="Enter your price" variant="outlined"
                        className={classes.textField} margin="normal"
                    />
                    <Button variant="contained" color="secondary">
                        Create
                    </Button>
                </div>
            </div>
        </form>
    );
}
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
