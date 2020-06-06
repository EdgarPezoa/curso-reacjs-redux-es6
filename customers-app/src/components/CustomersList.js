import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = (props) => {
    const { customers, urlPath } = props;
    return(
        <div className="customersList">
            {
                customers.map((customer) => 
                    <CustomerListItem
                        key = { customer.dni }
                        name = { customer.name }
                        editAction = {"EDITAR"}
                        deleteAction = {"ELIMINAR"}
                        urlPath = { urlPath }
                        dni = {customer.dni}
                    /> 
                )
            }
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired
}

export default CustomersList;