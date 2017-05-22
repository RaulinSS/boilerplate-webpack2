import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';


class Table extends Component {
	constructor(props) {
		super(props);
	}

	_renderTableHeaders() {
		if (this.props.schema && this.props.schema.length > 0) {
			return (
						this.props.schema.map((item, index) => <th key={index}>{item}</th>)
			);
		}

		console.log('precisa cadastrar um schema com os dados dos headers da tabela');
		return null;
	}

	_renderItemsRow(object) {
		if (Object.keys(object) && Object.keys(object).length > 0) {
			return (
				Object.keys(object).map((key, index) => (
						<td key={index}>{object[key]}</td>
				))
			);
		}

		return null;
	}

	_renderTableRows(cell, index) {
		const itemsRow = this._renderItemsRow(cell);

		return (
			<tr key={index}>
					{itemsRow}
			</tr>
		);
	}

	_renderTableBody() {
		if (this.props.collection && this.props.collection.length > 0) {
			return (
				this.props.collection.map(this._renderTableRows.bind(this))
			);
		}

		console.log('precisa cadastrar uma coleção com os dados que renderizaram no body da tabela');
		return null;
	}

	render() {
		return (
				<table className={styles.Table}>
						<thead>
							<tr>
								{
									this._renderTableHeaders()
								}
							</tr>
							</thead>
							<tbody>
								{
									this._renderTableBody()
								}
							</tbody>
					</table>
		);
	};
}

Table.propTypes = {
	schema: PropTypes.array.isRequired,
	collection: PropTypes.array.isRequired,
	clickable: PropTypes.bool,
	onClick: PropTypes.func
};

export default Table;