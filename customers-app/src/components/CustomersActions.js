import React from 'react';
import PropTypes from 'prop-types';

const CustomersActions = (props) => {
    const { children } = props;
    return(
        <div className="customersActions">
            <div>{ children }</div>
        </div>
    );
};

CustomersActions.propTypes = {
    children: PropTypes.node.isRequired
}

export default CustomersActions;