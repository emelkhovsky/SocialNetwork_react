import React from 'react';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import UsersContainer from './components/Users/UsersContainer'
import {Route, BrowserRouter} from 'react-router-dom'


const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Nav/>
              <div className="app-wrapper-content">
                  <Route exact path="/profile" render={() => <Profile/> } />
                  <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                  <Route path="/users" render={() => <UsersContainer/>}/>
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
