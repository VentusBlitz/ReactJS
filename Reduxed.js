import React, { Component } from 'react';
import FormComponent from './FormComponent';
import Table from './Table';
class Reduxed extends Component {
	constructor(props){
		super(props);
	}

render(){

	return(
		<div className="container">
    <FormComponent />
    <Table />
    </div>
    );
    }
		}
export default Reduxed;