import React, { Component } from 'react'
class SellTickets extends Component {
  constructor() {
    super();
    this.state = {
      category_Id: '',
      location: '',
      eventName: '',
      time: '',
      ticket_dates: '',
      price: '',
      seats:'',
      row:"",
      seller_Id:"",
      description:"",
    };
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  render() {
      return (
      <div className="SellTicket">
       {/* <form onSubmit={this.handleSubmit}> */}
       <form>
           <h1>Sell Ticket Page</h1>

          <label for="chooseCategory">Category:</label>
          <input placeholder="choose category"  type="text"/>

          <label for="location">Location:</label>
          <input placeholder="location" type="text"/>

          <label for="eventName">Event Name:</label>
          <input placeholder="eventName" data-test="eventName" type="text"/> 

          {/* <label for="ticket_dates">time:</label> */}

          <label for="appt">Select a time:</label>
          <input type="time" id="appt" />
          <button  type="submit">Done</button>
          {/* <input placeholder="time" type="text"  value={this.state.time}/> */}

          <label for="ticket_dates">ticket_dates:</label>
          <input placeholder="ticket_dates" type="text" value={this.state.ticket_dates}/>

          <label for="price">Enter the price:</label>
          <input placeholder="price" type="text" /> 

          <label for="seats">Enter the seat:</label>
          <input placeholder="seats" type="text" />

          <label for="row">Enter the row of seat:</label>
          <input placeholder="row" type="text"/>

          <label for="desseller_Idcription">Seller Id:</label>
          <input placeholder="seller_Id" type="text"/>//from dataBase

          <label for="description">description:</label>
          <textarea name="comment" >Enter text here...</textarea>    

          <button  type="submit">Done</button>
          {
            
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
        </form>
      </div>
    );
  }
}
export default SellTickets;
