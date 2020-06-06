import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrame = (props) => {
    const { header, body } = props;
    return(
        <div className="appFrame">
            <AppHeader title={ header } />
            <div className="">{ body }</div>
            {/* <div className="">{ footer }</div> */}
            <div>APLICACION DE EJEMPLO</div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
}

export default AppFrame;