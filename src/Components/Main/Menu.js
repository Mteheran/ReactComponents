import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import DateTimeExamples  from  '../Main/DateTimeExamples'

const Home = () => (
    <div>
      <h2>Examples of diferents componentes and controls in React.Js</h2>
    </div>
  )
  

class Menu extends Component {
    

    render()
    {
        return(
            <Router>
                <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/datetime">DateTime</Link></li>
                        </ul>

                        <hr/>                
                        <Route exact path="/datetime" component={DateTimeExamples}/>
                        <Route exact path="/" component={Home}/>
                </div>
            </Router>
        );
    }

}

export default Menu;