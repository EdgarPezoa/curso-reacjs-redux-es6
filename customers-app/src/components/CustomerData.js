import React from 'react';
import PropTypes from 'prop-types';

//Components
import CustomersActions from './CustomersActions';

const CustomerData = (props) => {
    const { id, name, dni, age, onBack, isDeleteAllow, onDelete } = props;
    return(
        <div className="customerData">
            <h2>Datos del cliente</h2>
            <div><strong>Nombre: </strong><i>{ name }</i></div>
            <div><strong>DNI: </strong><i>{ dni }</i></div>
            <div><strong>Años: </strong><i>{ age }</i></div>
            <CustomersActions>
                <button onClick={ onBack }>Volver</button>
                { isDeleteAllow && <button onClick={ () => onDelete(id) }>Eliminar</button>}
            </CustomersActions>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func
}

export default CustomerData;