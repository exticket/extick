import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../../apis/categoriesApi';
import Select from 'react-select'

function Dropdown() {
    const [categories, setCategories] = useState([]);

    async function fetchData() {
        try {
            let categories = await getAllCategories();
            setCategories(categories.map((item) => {
                return {
                    value: item._id,
                    label: item.name
                }
            }))
           
        } catch (error) {

            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    
    return <div style={{ width: "10%" }}>
        <Select options={categories}> </Select>
    </div>
}

export default Dropdown;

