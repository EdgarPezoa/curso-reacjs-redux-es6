import React from 'react';
import { withRouter } from 'react-router-dom';

//Components
import AppFrame from '../components/AppFrame'
import CustomersActions from '../components/CustomersActions';


const HomeContainer = (props) => {
    const { history } = props;

    const handleOnClick = () => {
        history.push('/customers');
    };

    return(
        <div className="HomeContainer">
            <AppFrame 
                header = "Home"
                body = {
                    <div>
                        Esta es la pantalla inicial
                        <CustomersActions>
                            <button onClick={ handleOnClick }>Listado de clientes</button>
                            {/* <Link to="/customers">Listado de clientes</Link> */}
                        </CustomersActions>
                    </div>
                }
            />
        </div>
    );
};

export default withRouter(HomeContainer);