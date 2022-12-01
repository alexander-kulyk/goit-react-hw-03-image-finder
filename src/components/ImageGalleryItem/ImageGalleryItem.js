import {Img, Items} from "./ImageGalleryItem.styled"




export const ImageGalleryItem = ({image}) =>{
    const { largeImageURL, id , tags} = image
    return(
        <Items key={id}>
            <Img src={largeImageURL} alt={tags} width="300"/>
        </Items>
    )
}

