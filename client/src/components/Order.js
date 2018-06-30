import React from 'react';
import { connect } from 'react-redux';

class Order extends React.Component {
	render() {
		const { user } = this.props
		debugger
		return ( user.name
		)
	}
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Order);