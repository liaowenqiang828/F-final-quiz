import React, { Component } from 'react';
import './groupList.css';

class GroupList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="groupList">
        <header>
          <h3>学员列表</h3>
          <div className="listContainer">
            {
              this.props.list.map((item, index) => {
                return (<p className="student" key={index}>{(index + 1) + "." + item}</p>)
              })
            }
          </div>
          <button className="student" >+添加学员</button>
        </header>
      </div>
    );
  }
}

export default GroupList;
