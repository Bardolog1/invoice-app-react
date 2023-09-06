import ItemView from './ItemView';
import PropTypes from 'prop-types';


const ProductsView = ({items, handleDelete}) => {
  return (
    <>
        <h3>Products</h3>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  return (
                    <ItemView item={item} key={item.id} handleDelete={handleDelete}></ItemView>
                  );
                })}
              </tbody>
            </table>
    </>
  )
}

ProductsView.propTypes = {
  items: PropTypes.array.isRequired,
  
};


export default ProductsView