import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialogs/Dialog";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";



const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar siderBar={props.state.siderBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile
                        profile={props.state.profile}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/>} />
                    <Route path='/dialogs' render={() => <Dialog state={props.state.message}/>} />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    )
};

export default App