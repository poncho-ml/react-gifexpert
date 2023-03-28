import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);
    

    return (
        <>
            <h3> {category} </h3>
            {
                isLoading && (<h2>cargando</h2>)
            }
            <div className="card-grid">
                {/* {images.map(({id, title, url}) =>  ( <li key={id}><img src={url} alt="" />{title}</li>  ))} */}
                {images.map((image) =>  (  <GifItem {...image} key={image.id}/>  ))}
               
            </div>
        </>
    )

}
