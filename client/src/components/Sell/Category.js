import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../../apis/categoriesApi';
import Select from 'react-select'

// function Dropdown() {

//     const [options, setOptions] = useState([]);
//     useEffect(() => {
//         getAllCategories()
//             .then(res => {
//                 let items = res.data.data;
//                 setOptions(items.map((item) => {
//                     return {
//                         value: item._id,
//                         label: item.name
//                     }
//                 }))
//             })
//             .catch(error => console.log(error));
//     }, []);

//     return (
//         <div style={{ width: "10%" }}>
//             <Select options={options} />
//             {/* <input type="text" name="Catgoery" ref={register}/>
//             {!errors.fullname && (<div> wrong </div>)} */}
//         </div>
//     )

// }
// export default Dropdown;

function Dropdown() {
    const [categories, setCategories] = useState([]);
    // const [tickets, setTickets] = useState([]);
    const [categoryId, setCategoryId] = useState(null);


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

