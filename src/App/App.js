import React, { Component } from 'react';
import './App.scss';
import GroupSeperate from '../components/groupSeperate/GroupSeperate';
import GroupList from '../components/groupList/GroupList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GroupSeperate />
        <GroupList />
      </div>
    );
  }
}

export default App;
