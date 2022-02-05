import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; /// A statement that imports "Person" from the Person.js file

class App extends Component { /// person tag in this funtion is a self closing tag
  state = {
    people: [
      {name: 'Kevin', age:'36'},  
      {name: 'Max', age:'28'},
      {name: 'Rodney', age:'19'}  
    ],
    showPerson: false
  } /// state object accepts any type of data 

  switchNameHandler = (newName) =>{ ////event handler function 
    // console.log("switch name");
    this.setState({
      people: [
        {name: newName, age:'37'},  
        {name: 'Maxim', age:'29'},
        {name: 'Rodney', age:'20'}
      ]
    })

  }
//// changeNameHandler is almost identical to switchNameHandler with exception of event parameter
  changeNameHandler = (event) => {
    this.setState({
      people: [
        {name: "Kevin", age:'37'},  
        {name: event.target.value, age:'29'},  ///name being changed by extracting the input element which is event.target ad its value with .value
        {name: 'Rodney', age:'20'}
      ]
    })
 
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow}); ///changes showPerson to value it is not currently set too
  }


  render() {
/// created inline syle which is used by the button attribute
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let person = null; /// set person to null by default

    if(this.state.showPerson === true){
////returns person variable that is rendered when show person in state is true

      person = (
        <div>
        <Person name ={this.state.people[0].name} 
          click={this.switchNameHandler.bind(this, "Kimberly")} /// adding switchName property to element bind method is used to set the newName which is then updated 
          age={this.state.people[0].age}> My hobbies are : skiing and food </Person> 
    
          <Person name={this.state.people[1].name}
          click={this.switchNameHandler.bind(this, 'Marcus')}
           age={this.state.people[1].age}
           change={this.changeNameHandler}>
           </Person>
    
          <Person name={this.state.people[2].name}
          age={this.state.people[2].age}> My hobbies are : Saxaphone and Hockey </Person>
        </div> 
      )
      
    }

    return (/// returns rendered jsx
    <div className='App'> 

      <h1> Hi, im a react app</h1> 
        {/* onClick added that calls the event handler function when button is clicked */}
      <button 
      style={style} ////referencing the style const create
      //// calls toggle person handler
      onClick={this.togglePersonHandler}>toggle people!</button> 
      {person}
 
    </div>
    
    );
  }
}
/// "this" in the name and age attribute refers to this class. state the object in the class and the people array in the object.
export default App;


