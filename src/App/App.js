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
      traineeIsLoaded: true,
      trainerIsLoaded: false,
      traineesList: [],
      trainersList: []
    }
  }

  getTraineesData = () => {
    axios.get("http://localhost:8080/trainees")
      .then(response => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          traineesList: data,
          TraineeIsLoaded: true
        })
      })
  }

  getTrainersData = () => {
    axios.get("http://localhost:8080/trainers")
      .then(response => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          trainersList: data,
          trainerIsLoaded: true
        })
      })
  }
  componentDidMount() {
    this.getTraineesData();
    this.getTrainersData()
  }

  render() {
    return (
      <div className="App">
        <GroupSeperate />
        {this.state.trainerIsLoaded ? <TrainerList traineesList={this.state.trainersList}/> : ""}
        {this.state.traineeIsLoaded ? <TraineeList traineesList={this.state.traineesList}/> : ""}
      </div>
    );
  }
}

export default App;
