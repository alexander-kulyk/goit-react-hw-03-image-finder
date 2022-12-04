import PropTypes  from "prop-types";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import ImgList from "./ImageGallery.styled"




export const ImageGallery = ({ imgData, onClickCard }) =>{
    return(
            <ImgList >
                <ImageGalleryItem imgData={imgData} onClickCard={onClickCard} />
            </ImgList>

    )
};


ImageGallery.propTypes = {
    onClickCard: PropTypes.func.isRequired,
    imgData: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          largeImageURL:  PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
        }),
    ),
}

