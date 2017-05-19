import React, { Component } from 'react';
import Table from '../components/Table';
import PropTypes from 'prop-types';
//react-redux
import { connect } from 'react-redux';
//actions
import { fetchClients } from '../actions/index';

class AttendanceApp extends Component {

	componentDidMount() {
		debugger;
		dispatch(fetchClients(''));
	}

	render() {
		debugger;
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
	debugger;
	const isFetching = state.clientsByFilter ? state.clientsByFilter.isFetching : true;
	const clientsByFilter = state.clientsByFilter.data;
	console.log('isFetching', isFetching);
	return {
		isFetching,
		clientsByFilter
	};
};

export default connect(mapStateToProps)(AttendanceApp);