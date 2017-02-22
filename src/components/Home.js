import React from 'react';
import GoalList from '../containers/GoalListContainer';
import Form from '../containers/Form';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Form />
        <GoalList />
      </div>
    )
  }
}
