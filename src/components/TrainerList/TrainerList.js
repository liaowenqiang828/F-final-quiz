import React, { Component } from 'react';
import "./TrainerList.css";

class TrainerList extends Component {
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
      <div className="trainerList">
        <header>
          <h3>列表</h3>
          <div className="trainerContainer">
            {
              this.props.traineesList.map((item, index) => {
                return (<p className="trainer" key={index}>{item.id + "." + item.name}</p>)
              })
            }
          </div>
          {
            this.state.clicked
              ? <input type="text" autoFocus="autoFocus" onKeyUp={this.onKeyup} />
              : <button onClick={() => this.buttonClick()} className="trainer" >+添加讲师</button>
          }
        </header>
      </div>
    );
  }
}

export default TrainerList;
