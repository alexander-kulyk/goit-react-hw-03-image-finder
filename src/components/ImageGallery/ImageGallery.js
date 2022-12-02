import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import ImgList from "./ImageGallery.styled"



export const ImageGallery = ({imgData}) =>{
    const images = imgData;
    return(
        <ImgList>
        {images.length > 0 && images.map(img => (
            <ImageGalleryItem key={img.id} image ={img}/>
        ))}
        </ImgList>

    )
}

