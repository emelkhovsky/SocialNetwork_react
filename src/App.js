import React from 'react';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Nav from './components/Nav/Nav'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import UsersContainer from './components/Users/UsersContainer'
import {Route, BrowserRouter} from 'react-router-dom'


const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <HeaderContainer/>
              <Nav/>
              <div className="app-wrapper-content">
                  <Route path="/profile/:userId?" render={() => <ProfileContainer/> } />
                  <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                  <Route path="/users" render={() => <UsersContainer/>}/>
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
