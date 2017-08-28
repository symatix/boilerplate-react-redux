import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../redux/actions'

class Button extends Component {
	render(){
		return(
			<button 
				className="btn btn-default"
				onClick={this.props.changeState}>
				Change state
			</button>
		)
	}
}


// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        init: state.init
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({changeState: actions.changeState}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Button);