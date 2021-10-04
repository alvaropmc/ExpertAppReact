//import React, {useState, useEffect} from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //const [count, setCount] = useState(0);

    //const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

    /*
    -- se lleva al hok custom
    useEffect(() => {
        //getGifs();
        getGifs( category )
            .then( setImages );
    }, [ category ]);
    */

    /*
    -- Se lleva al helper
    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=43zz8Qh4Dl48Ja5z8ghcHMUZ2wYwzbIu&q=${ encodeURI(category) }}&limit=10`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        //console.log(gifs);
        setImages(gifs);
    }*/

    //getGifs();

    return (
        <>
            <h3> { category } </h3>
            { loading && <p className=" animate__animated animate__flash ">Loading</p>}
            <div className="card-grid">
                {
                    /*images.map(image => {
                        return <li key={image.id}>{image.title}</li>;
                    })*/
                    images.map(image => {
                        return <GifGridItem 
                            key = { image.id }
                            { ...image } />
                    })
                }
            </div>
        </>
    )

    /*
    <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}/>
     */
}
