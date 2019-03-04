// Importing Info
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

// Variable 
const smurflink = {
  home: '/'
};
// Class 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
 // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.  
  
  // Life Cycle And Api info
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      
      .then(res =>

        
        this.setState({

          smurfs: res.data
        })
      )
      .catch(err => console.log(err));
  }
   addSmurf(newSmurf) {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)

      .then(res =>

        this.setState({

          smurfs: res.data
        })
      )
      .catch(err => console.log(err));
  }
  
  // Rendering And Routes below
  render() {
    return (
      
      <div className='App'>
      
            
        <Route   path={smurflink.home}
          render={props => (
            <SmurfForm
              {...props}
              smurfs={this.state.smurfs}
              addSmurf={this.addSmurf}
            />
          )}
        />
         <Route exact path={smurflink.home}
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              addSmurf={this.addSmurf}
            />
          )}
        />
      </div>
    );
  }
}

// Exporting Information App root.
export default App;