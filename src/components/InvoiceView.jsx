import PropTypes from 'prop-types';

const InvoiceView = ({id, invoiceName}) => {
  return (
        <>
             <ul className="list-group">
              <li className="list-group-item">Invoice N°  {id}</li>
              <li className="list-group-item">Concept: {invoiceName}</li>
            </ul>
        </>
          );
}

InvoiceView.propTypes = {
  id: PropTypes.number.isRequired,
  invoiceName: PropTypes.string.isRequired
}

export default InvoiceView