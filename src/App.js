import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import {Route, BrowserRouter} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Nav/>
              <div className="app-wrapper-content">
                  <Route exact path="/profile" render={() => <Profile name="Kate" surname="Meow" age="20" sex="women" city="Moscow" store={props.store} dispatch={props.dispatch}/> } />
                  <Route path="/dialogs" render={() => <DialogsContainer store={props.store} dispatch={props.dispatch}/>}/>
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
