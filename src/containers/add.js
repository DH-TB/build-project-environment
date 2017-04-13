import Add from '../components/add';
import {connect} from 'react-redux';

const mapStateToProps = (state)=> {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        onAdd: (input)=> {
            dispatch({type: 'ADD', text: input})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);