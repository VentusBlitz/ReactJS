import './Reduxed';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEmployee, updateEmployee, changeName, changeSal } from './index.js';

class FormComponent extends Component{
    constructor(props)
    {
        super(props);
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.props.employee.id){
            this.props.addEmp(this.props.employee)
        } else {
            this.props.updateEmployee(this.props.employee)
        }
    }
    render(){
      return(
        <div>
          <div id="con">
          <form className="form-horizontal" role="form" onSubmit={(e) => this.onSubmit(e)}>
              
              
                  <label className="control-label">Name</label>
                  <input className="form-control" required type="text"  onChange={event => this.props.changeName(event.target.value)}  value={this.props.employee.name}/>													
              
                  <label className="control-label">Salary</label>
                  <input className="form-control" type="text" required  onChange={event => this.props.changeSal(event.target.value)} value={this.props.employee.sal}/>				
                   <br/>
          <input type="submit"  value={this.props.employee.input} className="btn btn-success"/>
              
              <input type="hidden" className="row-ref" value="" />
          </form>
    </div>
    </div>
      );
}
  }

  var mapStateToProps = (state) => ({
    employee: state.employee
  });

  var mapDispatchToProps = (dispatch) =>({
    addEmp: (employee) => dispatch(addEmployee(employee)),
    updateEmployee: (employee) => dispatch(updateEmployee(employee)),
    changeName: (name) => dispatch(changeName(name)),
    changeSal: (sal) => dispatch(changeSal(sal)),
  })

  export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);