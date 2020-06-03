import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Components
import LocationList from '../components/LocationList';

//Actions
import { setCities } from '../redux/actions';

const LocationListContainer = (props) => {
    const { cities, setCities } = props;
    const handleSelectionLocation = newCity => {
        setCities(newCity);
      };

    return(
        <LocationList 
            cities={cities} 
            onSelectedLocation={ handleSelectionLocation }
        />
    );
}

LocationListContainer.propTypes = {
    setCities: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    setCities: value => dispatch(setCities(value))
  });
  
export default connect(null, mapDispatchToProps)(LocationListContainer);