import React, { Component } from 'react';
import './groupSeperate.css';
import axios from 'axios';
import Group from '../group/Group';

class GroupSeperate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO List初始值为什么是字符串？
      groupList: '',
      buttonDisabled: false,
    };
  }

  // TODO 方法命名不合理
  getData = () => {
    axios({
      url: 'http://localhost:8080/groups',
      method: 'get',
    })
      .then((response) => {
        this.setState({
          buttonDisabled: true,
          groupList: response.data,
        });
      })
      // TODO 没必要在下一个then内处理，且上一个then没有return
      .then(() => {
        this.setState({
          buttonDisabled: false,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      // TODO className命名
      <div className="groupSeparate">
        <header>
          <h3>分组列表</h3>
          <button disabled={this.state.buttonDisabled} onClick={this.getData}>
            分组学员
          </button>
        </header>

        {this.state.groupList.length !== 0 && (
          // TODO 这个div层级可以省略
          <div>
            {this.state.groupList.map((group) => {
              // TODO 简化箭头函数返回
              return (
                <Group trainees={group.traineeList} trainers={group.trainerList} key={group.id} />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default GroupSeperate;
