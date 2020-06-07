import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SubmissionError } from 'redux-form';

//Components
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';

//Redux
import { insertCustomer } from '../redux/actions/insertCustomer';


const NewCustomerContainer = (props) => {
    const { history, insertCustomer } = props;

    const handleOnBack = () => {
        history.goBack();
    };

    const handleSubmit = (values) => {
        return insertCustomer(values).catch(e => {
            throw new SubmissionError(e);
        });
    };

    const handleOnSubmitSuccess = () => {
        history.goBack();
    };

    const renderBody = () => {
        const newCustomer= {
            "id": "",
            "dni": "",
            "name": "",
            "age": 0
        };
        return(
            <CustomerEdit {...newCustomer}
                onBack = { handleOnBack }
                onSubmit = { handleSubmit } 
                onSubmitSuccess={ handleOnSubmitSuccess }
            />
        )
    };

    return(
        <div className="newCustomerContainer">
            <AppFrame
                header="Nuevo cliente"
                body={ renderBody() }
            ></AppFrame>
        </div>
    );
};

NewCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    insertCustomer
};

export default withRouter(connect(null, mapDispatchToProps)(NewCustomerContainer));