import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventProfile from './components/EventProfile/EventProfile';
import { Homepage, LoginPage, PublishTicket, SellerDashboard, TicketManagement, SignupPage, SellTickets, TicketDetails } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import UserContext from './SellerContext';
import {getAllSellers} from './apis/sellersApi';

function App() {
    const [user,setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const allSellers = await getAllSellers();
                const secondUser = allSellers[1];
                setUser(secondUser);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
      }, []);

    return <>
        <UserContext.Provider value={user}>
            <Header />
            <main>
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
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </main>
            <Footer />
        </UserContext.Provider>
    </>
}

export default App;


