import React, { Component } from 'react';
import './group.css';

class Group extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="group">
        <span>"组"</span>
        {
          this.props.trainers.map(trainer => {
            return (<span>{trainer.id + "." +trainer.name}</span>)
          })
        }
        <div className="groupContent">
          {
            this.props.trainees.map(trainee => {
              return (
                <p key={trainee.name + trainee.id}>{trainee.id + "." + trainee.name }</p>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default Group;
