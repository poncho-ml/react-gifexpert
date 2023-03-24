import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs(category);
        // console.log(newImages);
        setImages(newImages);
        setIsLoading(false);
        // console.log(images)
    }

    useEffect( () => {
        getImages();
    }, [] );
    
    return{
        images: images,
        isLoading
    }
}
