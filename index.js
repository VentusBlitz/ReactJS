import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import './index.css';
import App from './App';
import App2 from './App2';
import NewFile from './NewFile';
import FormTab from './FormTab';
import App3 from './App3';
import Reduxed from './Reduxed';
import { render } from 'react-dom'
import {Home,About,Contact} from './App3';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './NewFile.css';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';


 const defaultEmployeeState = {
     id: '',
     input: 'Submit',
     name: '',
     sal: ''
 }

 const Employeereducer = (state = defaultEmployeeState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE': 
        case 'UPDATE_EMPLOYEE':
            return defaultEmployeeState;
        case 'EDIT_EMPLOYEE': 
            return {
                ...state,
                ...action.payload,
                input: 'Update'
            }       
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'CHANGE_SAL':
            return {
                ...state,
                sal: action.payload
            }
        default: return state
    }
 }
 const EmployeeListreducer = (state = [], action) => {
    switch (action.type) {
       case 'DELETE_EMPLOYEE': {
            const tempUsers = [...state];
            tempUsers.splice(action.payload,1);
            return tempUsers;
       }
       case 'ADD_EMPLOYEE': 
        return [
            ...state,
            {
                ...action.payload,
                id: (Math.random()*100000)|0
            }
        ];
       case 'EDIT_EMPLOYEE':
       default: return state
    }
 }

 export const addEmployee = (employee) => ({
     type: 'ADD_EMPLOYEE',
     payload: employee
 })

 export const updateEmployee = (employee) => ({
    type: 'UPDATE_EMPLOYEE',
    payload: employee
})

export const editEmployee = (employee) => ({
    type: 'UPDATE_EMPLOYEE',
    payload: employee
})

export const deleteEmployee = (row) => ({
    type: 'DELETE_EMPLOYEE',
    payload: row
})

 export const changeName = (name) => ({
    type: 'CHANGE_NAME',
    payload: name
})

export const changeSal = (sal) => ({
    type: 'CHANGE_SAL',
    payload: sal
})

const MainReducer = combineReducers({
    employee: Employeereducer,
    employeeList: EmployeeListreducer,
 });

 const store = createStore(
    MainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )

//ReactDOM.render(<NewFile />, document.getElementById('root'));
// ReactDOM.render(<Reduxed />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
     <Reduxed />
    </Provider>,
    document.getElementById('root')
   );



// ReactDOM.render((
//     <Router history = {browserHistory}>
//        <Route path = "/" component = {App}>
//           <IndexRoute component = {Home} />
//           <Route path = "home" component = {Home} />
//           <Route path = "about" component = {About} />
//           <Route path = "contact" component = {Contact} />
//        </Route>
//     </Router>
//  ), document.getElementById('app'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
