import React, {Component} from 'react'; // have to import react to use any features
import classes from "./Person.css"; /// have to import css file to use it
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';


class Person extends Component  { /// function returns a paragraph with the property name and age in statement
    // const random = Math.random();
    // if(random > 0.7) {
    //     throw new Error("Error test!!!")
    // }
   constructor(props){
      super(props);
      this.inputElementRef = React.createRef();
   }

   static contextType =  AuthContext;

    componentDidMount(){
      //  this.inputElement.focus(); ////after rendering focus is used
      this.inputElementRef.current.focus();
      // console.log("[person.js] componentDidMount");
      console.log(this.context.authenticated);
    }

   render(){
    console.log('[person.js] rendering...')
    return(
     <Aux>
           {this.context.authenticated ? <p>Authenticeted </p> : <p>Please log in</p> }
         <p key={"item1"} onClick={this.props.click}> hello i'm {this.props.name} and i am {this.props.age} years old!</p>
         <p key={"item2"}>{this.props.children}</p>      
         <input key={"item3"} type="text" onChange={this.props.changed} 
         ref={this.inputElementRef}
         // ref={(inputEl)=>{this.inputElement = inputEl}} //// using this function references the element it is used in
         value={this.props.name}/>
     </Aux>
        );     
  
      }

   }
      
   Person.propTypes = {
      click: PropTypes.func,
      name: PropTypes.string,
      age: PropTypes.number,
      changed: PropTypes.func
   };
    

// props.children Allows for content to be added from outside person.js file
export default withClass(Person, classes.Person); /// Makes person the default export in the file.


        //  /* dynamic content that returns properties name and age */
        //  <div className={classes.Person}> {/* giving div class name so it can be targeted in css file}
        //  {/*onClick being assigned to property the person element*/}