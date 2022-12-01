import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import ImgList from "./ImageGallery.styled"



export const ImageGallery = ({imgData}) =>{
    const images = imgData.hits;
    return(
        <ImgList>
        {images.map(item => (
            <ImageGalleryItem image ={item}/>
        ))}
        </ImgList>

    )
}

//{largeImageURL, id}