import './Reduxed';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableComponent from './TableComponent';
class Table extends Component{
    constructor(props)
  {
    super(props);
  }
  render()
  {
    return(
              <div id="tablediv">
      <table className="table table-striped table-bordered table-dark">
    <thead>
                      <tr>
                          <th>ID</th>
                          <th>Firstname</th>
                          <th>Salary</th>
       
                          <th>Options</th>
                      </tr>
                  </thead>
                  <tbody>
                          {this.props.employeeList.map((data,index) => {							
                              return <TableComponent editRow= {this.props.editRow} users = {this.props.users}  data = {data} key={index} row={index} deleteRow={this.props.deleteRow} />
                                                      })} 
                      </tbody>
                  </table>
                  </div>

    );
  }
}

var mapStateToProps = (state) =>({
    employeeList: state.employeeList
  })

  export default connect(mapStateToProps, null)(Table);