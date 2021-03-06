import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, Pizza, LoadingPizza } from "../../components";

import { setCategory, setSortBy } from '../../redux/actions/filters'
import { fetchPizzas } from "../../redux/actions/pizzas";
import { addPizzaToCart } from "../../redux/actions/cart"
import cart from "../../redux/reducers/cart";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
];

const Home = () => {
    const dispatch = useDispatch();
    //получаем из redux state данные
    const items = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);


    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, []);

    const handleAddPizzaToCart = obj => {
        dispatch(addPizzaToCart(obj));
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    categories={categoryNames}
                />

                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoaded
                    ? items.map(obj => (
                        <Pizza
                            onClickAddPizza={handleAddPizzaToCart}
                            key={obj.id}
                            {...obj}
                            addedCart={cartItems[obj.id] && cartItems[obj.id].items.length}
                            isLoading={true}
                        />))
                    : Array(12)
                        .fill(0)
                        .map((_, index) => <LoadingPizza key={index} />)
                }
            </div>
        </div>
    )
};

export default Home;