import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.scss';

class Table extends Component {

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
		const cx = classNames.bind(styles);
		const rowStyle = cx({
			clickable: this.props.clickable
		});

		const itemsRow = this._renderItemsRow(cell);

		return (
			<tr key={index} className={rowStyle} onClick = {this.props.clickable && this._handleTableClick.bind(this, cell)} >
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

	_handleTableClick(infoRow, event) {
		this.props.onClick(infoRow);
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

Table.defaultProps = {
	clickable: false,
	onClick: () => {}
};

export default Table;