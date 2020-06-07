import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

//Utils
import { setPropsAsInitial } from '../utils/setPropsAsInitial';

//Components
import CustomersActions from '../components/CustomersActions';



const isRequired = (value) => (
    !value && "Este campo es requerido"
);

const isNumber = (value) => (
    isNaN(Number(value)) && "El campo debe ser numerico"
);

//VALIDACION GLOBAL
// const validate = (values) => {
//     const error = {};

//     if(!values.name){
//         error.name = "El campo nombre es requerido";
//     }
//     return error;
// };



const toNumber = (value) => (value && Number(value));
const toUpper = (value) => (value && value.toUpperCase());
const toLower = (value) => (value && value.toLowerCase());
const onlyGrow = (value, prev, values) => (
    value && (!prev ? value : (value > prev ? value : prev))
);

const CustomerEdit = (props) => {
    const { onBack, handleSubmit, submitting, pristine, submitSucceeded } = props;
    const nameTxt = useRef(null);

    useEffect(()=>{
        firstFocus(nameTxt);
    }, []);

    const firstFocus = (referencedInput) => ( referencedInput.current.focus() );

    const renderField = ({ input, name, label, meta, type='text', withFocus }) => {
        return(
            <div>
                <label htmlFor={name}> { label } </label>
                <input {...input} name={ name } type={type} ref={ withFocus ? nameTxt : null } />
                {
                    meta.touched && meta.error && <span>{ meta.error }</span>
                }
                
            </div>
        );
    };

    return(
        <div className="customerEdit">
            <h2>Edicion de cliente</h2>
            <form onSubmit={ handleSubmit }>
                <Field 
                    withFocus
                    label="Nombre"
                    name="name"
                    type="text"
                    parse = { toUpper }
                    format ={ toLower }
                    component={ renderField }
                    validate = { isRequired }
                />
                <Field 
                    label="DNI"
                    name="dni"
                    type="text"
                    component={ renderField }
                    validate = { isRequired }
                />
                <Field 
                    label="Edad"
                    name="age"
                    type="number"
                    parse={ toNumber }
                    normalize = { onlyGrow }
                    component={ renderField }
                    validate = { [isRequired, isNumber] }
                />
                <CustomersActions>
                    <button type="submit" disabled={ submitting || pristine }>Aceptar</button>
                    <button type="button" onClick={onBack} disabled={ submitting }>Cancelar</button>
                    <button type="button" onClick={ ()=>firstFocus(nameTxt) } disabled={ submitting }>focus</button>
                </CustomersActions>
                <Prompt
                    when={!pristine && !submitSucceeded}
                    message={"Se perderan los datos si continua"}
                />
            </form>

        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    onBack: PropTypes.func.isRequired
}

const customerEditForm = reduxForm({
    form: 'CustomerEdit'
    // validate
});

export default setPropsAsInitial(customerEditForm (CustomerEdit))