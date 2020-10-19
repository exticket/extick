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
                onChange={data => setSelectedDate(data)}
                dateFormat='dd/mm/yyyy'
                filterDate={data => data.getDay() != 6}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
            />
        </div>
    )
}
export default Date;

