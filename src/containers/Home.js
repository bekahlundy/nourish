import { connect } from 'react-redux';
import { addStuff } from '../actions';
import Home from '../components/Home';

const mapStateToProps = state => {
  // return an object of redux store data
  // that you'd like available in your component
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    addStuff: (data) => {
      dispatch(addStuff(data))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
