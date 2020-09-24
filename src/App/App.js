import React, { Component } from 'react';
import './App.scss';
import GroupSeperate from '../components/groupSeperate/GroupSeperate';
import GroupList from '../components/groupList/GroupList';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      traineesList: []
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
          isLoaded: true
        })
      })
  }
  componentDidMount() {
    this.getTraineesData();
  }

  render() {
    return (
      <div className="App">
        <GroupSeperate />
        {this.state.isLoaded ? <GroupList traineesList={this.state.traineesList}/> : ""}
      </div>
    );
  }
}

export default App;
