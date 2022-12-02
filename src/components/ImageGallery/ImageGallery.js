import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import ImgList from "./ImageGallery.styled"



export const ImageGallery = ({imgData}) =>{
    const images = imgData?.hits;
    return(
        <ImgList>
        {images && images.map(img => (
            <ImageGalleryItem key={img.id} image ={img}/>
        ))}
        </ImgList>

    )
}

//{largeImageURL, id}