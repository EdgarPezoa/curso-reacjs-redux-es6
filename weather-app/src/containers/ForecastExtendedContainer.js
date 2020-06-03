import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForeCastExtended from '../components/ForecastExtended';

const ForecastExtendedContainer = (props) => {
    const { city } = props;

    return(
        <div>
            {
                city &&
                <ForeCastExtended city={ city } />
            }
        </div>
    );
};

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string
}

const mapStateToProps = ({city}) => ({
    city
})
  
export default connect(mapStateToProps)(ForecastExtendedContainer);