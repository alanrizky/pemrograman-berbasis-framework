import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      students: [
        { id: 1, first: "Alan", last: "A", handle: "@alan" },
        { id: 2, first: "Daffa", last: "B", handle: "@daffa" },
        { id: 3, first: "Fawwaz", last: "C", handle: "@fawwaz" }
      ]
    };
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, first, last, handle } = student; //destructuring
      return (
        <tr key={"#"}>
          <td>{id}</td>
          <td>{first}</td>
          <td>{last}</td>
          <td>{handle}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
