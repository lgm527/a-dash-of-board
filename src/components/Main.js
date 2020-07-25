import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import UserProfile from './UserProfile';

export default class Main extends React.Component {
    render() {
        return (
            <div className='main-panel'>
            <Navbar />
            <Switch>
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/profile' component={UserProfile} />
                <Redirect from='*' to='/dashboard' />
            </Switch>
            <Footer />
          </div>
        )
    }
}