import PropTypes from 'prop-types';
const CompanyView = ({company}) => {
  return (
    <>
        <h3>Company</h3>
                <ul className="list-group">
                  <li className="list-group-item active">{company.name}</li>
                  <li className="list-group-item">Fiscal Id: {company.fiscalId}</li>
                </ul>
    </>
  )
}

CompanyView.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fiscalId: PropTypes.string.isRequired,
  }).isRequired,
};


export default CompanyView