import React from 'react';
import PropTypes from 'prop-types';

const Table = ({collection}) => {
	return (
			<ul>
				{ collection.map(user => {
					return (
							<li style={{'listStyle': 'none', 'color': 'blue'}}
									key={user.id}>{user.email} ---- {user.name} ---- {user.website}
							</li>
					);
				})
				}
			</ul>
	);
};

Table.propTypes = {
	collection: PropTypes.array
};

export default Table;