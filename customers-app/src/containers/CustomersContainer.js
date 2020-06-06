import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Components
import AppFrame from '../components/AppFrame';
import CustomersList from  '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

//Redux
import { fetchCustomers } from '../redux/actions/fetchCustomers';
import { getCustomers } from '../redux/selectors/customers';

const CustomersContainer = (props) => {
    const { customers , history, fetchCustomers } = props;

    useEffect(()=>{
        fetchCustomers();
    },[]);

    const handleAddNew = () => {
        history.push('/customer/new');
    };

    const renderBody = (customers) => {
        return(
            <>
                <CustomersList
                    customers = { customers }
                    urlPath = {'customer'}
                />
                <CustomersActions>
                    <button onClick={handleAddNew}>Nuevo Cliente</button>
                </CustomersActions>
            </>
        );
    };

    return(
        <div className="CustomersContainer
    ">
            <AppFrame 
                header = { "Listado de Clientes" }
                body = { renderBody(customers) }
            />
        </div>
    );
};

CustomersContainer.defaultProps = {
    customers: []
};

CustomersContainer.propTypes = {
    customers: PropTypes.array.isRequired,
    fetchCustomers: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    customers: getCustomers(state)
});

const mapDispatchToProps =  { fetchCustomers };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainer));