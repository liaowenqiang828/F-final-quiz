import React, { Component } from 'react';
import './group.css';

// TODO class命名需要更加明确
class Group extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // TODO className命名需要更加明确
      <div className="group">
        <span>"组"</span>
        {this.props.trainers.map((trainer) => {
          return <span>{trainer.id + '.' + trainer.name}</span>;
        })}
        {/* TODO class name使用 中横线形式 */}
        <div className="groupContent">
          {this.props.trainees.map((trainee) => {
            return <p key={trainee.name + trainee.id}>{trainee.id + '.' + trainee.name}</p>;
          })}
        </div>
      </div>
    );
  }
}
export default Group;
