import { connect } from 'react-redux';
import { addGoal } from '../actions';
import Form from '../components/Form';


const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (text, id) => {
      dispatch(addGoal(text, id))
    }
  };
}

export default connect(null, mapDispatchToProps)(Form);
