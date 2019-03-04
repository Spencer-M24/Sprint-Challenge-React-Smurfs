// Importing
import React, { Component } from 'react';




// Variable  Information

 const createSmurf = (id, name, age, height) => {
  return {
    id,
    name,
    age,
    height
  };
};

// Class
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }



// Event State
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  // Render
  
  render() {
    return (
      <div className='SmurfForm'>
      <form
        onSubmit={() =>
          this.props.addSmurf(
            createSmurf(
              this.props.smurfs[this.props.smurfs.length - 1].id + 1,
              this.state.name,
              this.state.age,
              this.state.height
            )
          )
        }
      >
          <input onChange={this.handleInputChange}
            placeholder='name'
            value={this.state.name}
            name='name' />
          
          
          <input onChange={this.handleInputChange}
            placeholder='age'
            value={this.state.age}
            name='age' />
          
          <input  onChange={this.handleInputChange}
            placeholder='height'
            value={this.state.height}
            name='height' />
          <button type='submit'>Smurf Info Welcome To Village</button>
        </form>
      </div>
    );
  }
}

// Exporting

export default SmurfForm;