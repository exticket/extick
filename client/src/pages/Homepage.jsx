import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import { getAllCategories } from '../apis/categoriesApi';
import TicketsContainer from '../components/Home/TicketsContainer';
import Banner from '../components/Home/Banner';

function Homepage() {
    const [items, setItems] = useState([]);

    const [categoryId, setCategoryId] = useState(null);

    useEffect(() => {
        getAllCategories()
            .then(res => {
                let items = res.data.data;
                items.unshift({ _id: '1', name: 'All' });
                setItems(items);
            })
            .catch(error => console.log(error));
    }, []);

    const updateCategoryId = (itemId) => {
        setCategoryId(itemId);
    }

    return <div>
        <Banner />
        <Menu items={items} ulClass="category-menu" liClass="category-item" liClassClicked="category-item-clicked" onItemClicked={updateCategoryId} />
        <TicketsContainer categoryId={categoryId} />
    </div>
}

export default Homepage;