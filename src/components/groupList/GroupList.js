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

  onKeyup = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        clicked: false
      })
    }
  }

  render() {
    return (
      <div className="groupList">
        <header>
          <h3>学员列表</h3>
          <div className="listContainer">
            {
              this.props.traineesList.map((item, index) => {
                return (<p className="student" key={index}>{item.id + "." + item.name}</p>)
              })
            }
          </div>
          {
            this.state.clicked
              ? <input type="text" autoFocus="autoFocus" className="addStudent" onKeyUp={this.onKeyup} />
              : <button onClick={() => this.buttonClick()} className="student" >+添加学员</button>
          }
        </header>
      </div>
    );
  }
}

export default GroupList;
