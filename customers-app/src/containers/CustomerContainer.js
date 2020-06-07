import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { SubmissionError } from 'redux-form';

//Components
import AppFrame from '../components/AppFrame';
import CustomerData from '../components/CustomerData';
import CustomerEdit from '../components/CustomerEdit';

//Redux
import { getCustomerByDni } from '../redux/selectors/customers';
import { fetchCustomers } from '../redux/actions/fetchCustomers';
import { updateCustomer } from '../redux/actions/updateCustomer';
import { deleteCustomer } from '../redux/actions/deleteCustomer';

const CustomerContainer = (props) => {
    const { dni, customer, history, fetchCustomers, updateCustomer, deleteCustomer } = props;

    useEffect(()=>{
        if(!customer){
            fetchCustomers();
        }
        
    },[]);

    const handleSubmit = (values) =>{
        const { id } = values;
        return updateCustomer(id, values).catch(e => {
            throw new SubmissionError(e);
        });
    };

    const handleOnBack = (event) =>{
        event.preventDefault();
        history.goBack();
    };

    const handleOnSubmitSuccess = () =>{
        history.goBack();
    };

    const handleOnDelete = (id) =>{
        deleteCustomer(id).then(res => {
            history.goBack();
        });
    };


    const renderCustomerControl = (isEdit, isDelete) => {
        if(customer){
            const CustomerControl = isEdit ? CustomerEdit : CustomerData;
            return <CustomerControl {...customer} 
                onBack = { handleOnBack }
                onSubmit = { handleSubmit } 
                onSubmitSuccess={ handleOnSubmitSuccess }
                isDeleteAllow = {!!isDelete }
                onDelete = { handleOnDelete }
            />
        }

        return null;
    };

    const renderBody = () => {
        return (
            <Route 
                path="/customer/:dni/edit" 
                children = {
                    ({match: isEdit}) =>(
                        <Route 
                            path="/customer/:dni/delete"
                            children = {
                                ({match: isDelete}) => renderCustomerControl(isEdit, isDelete)
                            }
                        />)
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
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

const mapDispatchToProps =  { 
    fetchCustomers,
    updateCustomer,
    deleteCustomer
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainer));