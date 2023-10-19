import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Category = ({ category }) => {
  
  return (
    <Link to={`brand/${category.name}`}>
       <div>
      <div className="card card-compact w-96 bg-base-100 dark:bg-black shadow-xl">
        <figure>
          <img className='w-full h-1/2'
            src={category.image}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold py-3 text-center ">{category.name}</h2>
        </div>
      </div>
    </div>
    </Link>
   
  );
};
Category.propTypes = {
  category: PropTypes.object.isRequired
}
export default Category;
