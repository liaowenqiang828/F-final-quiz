import React, { Component } from 'react';
import './groupSeperate.css';
import axios from 'axios';
import Group from '../group/Group';

class GroupSeperate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: "",
      buttonDisabled: false
    }
  }

  getData = () => {
    axios({
      url: "http://localhost:8080/groups",
      method: "get"
    })
      .then((response) => {
        this.setState({
          buttonDisabled: true,
          groupList: response.data
        })
      })
      .then(() => {
        this.setState({
          buttonDisabled: false
        })
      })
      .catch((e) => {
        console.log(e);
      })
  }

  render() {
    return (
      <div className="groupSeparate">
        <header>
          <h3>分组列表</h3>
          <button disabled={this.state.buttonDisabled} onClick={this.getData}>分组学员</button>
        </header>

        {this.state.groupList.length !== 0 &&
          <div>{
            this.state.groupList.map(group => {
              return (<Group trainees={group.traineeList} trainers={group.trainerList} key={group.id} />)
            })
          }
          </div>
        }
      </div>
    );
  }
}

export default GroupSeperate;
