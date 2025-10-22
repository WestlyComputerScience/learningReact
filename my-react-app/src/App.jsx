import Header from './Header.jsx' //grabs the header we made in the jsx file
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Students.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List';
import List1 from './List1';
import ClickEvent from './clickEvent.jsx'
import UseState from './useState.jsx'
import OnChange from './onChange'
import ColorPicker from './ColorPicker'
import UpdateFunction from './UpdaterFunction.jsx'

/*
How to style react components with CSS
--------------------------------------
(not including external framworks or preprocessors)

1. External (great for global styles, or smaller projects) (one big thing with hashing names)
2. Modules (prefered for unique individual components) (I prefer this style) (folders for components)
3. Inline (good for small components with minimal styling) (Constant Javascript variable)
*/

/*
   props = read-only properties that are shared between components.
           A parent component can send data to a child component.
           <Component key=value>
*/

/*
  propTypes = a mechanism that ensures that the passed value
              is of the correct datatype
              age: PropTypes.number
*/

/*
  defaultProps = default values for props in case they are not passed 
                 from the parent component.
                 name: "Guest"
*/

/*
  conditional rendering = allows you to control what gets rendered in
                          your application based on certain conditions
                          (show, hide, or change components)
*/

// App components can have their own stylesheets 
function App() {
  
  // === PART 6 ===
  /**/
  /*
  const fruits = [{id : 1, name : "apple", calories : 50}, 
                  {id : 2, name : "orange", calories : 45}, 
                  {id : 3, name : "banana", calories : 105}, 
                  {id : 4, name : "coconut", calories : 159},     
                  {id : 5, name : "pineapple", calories : 37}];
  const vegetables = [{id : 6, name : "potatoes", calories : 110}, 
                  {id : 7, name : "celery", calories : 15}, 
                  {id : 8, name : "carrots", calories : 25}, 
                  {id : 9, name : "corn", calories : 63},     
                  {id : 10, name : "broccoli", calories : 50}];
  const empty = [];
  */

  return(
    <> {/*Enclose components in a fragment, allows us to return something as 1 element*/}
      {/* === PART 1 ===
      {/*<Header></Header>
       or }
      <Header/>
      <Food/>
      <Food/>
      <Food/>
      <Footer/>
      */}
      {/* === Part 2 ===
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      */}
      {/* === Part 3 ===
      <Button/>
      */}
      {/* === Part 4 ===
      <Student name="Dug" age={21} isStudent={true}/>
      <Student name="Dave" age={19} isStudent={false}/>
      <Student name="Billy" age={2} isStudent={false}/>
      <Student/>
      */}
      {/* === Part 5 ===
      <UserGreeting isLoggedIn={true} username = "dug123"/>
      <UserGreeting isLoggedIn={false} username = "dave321"/>
      <UserGreeting/>
      */}
      {/* === Part 6 ===
      <List/>
      {fruits.length > 0 ? <List1 items = {fruits} category = "Fruits"/> : null} {/* conditional rendering, if list empty, then no put it on webpage */}
      {/* {vegetables.length > 0 && <List1 items = {vegetables} category = "Vegetables"/>} {/* This is another way to do it */}
      {/* === Part 7 ===
      <ClickEvent/>
      */}
      {/* === Part 8 ===
      <UseState/>
      */}
      {/* === Part 9 ===
      <OnChange/>
      */}
      {/* === Part 10 ===
      <ColorPicker/>
      */}
      {/* === Part 11 ===
      
      */}
      {/* === Part 12 ===
      
      */}
      {/* === Part 13 ===
      
      */}
      {/* === Part 14 ===
      
      */}
      {/* === Part 15 ===
      
      */}
      {/* === Part 16 ===
      
      */}
      {/* === Part 17 ===
      
      */}
      {/* === Part 18 ===
      
      */}
      {/* === Part 19 ===
      
      */}
      {/* === Part 20 ===
      
      */}
      <UpdateFunction/>
    </>
  );
}

export default App
