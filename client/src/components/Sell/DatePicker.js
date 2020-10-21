import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Date() {

    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <div className='Date'>
            <h3>Select Date</h3>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                // filterDate={date => date.getDay() === 6 && date.getDay() === 3}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
            />
        </div>
    )
}
export default Date;

