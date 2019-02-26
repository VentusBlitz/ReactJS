import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>STUFF</h2>
        <form className="form">
            <input className="form-control" type="text" placeholder="Name"></input>
            <input className="form-control" type="text" placeholder="Salary"></input>
            <input className="btn btn-success" type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
 
export default Stuff;