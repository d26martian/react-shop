import React from 'react';
import PropTypes from 'prop-types'

const Categories = ({ activeCategory, categories, onClickCategory}) => {

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}
                >
                    Все
                </li>
                {categories &&
                    categories.map((cat, index) => (
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickCategory(index)}
                            key={`${cat}_${index}`}
                        >
                            { cat }
                        </li>
                    ))}
            </ul>
        </div>
    )
};

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
};

Categories.defaultProps = {
    activeCategory: null,
    categories: []
};


export default React.memo(Categories);