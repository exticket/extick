import React, { useState } from 'react';
import MenuItem from './MenuItem';
import classNames from 'classnames';

function Menu({ items, ulClass, liClass, liClassClicked, onItemClicked }) {
    const [clickedItemId, setClickedItemId] = useState('1');
    function clickHandler(id) {
        setClickedItemId(id);
        onItemClicked(id);
    }
    return <ul className={ulClass}>
        {items.map((item) => <MenuItem key={item._id} liClass={classNames({[liClass] : true, [liClassClicked] : item._id === clickedItemId})} item={item} clickHandler={clickHandler} />)}
    </ul>
}

export default Menu;