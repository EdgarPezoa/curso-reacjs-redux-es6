import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = (props) => {
    const { name, dni, age } = props;
    return(
        <div className="customerData">
            <h2>Datos del cliente</h2>
            <div><strong>Nombre: </strong><i>{ name }</i></div>
            <div><strong>DNI: </strong><i>{ dni }</i></div>
            <div><strong>Años: </strong><i>{ age }</i></div>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default CustomerData;