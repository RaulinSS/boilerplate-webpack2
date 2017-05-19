import React from 'react';
import PropTypes from 'prop-types';

const Table = ({collection}) => {
	return (
			<ul>
						collection.map(user => (
								<li>{user.name} --- {user.email}</li>
						)
				</ul>
	);
};

Table.propTypes = {
	collection: PropTypes.array
};

export default Table;