import {Img, Items} from "./ImageGalleryItem.styled"




export const ImageGalleryItem = ({image}) =>{
    const { largeImageURL, tags} = image
    return(
        <Items>
            <Img src={largeImageURL} alt={tags} width="300"/>
        </Items>
    )
}

