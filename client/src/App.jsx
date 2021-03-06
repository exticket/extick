import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventProfile from './components/EventProfile/EventProfile';
import { Homepage, LoginPage, PublishTicket, SellerMyTickets, TicketManagement, SignupPage, SellTickets, LoginSignupPage, MyAccount } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import { SellerContext, useSellerSingleton } from './SellerContext';
import { WithLoginRequired } from './components/WithLoginRequired';

function App() {
    const sellerApi = useSellerSingleton();

    return <>
        <SellerContext.Provider value={sellerApi}>
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/sellers/login" exact component={LoginSignupPage} />
                        <Route path="/sellers/selltickets/login" exact component={LoginSignupPage} />
                        <Route path="/sellers/signup" exact component={SignupPage} />
                        <Route path="/sellers/mytickets" exact component={WithLoginRequired(SellerMyTickets)} />
                        <Route path="/sellers/myaccount" exact component={WithLoginRequired(MyAccount)} />
                        <Route path="/sellers/publish-ticket" exact component={WithLoginRequired(PublishTicket)} />
                        <Route path="/ticket/management/:id" exact component={TicketManagement} />
                        <Route path="/sellers/SellTickets" exact component={(SellTickets)} />
                        <Route path="/eventProfile/:id" exact component={EventProfile} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </SellerContext.Provider>
    </>
}

export default App;


