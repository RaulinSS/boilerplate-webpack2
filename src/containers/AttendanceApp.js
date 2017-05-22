import React, { Component } from 'react';
import PropTypes from 'prop-types';
//react-redux
import { connect } from 'react-redux';
//actions
import { fetchClients } from '../actions/index';
//components
import Table from '../components/Table';

class AttendanceApp extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchClients(''));
	}

	render() {
		const { isFetching, clientsByFilter } = this.props;
		return (
				<div>
						<p>Clientes</p>
						{isFetching && clientsByFilter.length === 0 &&
          <h2>Loading...</h2>
       }
						{clientsByFilter.length > 0 &&
							<Table collection={clientsByFilter}/>
						}
				</div>
		);
	}
};

AttendanceApp.propTypes = {
	clients: PropTypes.array
};

const mapStateToProps = function(state) {
	const isFetching = state.clientsByFilter ? state.clientsByFilter.isFetching : true;
	const clientsByFilter = state.clientsByFilter.data;
	return {
		isFetching,
		clientsByFilter
	};
};

export default connect(mapStateToProps)(AttendanceApp);