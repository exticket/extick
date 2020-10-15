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


import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Date from '../components/Sell/DatePicker';
import Button from '@material-ui/core/Button';


handleSubmit(evt) {
  evt.preventDefault();

  if (!this.state.email) {
    return this.setState({ error: 'Email is required' });
  }

  if (!this.state.password) {
    return this.setState({ error: 'Password is required' });
  }
  loginRequest(this.state.email,this.state.password).then(result => {
    if(result.data.success===true){
      let seller = result.data.data;
      return this.setState({ error: 'hello '+ seller.first_name + ' '+seller.last_name });
    }
    return this.setState({ error:result.data.message });
  })

}


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
          <TextField
            label="Catgoery"
            id="outlined-required"
            defaultValue="Choose a catgorey"
            className={classes.textField}
            margin="normal"
            variant="outlined"

          />
          <Date />

          <TextField
            id="outlined-margin-event name"
            label="Event name"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            label="Descripton(optional)"
            style={{ margin: 8 }}
            placeholder="..."
            helperText="describe the event!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            style={{ /*margin:8,*/ width: '400px' }}

          />
          <TextField
            id="outlined-required"
            label="Location"
            defaultValue="..."
            variant="outlined"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="outlined-required"
            label="Select Date"
            defaultValue="..."
            variant="outlined"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="outlined-required"
            label="How much you want to get paid per ticket?"
            defaultValue="..."
            helperText="Enter your price"
            variant="outlined"
            className={classes.textField}
            margin="normal"
          />
          <Button variant="contained" color="secondary">
            Create
          </Button>
        </div>
      </div>
    </form>
  );
}