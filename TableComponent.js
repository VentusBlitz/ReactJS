import './Table.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editEmployee, deleteEmployee } from './index.js';

class TableComponent extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				
				<td>{this.props.data.sal}</td>
				
				<td> <button class="btn btn-danger" onClick={() => {this.props.deleteEmployee(this.props.row)}}>Delete</button>&nbsp;&nbsp;
				<button class="btn btn-warning" onClick={() => {this.props.editEmployee(this.props.data)}} >Edit</button></td>
			</tr>
		);
	}
}

  var mapDispatchToProps = (dispatch) =>({
    editEmployee: (employee) => dispatch(editEmployee(employee)),
    deleteEmployee: (row) => dispatch(deleteEmployee(row)),
  })

  export default connect(null, mapDispatchToProps)(TableComponent);