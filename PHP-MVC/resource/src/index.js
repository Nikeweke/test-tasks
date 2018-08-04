/*
* This is todo list with REACT.js + PHP + SQlite
*
*  JSX-syntax
*/

//  Import ReactJS and JQ requires
import ReactDOM from 'react-dom';
import React    from 'react';
import $        from 'jquery';


// Components
import Todos from './components/todolist';

// get tasks from hidden field of page
const tasks = JSON.parse( $('#tasks').val() );

// const App = () => (
//   <h2>asd</h2>
// );


// const App = () => (
//   <h2>asd</h2>
// );


// RENDER IT
ReactDOM.render(<Todos tasks={tasks}/>,  document.getElementById('todo-div'));
// ReactDOM.render(<App />,  document.getElementById('todo-div'));
