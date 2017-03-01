import { connect } from 'react-redux';
import { addGoal, toggleWellness } from '../actions';
import Form from '../components/Form';


const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (text, label, physical, emotional, mental, spiritual, total) => {
      dispatch(addGoal(text, label, physical, emotional, mental, spiritual, total))
    }
  }
  };


export default connect(null, mapDispatchToProps)(Form);
