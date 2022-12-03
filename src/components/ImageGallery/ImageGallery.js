import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import ImgList from "./ImageGallery.styled"



export const ImageGallery = ({ imgData, onClickCard }) =>{
    return(
        <ImgList >
            <ImageGalleryItem imgData={imgData} onClickCard={onClickCard} />
        </ImgList>

    )
}

