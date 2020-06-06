import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

//Components
import AppFrame from '../components/AppFrame';
import CustomerData from '../components/CustomerData';
import CustomerEdit from '../components/CustomerEdit';

//Redux
import { getCustomerByDni } from '../redux/selectors/customers';


const CustomerContainer = (props) => {
    const { dni, customer } = props;

    const renderBody = () => {
        return (
            <Route 
                path="/customer/:dni/edit" 
                children = {
                    ({match}) => {
                        const CustomerControl = match ? CustomerEdit : CustomerData;
                        return <CustomerControl {...customer} />
                    }
                }
            />
        );
    };

    return(
        <div className="customerContainer">
            <AppFrame 
                header = {`Cliente: ${dni}`}
                body = { renderBody() }
                // body = {<p>Datos del cliente:{customer.name}</p>}
            ></AppFrame>
        </div>
    );
};

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default connect(mapStateToProps, null)(CustomerContainer);