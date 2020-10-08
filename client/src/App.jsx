import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventProfile from './components/EventProfile/EventProfile';
import { Homepage, LoginPage, PublishTicket, SellerMyTickets, TicketManagement, SignupPage, SellTickets, TicketDetails } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import { SellerContext, useSellerSingleton } from './SellerContext';
import { getAllSellers } from './apis/sellersApi';
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
                        <Route path="/sellers/login" exact component={LoginPage} />
                        <Route path="/sellers/signup" exact component={SignupPage} />
                        <Route path="/sellers/mytickets" exact component={WithLoginRequired(SellerMyTickets, LoginPage)} />
                        <Route path="/sellers/publish-ticket" exact component={WithLoginRequired(PublishTicket, LoginPage)} />
                        <Route path="/ticket/management/:id" exact component={TicketManagement} />
                        <Route path="/sellers/SellTickets" exact component={WithLoginRequired(SellTickets, LoginPage)} />
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


