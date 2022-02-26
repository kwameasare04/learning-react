import React, { Component } from 'react';
import classes from './App.css'; // with the modifications made in the config files can target specific components
import Person from '../components/People/Person/Person'; /// A statement that imports "Person" from the Person.js file
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

//import Radium, {StyleRoot}  from 'radium'; /// A package that lets you use inline styles with sudo selectors and media quries!!! e.g. hover

class App extends Component { /// person tag in this funtion is a self closing tag
  state = {
    people: [
      {id: 'qwe', name: 'Kevin', age:'36'},   //////added unique id's to people object array to help react identify different componets
      {id: 'dcv',name: 'Max', age:'28'},
      {id: 'yhu',name: 'Rodney', age:'19'}  
    ],
    showPerson: false
  } /// state object accepts any type of data 
git 
  /// this method removes an element from the array and returns update people array
deletePersonHandler = (personIndex) =>{
// const people = this.state.people; /// Don't do this!! As you are changing original array and leads to unpridictable code!!
const people = [...this.state.people]; /// Good practice as create a copy and are not changing original array
// const people = this.state.people.slice(); /// can do this as well as it is immutable 
people.splice(personIndex, 1)
this.setState({people:people})
}


// //// changeNameHandler is almost identical to switchNameHandler with exception of event parameter
//   changeNameHandler = (event) => {
//     this.setState({
//       people: [
//         {name: "Kevin", age:'37'},  
//         {name: event.target.value, age:'29'},  ///name being changed by extracting the input element which is event.target ad its value with .value
//         {name: 'Rodney', age:'20'}
//       ]
//     })
 
//   }

  nameChangedHandler = (event,id) =>{
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id
    }) /// returns the index of the value being targeted 

    const person = {
      ...this.state.people[personIndex]
    } ////stores value of the index being targeted

    person.name = event.target.value; /// changes value of persons name to the target value

    const people = [ ...this.state.people ]; ///create a copy of the people array

    people[personIndex] = person; /// change the value of slescted index in the copied array

    this.setState({people:people}) ///change the state value in people 


  }


  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow}); ///changes showPerson to value it is not currently set too
  }


  render() {
/// created inline syle which is used by the button attribute
// const style = {
// backgroundColor: 'green',
// color: 'white',
// font: 'inherit',
// border: '1px solid blue',
// padding: '8px',
// cursor: 'pointer'
// };
      


    let person = null; /// set person to null by default
    let btnClass = '';

////returns person variable that is rendered when show person in state is true
    if(this.state.showPerson === true){
///// the person maps out the contents of the people array in state, each iteration produces a Person component with person.name and person.age
      person = (
        <div >
          {this.state.people.map((person, index) => {
            return <ErrorBoundary>
              <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id} //// unique identifier added to key. Would usually be primary key from db
            changed={(event) =>  this.nameChangedHandler(event, person.id)}
            ></Person>
            </ErrorBoundary>
          })}
        </div> 
      )
    btnClass = classes.Red;
           
    }
 
    let classesArray = [];
    if(this.state.people.length <= 2){
      classesArray.push(classes.red)
    }
    if(this.state.people.length <= 1){
      classesArray.push(classes.bold); /// change syntax so that it references the classes 
    }
    
    return (/// returns rendered jsx
  
    <div className={classes.App}> 

      <h1> Rêæčt!!!</h1> 
        {/* onClick added that calls the event handler function when button is clicked */}
        <p className={classesArray.join(' ')}>my first React Application!!! </p> 
        {/* links it to css element defined in app.css */}
      <button 
      className={btnClass}
       ////referencing the style const create
      //// calls toggle person handler
      onClick={this.togglePersonHandler}>toggle people!</button> 
      {person}
 
    </div>
     
    );
  }
}
/// "this" in the name and age attribute refers to this class. state the object in the class and the people array in the object.
export default App; // 1)To us you must call radium as a Function and wrap it around app.
////////2)This is called a higher order component and is used to add some more functionality to your app component.
 


 



