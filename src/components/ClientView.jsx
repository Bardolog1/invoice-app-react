
import PropTypes from 'prop-types';
const ClientView = ({client}) => {

    const { 
      name: clientName, 
      lastname, 
      phone , 
      address:{ 
        city, 
        street, 
        number 
      }
    } = client;

  return (

    <>
      <h3>Client</h3>
      <ul className="list-group">
        <li className="list-group-item active">
          {clientName} {lastname}
        </li>
        <li className="list-group-item">Phone: {phone}</li>
        <li className="list-group-item">
          Address: {city} {street} {number}
        </li>
      </ul>
    </>
  );
};

ClientView.propTypes  = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};


export default ClientView;
