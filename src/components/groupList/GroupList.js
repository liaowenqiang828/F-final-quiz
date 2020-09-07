import React, { Component } from 'react';
import './groupList.css';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  buttonClick = () => {
    this.setState({
      clicked: true
    })
  }

  addStudent = () => {

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
          {
            this.state.clicked ? <input type="text" autofoucus="autofoucus" className="addStudent"/> : <button onClick={() => this.buttonClick()} className="student" >+添加学员</button>
          }

        </header>
      </div>
    );
  }
}

export default GroupList;
