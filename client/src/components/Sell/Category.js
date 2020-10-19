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
   
    const [categoryId, setCategoryId] = useState(null);

    async function fetchData() {
        try {
            let categories = await getAllCategories();
            categories.unshift({ _id: '1', name: 'All' });
            setCategories(categories);

          

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
        
        <Select options={categories}  />
       
    </div>
}

export default Dropdown;

// const types = ['music', 'movie', 'theater', 'kids'];
// const option = types.map(type=> <option value={type} key={type}>{type}</option>)

// class Dropdown extends React.Component {

//     constructor(){
//         super()
//         this.state = {
//             selected: ''
//         }
//         this.handleSelect = this.handleSelect.bind(this)
//     }

//     handleSelect(e){
//         console.log(`selected: `,e.target.value);
//         this.state.selected = e.target.value
//     }

//     getSelected(){
//         return this.state.selected
//     }

//     render(){
//         return (
//             // <select value={this.props.value} onChange={this.handleSelect.bind(this)}>
//             <select value={this.props.value} onChange={this.props.onChangeValue}>
//                 {option}
//             </select>
//         );
//     }
// }

// // export default Select;
