import React, { Component } from 'react';
import './group.css';

class Group extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="group">
        <span>{"Team" + (this.props.index + 1)}</span>
        <div className="groupContent">
          {
            this.props.groupList.map(item => {
              return (
                <p key={item}>{(this.props.studentList.indexOf(item) + 1) + "." + item }</p>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default Group;