import PropTypes from "prop-types";

const ItemView = ({ item, handleDelete }) => {
  const { id, name, quantity, price } = item;
  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{price * quantity}</td>
        <td> <button className="btn btn-danger" onClick={()=>handleDelete(id)}>Delete</button></td>
      </tr>
    </>
  );
};

ItemView.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};


export default ItemView;
