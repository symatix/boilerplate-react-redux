import React, { Component } from 'react'
import { connect } from 'react-redux'

class State extends Component {
	render(){
		return(
			<div>
				<h1>State</h1>
				<h3>{this.props.init.state}</h3>
			</div>
		)
	}
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        init:state.init[0]
    };
}

export default connect(mapStateToProps)(State);
