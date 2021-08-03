import React from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Guildhall from './Guildhall'
import Resources from './Resources'
import CharactersSheet from './Charactersheet1';

const Sidebar = () => {
return (
    <div className="sidebar">
        <div className="sidebar-list-styling">
<ul className="sidebar-list list-unstyled">
<li><Link to="/">Home</Link></li>
<li><Link to="/resources">Resources</Link></li>
<li><Link to="charactersheet">Character Sheet</Link></li>
</ul>
        </div><div className="sidebar-route">
        <Switch>
            <Route exact path="/guildhall"><Guildhall /></Route>
            <Route exact path="/resources"><Resources /></Route>
            <Route exact path="/"><Guildhall /></Route>
            <Route exact path="/charactersheet"><CharactersSheet /></Route>
          
       

        </Switch>
        </div>
       
    </div>
);
};

export default Sidebar; 