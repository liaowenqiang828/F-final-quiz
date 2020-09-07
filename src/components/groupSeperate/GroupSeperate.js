import React, { Component } from 'react';
import './groupSeperate.css';
import axios from 'axios';
import Group from '../group/Group';

class GroupSeperate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: "",
      groupList: [],
      groupCount: 6
    }
  }

  getData = () => {
    axios({
      url: "http://localhost:8080/list",
      method: "get"
    })
      .then((Response) => {
        this.setState({
          studentList: Response.data
        })
        return Response.data;
      })
      .then((data) => {
        this.setState({
          groupList: this.groupSeperatehandle(data)
        })
      })
      .catch((e) => {
        console.log(e);
      })
  }

  groupSeperatehandle = (data) => {
    const studentCount = data.length;
    let remainder = studentCount % this.state.groupCount;
    const avg = parseInt(studentCount / 6);
    const groups = [];
    let index = 0;

    let start = 0;
    while (index < 6) {
      if (remainder > 0) {
        groups.push(data.slice(start, start + avg + 1));
        start = start + avg + 1;
        index += 1;
        remainder -= 1;
      } else {
        groups.push(data.slice(start, start + avg));
        start = start + avg;
        index += 1;
        remainder -= 1;
      }
    }
    return groups;
  }

  render() {
    return (
      <div className="groupSeperate">
        <header>
          <h3>分组列表</h3>
          <button onClick={() => this.getData()}>分组学员</button>
        </header>

        {this.state.groupList.length !== 0 &&
          <div>{
            this.state.groupList.map((item, index) => {
              return (<Group studentList={this.state.studentList} groupList={item} index={index} />)
            })
          }
          </div>
        }
      </div>
    );
  }
}

export default GroupSeperate;
