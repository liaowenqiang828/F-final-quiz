import React, { Component } from 'react';
import './TraineeList.css';

class TraineeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  buttonClick = () => {
    this.setState({
      clicked: true,
    });
  };

  onKeyup = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        clicked: false,
      });
    }
  };

  render() {
    return (
      <div className="traineeList">
        <header>
          <h3>学员列表</h3>
          <div className="traineeContainer">
            {this.props.traineesList.map((item, index) => {
              return (
                <p className="trainee" key={index}>
                  {item.id + '.' + item.name}
                </p>
              );
            })}
          </div>
          {this.state.clicked ? (
            <input type="text" autoFocus="autoFocus" onKeyUp={this.onKeyup} />
          ) : (
            // TODO onClick内不用再写箭头函数了
            <button onClick={() => this.buttonClick()} className="trainee">
              +添加学员
            </button>
          )}
        </header>
      </div>
    );
  }
}

export default TraineeList;
