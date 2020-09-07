import React, { Component } from 'react';
import './groupList.css';
import axios from 'axios';

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

  addStudent = (e) => {
    axios({
      url: "http://localhost:8080/student",
      method: "post",
      data: {
        name: e.target.value
      }
    })
      .catch(e => { 
        console.log(e);
      })

  }

  onKeyup = (e) => {
    if (e.keyCode === 13) {
      this.addStudent(e);
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
              this.props.list.map((item, index) => {
                return (<p className="student" key={index}>{(index + 1) + "." + item}</p>)
              })
            }
          </div>
          {
            this.state.clicked
              ? <input type="text" autofoucus="autofoucus" className="addStudent" onKeyUp={this.onKeyup} />
              : <button onClick={() => this.buttonClick()} className="student" >+添加学员</button>
          }

        </header>
      </div>
    );
  }
}

export default GroupList;
