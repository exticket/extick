import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import EventProfile from './components/EventProfile/EventProfile';
import { Homepage, LoginPage, PublishTicket, SellerMyTickets, TicketManagement, SignupPage, SellTickets, TicketDetails } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import SellerContext from './SellerContext';
import { getAllSellers } from './apis/sellersApi';

function App() {
    const [seller, setSeller] = useState(null);

    function LogOut() {
        setSeller(null);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const allSellers = await getAllSellers();
                const secondUser = allSellers[1];
                setSeller(secondUser);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    return <>
        <SellerContext.Provider value={{ seller: seller, logOut: LogOut }}>
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/sellers/login" exact component={withRouter(LoginPage)} />
                        <Route path="/sellers/signup" exact component={SignupPage} />
                        <Route path="/sellers/mytickets" exact component={SellerMyTickets} />
                        <Route path="/sellers/publish-ticket" exact component={PublishTicket} />
                        <Route path="/sellers/ticket/:id/management" exact component={TicketManagement} />
                        <Route path="/sellers/SellTickets" exact component={SellTickets} />
                        <Route path="/eventProfile" exact component={EventProfile} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </SellerContext.Provider>
    </>
}

export default App;


