import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage, LoginPage, PublishTicket, SellerDashboard, TicketManagement, SignupPage ,SellTickets } from './pages';
import CardComponent from './components/CardComponent';
import EventProfile from './components/EventProfile/EventProfile';
// import TicketComponent from './components/TicketComponent';


function App() {
    return <div>
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/sellers/login" exact component={LoginPage} />
                <Route path="/sellers/signup" exact component={SignupPage} />
                <Route path="/sellers/dashboard" exact component={SellerDashboard} />
                <Route path="/sellers/publish-ticket" exact component={PublishTicket} />
                <Route path="/sellers/ticket/:id/management" exact component={TicketManagement} />
                <Route path="/sellers/SellTickets" exact component={SellTickets} />
                <Route path="/eventProfile" exact component={EventProfile} />
            </Switch>
        </Router>
    
    </div>
}

export default App;

// export default function App() {

//     let pageInfo = {
//     };

//     const changePageInfo = (eventName, date, hour, location, sellerName, price, imgUrl) => {
//         pageInfo.eventName = eventName;
//         pageInfo.date = date;
//         pageInfo.hour = hour;
//         pageInfo.location = location;
//         pageInfo.sellerName = sellerName;
//         pageInfo.price = price;
//         pageInfo.imgUrl = imgUrl;
//     };


//     return (
//         <div>
//             <BrowserRouter>
//                 <Switch>
//                     <Route path="/home" render={(props) => <TicketComponent func={changePageInfo} {...props} exact />} />

//                     <Route path="/fullpage" render={(props) => <FullPage
//                         eventName={pageInfo.eventName} date={pageInfo.date} hour={pageInfo.hour} location={pageInfo.location} sellerName={pageInfo.sellerName}
//                         price={pageInfo.price} imgUrl={pageInfo.imgUrl} changePageInfo={changePageInfo} {...props} />} exact />

//                     <Redirect from="/" to="/home" />
//                 </Switch>
//             </BrowserRouter>
//         </div>
//     );
// }

