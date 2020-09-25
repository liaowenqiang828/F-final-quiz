import React, { Component } from 'react';
import './App.scss';
import GroupSeperate from '../components/groupSeperate/GroupSeperate';
import TraineeList from '../components/traineeList/TraineeList';
import axios from 'axios';
import TrainerList from '../components/TrainerList/TrainerList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO 下面两个state比较冗余
      traineeIsLoaded: true,
      trainerIsLoaded: false,
      traineesList: [],
      trainersList: [],
    };
  }

  getTraineesData = () => {
    // TODO 没有使用抽取的utils里面的方法
    axios
      .get('http://localhost:8080/trainees')
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          traineesList: data,
          TraineeIsLoaded: true,
        });
      });
  };

  getTrainersData = () => {
    axios
      .get('http://localhost:8080/trainers')
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          trainersList: data,
          trainerIsLoaded: true,
        });
      });
  };
  componentDidMount() {
    this.getTraineesData();
    this.getTrainersData();
  }

  render() {
    return (
      <div className="App">
        <GroupSeperate />
        {/* TODO 不用进行三元判断，就算要用可以使用 && */}
        {this.state.trainerIsLoaded ? <TrainerList traineesList={this.state.trainersList} /> : ''}
        {this.state.traineeIsLoaded ? <TraineeList traineesList={this.state.traineesList} /> : ''}
      </div>
    );
  }
}

export default App;
