import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samuai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = () => {
        //setCategories( ...categories, 'Quinto elemento' );
        setCategories( categories => [ ...categories, 'Quinto elemento'] );
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>
            
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
    /*
                categories.map(category => {
                        return <li key={ category }> { category } </li>
                    })
     */
}

export default GifExpertApp
