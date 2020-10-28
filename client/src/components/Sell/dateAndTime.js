import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  container: {
      display: 'flex',
      flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
    width:320,
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



export default function MaterialUIPickers({onInputChange,name,value}) {
  
  const [selectedDate, setSelectedDate] = React.useState();
  const classes = useStyles();

  console.log("the value is : " ,value)


  return (
    <TextField
    name="ticket_dates"
    onChange={e => onInputChange(e)}
    id="datetime-local"
    name={name}
    value={value}
    label="Select Date and Time"
    type="datetime-local"
    required
    className={classes.textField}
    InputLabelProps={{
        shrink: true,
    }}
/>
  );
}
