import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import List from './components/Dialogs/List/List'
import Post from "./components/Profile/Posts/Post/Post";
import {Route, BrowserRouter} from 'react-router-dom'


const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Nav/>
              <div className="app-wrapper-content">
                  <Route exact path="/profile" render={() => <Profile name="Kate" surname="Meow" age="20" sex="women" city="Moscow" profile={props.state.profile} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> } />
                  <Route path="/dialogs" render={() => <Dialogs dialog={props.state.dialog}/>}/>
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
