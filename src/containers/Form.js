import { connect } from 'react-redux';
import { addGoal, toggleWellness } from '../actions';
import Form from '../components/Form';


const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (text, label) => {
      dispatch(addGoal(text, label))
    }
  }
  };


export default connect(null, mapDispatchToProps)(Form);
