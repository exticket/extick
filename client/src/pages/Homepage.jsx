import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import { getAllCategories } from '../apis/categoriesApi';
import { getAllTickets } from '../apis/ticketsApi';
import TicketsContainer from '../components/TicketsContainer';
import Banner from '../components/Home/Banner';
// import OutOfStock from '../components/Home/OutOfStock';

function Homepage() {
    const [categories, setCategories] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [categoryId, setCategoryId] = useState(null);

    async function fetchData() {

        try {
            let categories = await getAllCategories();
            categories.unshift({ _id: '1', name: 'All' });
            setCategories(categories);

            setTickets(await getAllTickets());

        } catch (error) {

            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const updateCategoryId = (itemId) => {
        setCategoryId(itemId === "1" ? null : itemId);
    }

    return <div>
        <Banner />
        <Menu items={categories} ulClass="category-menu" liClass="category-item" liClassClicked="category-item-clicked" onItemClicked={updateCategoryId} />
        <TicketsContainer tickets={tickets} categoryId={categoryId} />
    </div>
}
export default Homepage;