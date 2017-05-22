import React, { Component } from 'react';
import PropTypes from 'prop-types';
//react-redux
import { connect } from 'react-redux';
//actions
//import { fetchClients } from '../actions/index';
//components
import Button from '../components/button/index';
import Table from '../components/table/index';

class AttendanceApp extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//debugger;
		//this.props.dispatch(fetchClients(''));
	}

	render() {
		//const { isFetching, clientsByFilter } = this.props;
		const SchemaClients = ['id cliente', 'conta', 'status', 'nome', 'email', 'email atendimento', 'website', 'cpf/cnpj',
			'telefone', 'aplicacões autorizadas'];

		const arrayClients = [{
			id: '0001',
			account: 'icone',
			status: 'não verificada',
			name: 'raul soto',
			email: 'rsoto_1989@hotmail.com',
			email_attendance: '',
			website: '',
			cpf_cnpj: '34761415606',
			phone: '987802937',
			other_aplications: 'sim'
		},
		{
			id: '0002',
			account: 'icone',
			status: 'verificada',
			name: 'hulk avengers',
			email: 'hulk_3000@hotmail.com',
			email_attendance: '',
			website: '',
			cpf_cnpj: '74217317000110',
			phone: '987802937',
			other_aplications: 'sim'
		},
		{
			id: '0003',
			account: 'icone',
			status: 'verificada',
			name: 'superman avengers',
			email: 'superman_3000@hotmail.com',
			email_attendance: '',
			website: '',
			cpf_cnpj: '74217317000110',
			phone: '987802937',
			other_aplications: 'não'
		}];

		return (
				<div>
						<Button text="Buscar"/>
						<Table schema={SchemaClients}
						collection={arrayClients}
						clickable={true}
						/>
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