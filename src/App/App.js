import React, { Component } from 'react';
import './App.scss';
import GroupSeperate from '../components/groupSeperate/GroupSeperate';
import GroupList from '../components/groupList/GroupList';
import axios from 'axios';

class App extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      groupList: []
    }
  }

  componentDidMount() { 
    this.getStudentList();
  }

  getStudentList = () => { 
    axios({
      url: 'http://localhost:8080/list',
      method: 'get'
    })
      .then(Response => {
        this.setState({
          groupList: Response.data
        })
      })
      .catch((e) => { 
        console.log(e);
      })
  }

  render() {
    return (
      <div className="App">
        <GroupSeperate />
        <GroupList list={this.state.groupList} />
      </div>
    );
  }
}

export default App;
