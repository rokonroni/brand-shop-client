import PropTypes from 'prop-types';

const Categories = ({products}) => {
    return (
        <div>
            {
                products.map(product => )
            }
        </div>
    );
};
Categories.propTypes = {
  products: PropTypes.array
}
export default Categories;