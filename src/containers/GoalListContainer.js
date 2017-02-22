import { connect } from 'react-redux'
import { toggleGoal } from '../actions'
import GoalList from '../components/GoalList'


const mapStateToProps = (state) => {
  return {goals: state.goalsReducer};
}

const mapDispatchToProps = (dispatch) => ({
  onGoalClick: (id) => {
    dispatch(toggleGoal(id))
  }
})

const GoalListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalList)

export default GoalListContainer
